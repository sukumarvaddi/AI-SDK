import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  try{
    const result = streamText({
      model:openai("gpt-4.1-nano"),
      prompt
    })

    result.usage.then((usage) => {
      console.log("Input Tokens:", usage.inputTokens);
      console.log("Output Tokens:", usage.outputTokens);
      console.log("Total Tokens:", usage.totalTokens);
    });
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.dir(error, {depth:null, colors:true});
    return new Response("Internal Server Error", { status: 500 });
  }
}