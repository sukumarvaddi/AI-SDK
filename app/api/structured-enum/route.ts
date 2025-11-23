import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";


export async function POST(request: Request) {
  const { text } = await request.json();
  const result = await generateObject({
    model: openai("gpt-4.1-mini"),
    output: "enum",
    enum: ["POSITIVE", "NEGATIVE", "NEUTRAL"],
    prompt: `Classify the DC marvel character type of ${text}`
  })

  return result.toJsonResponse();
}