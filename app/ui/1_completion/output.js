const DefaultGenerateTextResult= {
  steps: [
     {
      content: [
        {
          type: 'text',
          text: 'LLM stands for **Large Language Model**. It refers to a type of artificial intelligence (AI) model designed to understand, generate, and sometimes translate natural language text. These models are trained on vast amounts of text data from diverse sources, enabling them to perform tasks such as answering questions, writing essays, summarizing content, and more.\n' +
            '\n' +
            `Notable examples of LLMs include OpenAI's GPT series (like GPT-3, GPT-4), Google's BERT, and others. They are called "large" because they contain billions or even trillions of parameters, which allow them to capture complex language patterns and nuances.\n` +
            '\n' +
            'Would you like more details on how LLMs work or their applications?',
          providerMetadata: {
            openai: {
              itemId: 'msg_0a0aee17604b94e500691b96717f7481a39cce4537833b132c'
            }
          }
        }
      ],
      finishReason: 'stop',
      usage: {
        inputTokens: 12,
        outputTokens: 143,
        totalTokens: 155,
        reasoningTokens: 0,
        cachedInputTokens: 0
      },
      warnings: [],
      request: {
        body: {
          model: 'gpt-4.1-nano',
          input: [
            {
              role: 'user',
              content: [ { type: 'input_text', text: 'what is LLM?' } ]
            }
          ],
          temperature: undefined,
          top_p: undefined,
          max_output_tokens: undefined,
          max_tool_calls: undefined,
          metadata: undefined,
          parallel_tool_calls: undefined,
          previous_response_id: undefined,
          store: undefined,
          user: undefined,
          instructions: undefined,
          service_tier: undefined,
          include: undefined,
          prompt_cache_key: undefined,
          prompt_cache_retention: undefined,
          safety_identifier: undefined,
          top_logprobs: undefined,
          truncation: undefined,
          tools: undefined,
          tool_choice: undefined
        }
      },
      response: {
        id: 'resp_0a0aee17604b94e500691b9670721c81a3a6619ccbb09baf67',
        timestamp: 2025-11-17T21:41:04.000Z,
        modelId: 'gpt-4.1-nano-2025-04-14',
        headers: {
          'alt-svc': 'h3=":443"; ma=86400',
          'cf-cache-status': 'DYNAMIC',
          'cf-ray': '9a0263d9dbc96bec-DFW',
          connection: 'keep-alive',
          'content-encoding': 'br',
          'content-type': 'application/json',
          date: 'Mon, 17 Nov 2025 21:41:07 GMT',
          'openai-organization': 'svaddi',
          'openai-processing-ms': '3120',
          'openai-project': 'proj_4mNUmoq7QN7NwBLj2HJ1IRDr',
          'openai-version': '2020-10-01',
          server: 'cloudflare',
          'set-cookie': '_cfuvid=lXrJ02XgxrNDAC5jfSlr3DgfZSNG5w3P0SB9cn3.wFs-1763415667576-0.0.1.1-604800000; path=/; domain=.api.openai.com; HttpOnly; Secure; SameSite=None',
          'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
          'transfer-encoding': 'chunked',
          'x-content-type-options': 'nosniff',
          'x-envoy-upstream-service-time': '3124',
          'x-ratelimit-limit-requests': '500',
          'x-ratelimit-limit-tokens': '200000',
          'x-ratelimit-remaining-requests': '499',
          'x-ratelimit-remaining-tokens': '199969',
          'x-ratelimit-reset-requests': '120ms',
          'x-ratelimit-reset-tokens': '9ms',
          'x-request-id': 'req_05bca2517f2e4a99ad8f672282d10453'
        },
        body: {
          id: 'resp_0a0aee17604b94e500691b9670721c81a3a6619ccbb09baf67',
          object: 'response',
          created_at: 1763415664,
          status: 'completed',
          background: false,
          billing: { payer: 'developer' },
          error: null,
          incomplete_details: null,
          instructions: null,
          max_output_tokens: null,
          max_tool_calls: null,
          model: 'gpt-4.1-nano-2025-04-14',
          output: [
            {
              id: 'msg_0a0aee17604b94e500691b96717f7481a39cce4537833b132c',
              type: 'message',
              status: 'completed',
              content: [
                {
                  type: 'output_text',
                  annotations: [],
                  logprobs: [],
                  text: 'LLM stands for **Large Language Model**. It refers to a type of artificial intelligence (AI) model designed to understand, generate, and sometimes translate natural language text. These models are trained on vast amounts of text data from diverse sources, enabling them to perform tasks such as answering questions, writing essays, summarizing content, and more.\n' +
                    '\n' +
                    `Notable examples of LLMs include OpenAI's GPT series (like GPT-3, GPT-4), Google's BERT, and others. They are called "large" because they contain billions or even trillions of parameters, which allow them to capture complex language patterns and nuances.\n` +
                    '\n' +
                    'Would you like more details on how LLMs work or their applications?'
                }
              ],
              role: 'assistant'
            }
          ],
          parallel_tool_calls: true,
          previous_response_id: null,
          prompt_cache_key: null,
          prompt_cache_retention: null,
          reasoning: { effort: null, summary: null },
          safety_identifier: null,
          service_tier: 'default',
          store: true,
          temperature: 1,
          text: { format: { type: 'text' }, verbosity: 'medium' },
          tool_choice: 'auto',
          tools: [],
          top_logprobs: 0,
          top_p: 1,
          truncation: 'disabled',
          usage: {
            input_tokens: 12,
            input_tokens_details: { cached_tokens: 0 },
            output_tokens: 143,
            output_tokens_details: { reasoning_tokens: 0 },
            total_tokens: 155
          },
          user: null,
          metadata: {}
        },
        messages: [
          {
            role: 'assistant',
            content: [
              {
                type: 'text',
                text: 'LLM stands for **Large Language Model**. It refers to a type of artificial intelligence (AI) model designed to understand, generate, and sometimes translate natural language text. These models are trained on vast amounts of text data from diverse sources, enabling them to perform tasks such as answering questions, writing essays, summarizing content, and more.\n' +
                  '\n' +
                  `Notable examples of LLMs include OpenAI's GPT series (like GPT-3, GPT-4), Google's BERT, and others. They are called "large" because they contain billions or even trillions of parameters, which allow them to capture complex language patterns and nuances.\n` +
                  '\n' +
                  'Would you like more details on how LLMs work or their applications?',
                providerOptions: {
                  openai: {
                    itemId: 'msg_0a0aee17604b94e500691b96717f7481a39cce4537833b132c'
                  }
                }
              }
            ]
          }
        ]
      },
      providerMetadata: {
        openai: {
          responseId: 'resp_0a0aee17604b94e500691b9670721c81a3a6619ccbb09baf67',
          serviceTier: 'default'
        }
      }
    }
  ],
  resolvedOutput: undefined
}