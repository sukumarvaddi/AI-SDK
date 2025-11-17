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
