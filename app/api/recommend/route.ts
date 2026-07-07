import { GoogleGenerativeAI } from "@google/generative-ai";
import { supabase } from "../../../lib/supabase";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { articleId } = await req.json();

  const { data: article } = await supabase
    .from("articles")
    .select("*")
    .eq("id", articleId)
    .single();

  if (!article) {
    return Response.json([]);
  }

  const { data: allArticles } = await supabase
    .from("articles")
    .select("id,title,summary,category")
    .neq("id", articleId)
    .limit(50);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
Current article:

Title:
${article.title}

Summary:
${article.summary}

Choose the 5 most related articles from this JSON.

Return ONLY the IDs.

${JSON.stringify(allArticles)}
`;

  const result = await model.generateContent(prompt);

  const ids = result.response
    .text()
    .match(/\d+/g)
    ?.map(Number);

  const recommendations =
    allArticles?.filter((a) => ids?.includes(a.id)) || [];

  return Response.json(recommendations);
}
