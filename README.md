

# AI SDK Next js project

## Initializing a Project

`npx create-next-app@latest nextjs-ai-app`

## Install AI SDK

`npm install ai @ai-sdk/openai  @ai-sdk/react zod`

- `ai`: This is a core package and provides all the fundamental functions we need.
- `@ai-sdk/openai`: This package helps connect AI models.
- `@ai-sdk/react`: This package contains react specific hooks
- `zod`: Helps create type safe schemas.

## Setup openai API key.

- Go to [Open AI Platform](https://platform.openai.com) and create an account if you do not have one already.

- Navigate to [API keys](https://platform.openai.com/api-keys) section to generate a new secret key.

## Configure the project to use openai API key

- Create a .env.local file in the project root folder (where `package.json` is located) and enter the following configuration:
  `OPEN_AI_API_KEY="YOUR API KEY"`
---
## AI Models and Providers

> What exactly is a model?

"AI model is a program that has been trained on a set of data to recognize patterns and make predictions with out human interventions". It can be thought of as a smart entity that has read millions of books and can make decisions on based on thus obtained knowledge.

The different types of models are

- *Text generation models*:  Process and generate human like text ( can do analysis of text, write text and have conversations in natural language). These are also called LLMs. Because they are trained on massive amounts of date, they are large. The examples are GPT-4 from OpenAI, Claude from Anthropic and Gemini from google.
- *Embedding models*: These convert text to numbers called vectors that capture the meaning of the text. If you can turn the meaning of a sentence into coordinates on a map, similar meanings would be close together on that map. Though they are not used directly, they are the brains behind content recommendations.
- *Image models*:  They either analyze existing images or generate images from text descriptions. e.g. Midjourney, Dall-E and Flux.
- *Multi-modal models*: Swiss Army knives of the AI world. These can handle multiple types of inputs and outputs. They are expensive. e.g. GPT-4, Claude 4 and Gemini.

## Model Characteristics

### Context window

- How much information a model can process in a single conversation?
- This is also known as model's working memory. Some models can remember only few pages of text at once while others can process entire books.

### Intelligence

- how well a model understands nuance, follows complex instructions, and generate high-quality output.

### Speed

- How fast the models can respond to your input?

### Cost

- Faster, smarter and large context window models cost more.

## Tokens

[OpenAI Tokenizer](https://platform.openai.com/tokenizer)

Tokens directly impact your applications in three important ways

- How much text a model can process at once? Each model has a token limit and if you hit that limit, you cannot process any more text

- They determine the price of the API

- THe quality of the output.

The context window is measured in tokens.

1 Million tokens is roughly 2500 to 3000 pages of text. It works as a sliding window. When the maximum limit is reached, older information starts getting flushed out of the context window to make room for new tokens.

### input vs output tokens

Input tokens are everything you send to the model.

Output tokens are everything the model generates in response. 

Different models have different limits for Input and output tokens. Input and output tokens have different pricing. Understanding this helps optimize API costs.

## Prompt Engineering

This is the practice of crafting instructions to get better and appropriate responses from AI models

It is about nudging AI model and guiding it to produce responses that fit application perfectly.

One of the fundamental prompt engg technique is to use system prompts. System prompts are special instructions that personify the behavior of AI through out entire conversation.

Telling what to do to AI is sometimes not enough. You need to show it how to do. This is called `Few-shot Learning`. e.g. You pre-populate the model with system prompt message and an example of user message and assistant message. You do this in order to nude the model to respond in the defined format.

Some of the best practices for prompt engineering are:
1 Start simple and iterate.
2 Be specific but not overly restrictive
3 Consider your audience
4 Monitor costs
5 Test edge cases (handle cases when users ask off topic questions.)
6 Document what works (If you find good prompts, document those so that you can reuse those)


## The order of the projects

1 completion
2 stream
3 chat ( Check video 8-Prompt engineering for variations such as system prompt and few shot learning)
4 structured-data
