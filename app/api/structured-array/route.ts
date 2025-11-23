import { streamObject } from "ai";
import { pokemonSchema } from "./pokemonSchema";
import { openai } from "@ai-sdk/openai";

export async function POST(request: Request) {
  const { type } = await request.json();

  try {
    const pokemonArray = streamObject({
      model: openai("gpt-4.1-nano"),
      output: "array",
      schema: pokemonSchema,
      prompt: `Provide a list of Pokemon of type "${type}"`
    })
    return pokemonArray.toTextStreamResponse();
  } catch (error) {
    console.dir(error, { depth: null, colors: true });
    return new Response("Internal Server Error", { status: 500 });
  }
}