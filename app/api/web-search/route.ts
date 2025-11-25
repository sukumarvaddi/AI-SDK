import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages, UIDataTypes, UIMessage, InferUITools, stepCountIs } from "ai"

const tools = {
  webSearchPreview: openai.tools.webSearch({})


}

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;


export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = streamText({
    model: openai.responses("gpt-5-mini"),
    tools: tools,
    system: "You are an AI assistant that can use multiple tools to provide information about weather and user locations. Use the tools as needed to answer the user's questions accurately.",
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(3),
  })

  result.usage.then((usage) => {
    console.log("Input Tokens:", usage.inputTokens);
    console.log("Output Tokens:", usage.outputTokens);
    console.log("Total Tokens:", usage.totalTokens);
  });
  return result.toUIMessageStreamResponse();
}
