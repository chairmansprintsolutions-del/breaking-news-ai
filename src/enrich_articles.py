import os
import json
from supabase import create_client
from google import genai

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_KEY = os.environ["SUPABASE_SERVICE_KEY"]
GEMINI_KEY = os.environ["GEMINI_API_KEY"]

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
client = genai.Client(api_key=GEMINI_KEY)

articles = (
    supabase.table("articles")
    .select("*")
    .is_("ai_explanation", "null")
    .limit(10)
    .execute()
)

for article in articles.data:

    prompt = f"""
Return ONLY valid JSON.

Article

Title:
{article['title']}

Summary:
{article['summary']}

Generate

{{
"ai_explanation":"",
"prediction":"",
"key_takeaways":["","",""],
"market_impact":"",
"global_impact":"",
"risk_level":"",
"sentiment":"",
"keywords":[""],
"people":[""],
"companies":[""],
"countries":[""],
"reading_time":0
}}

No markdown.
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        text = (
            response.text.replace("```json", "")
            .replace("```", "")
            .strip()
        )

        ai = json.loads(text)

        supabase.table("articles").update(
            {
                "ai_explanation": ai["ai_explanation"],
                "ai_prediction": ai["prediction"],
                "key_takeaways": "\n".join(ai["key_takeaways"]),
                "market_impact": ai["market_impact"],
                "global_impact": ai["global_impact"],
                "risk_level": ai["risk_level"],
                "sentiment": ai["sentiment"],
                "keywords": ai["keywords"],
                "people": ai["people"],
                "companies": ai["companies"],
                "countries": ai["countries"],
                "reading_time": ai["reading_time"],
            }
        ).eq("id", article["id"]).execute()

        print("Updated", article["id"])

    except Exception as e:
        print(article["id"], e)
