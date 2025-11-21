import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages} from "ai"

export async function POST(request: Request) {
  const {messages} = await request.json();

  const result  = streamText({
    model: openai("gpt-4.1-nano"),
    messages: [{role: "system", content: "You are a helpful coding assistant. Answer any questions description and few line of code so that developers can understand easily."},...convertToModelMessages(messages)]
  })

  result.usage.then((usage) => {
    console.log("Input Tokens:", usage.inputTokens);
    console.log("Output Tokens:", usage.outputTokens);
    console.log("Total Tokens:", usage.totalTokens);
  });
  return result.toUIMessageStreamResponse();

}