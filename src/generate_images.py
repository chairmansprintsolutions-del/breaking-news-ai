import os
from urllib.parse import quote

from supabase import create_client

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_KEY = os.environ["SUPABASE_SECRET_KEY"]

supabase = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)

response = (
    supabase
    .table("breaking_alerts")
    .select("*")
    .eq("image_generated", False)
    .limit(5)
    .execute()
)

alerts = response.data

for alert in alerts:

    if not alert["image_prompt"]:
        continue

    image_url = (
        "https://image.pollinations.ai/prompt/"
        + quote(alert["image_prompt"])
    )

    supabase.table(
        "breaking_alerts"
    ).update({
        "image_url": image_url,
        "image_generated": True
    }).eq(
        "id",
        alert["id"]
    ).execute()

    print(
        f"Generated image: {alert['title']}"
    )

print("Finished")
