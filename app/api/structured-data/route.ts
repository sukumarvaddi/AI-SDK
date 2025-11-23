import { streamObject } from "ai";
import { recipeSchema } from "./schema";
import { openai } from "@ai-sdk/openai";

export async function POST(request: Request) {
  const { dish } = await request.json();

  try {
    const recipe = streamObject({
      model: openai("gpt-4.1-nano"),
      schema: recipeSchema,
      prompt: `Provide a recipe for the dish "${dish}"`
    })
    return recipe.toTextStreamResponse();
  } catch (error) {
    console.dir(error, { depth: null, colors: true });
    return new Response("Internal Server Error", { status: 500 });
  }
} 