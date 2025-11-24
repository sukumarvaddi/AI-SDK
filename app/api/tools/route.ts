import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages, tool, UIDataTypes, UIMessage, InferUITools, stepCountIs } from "ai"
import { z } from "zod";

const tools = {
  getWeather: tool({
    name: "Weather tool",
    description: "Provides weather information for a given location.",
    inputSchema: z.object({ location: z.string().describe("Location to get the weather for, e.g., 'New York City'") }),
    execute: async ({ location }) => {

      console.log(location)

      // Mock weather data for demonstration purposes
      const weatherData: Record<string, string> = {
        "New York City": "Sunny, 25°C",
        "San Francisco": "Foggy, 15°C",
        "London": "Rainy, 10°C"
      };
      return weatherData[location] || "Weather data not available for this location.";
    }
  })
}

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;


export async function POST(request: Request) {
  const { messages } = await request.json();

  const result = streamText({
    model: openai("gpt-4.1-nano"),
    tools: tools,
    messages: convertToModelMessages(messages),

    // Involves two steps: (1) calling weather tool , (2) processing its result
    stopWhen: stepCountIs(2),
  })

  result.usage.then((usage) => {
    console.log("Input Tokens:", usage.inputTokens);
    console.log("Output Tokens:", usage.outputTokens);
    console.log("Total Tokens:", usage.totalTokens);
  });
  return result.toUIMessageStreamResponse();
}
