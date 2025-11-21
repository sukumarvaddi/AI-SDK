import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export const POST = async (req: Request) => {
  const { prompt } = await req.json();
  //Generates text and calls tools for a given prompt using a language model.

  try {
    const result = await generateText({
      model: openai("gpt-4.1-nano"),
      prompt: prompt
    })
    return Response.json(result.text);

  } catch (e) {
    console.error("Error generating text:", e);
    return Response.json({ error: "Failed to generate text" }, { status: 500 });
  }
}