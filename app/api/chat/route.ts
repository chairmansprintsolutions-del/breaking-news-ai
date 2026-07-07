import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(`
You are Breaking News AI.

Answer ONLY using recent world news knowledge.
Keep answers factual, concise and easy to understand.

User:
${message}
`);

    return Response.json({
      answer: result.response.text(),
    });
  } catch (e) {
    return Response.json({
      answer: "Unable to generate response.",
    });
  }
}
