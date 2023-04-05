// this is a simple wrapper around the OpenAI API
const API_KEY = '';
const API_URL = 'https://api.openai.com/v1/completions';

export interface ChatGPTRequest {
  prompt: string;
  max_tokens?: number;
  model: string;
  temperature?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
}

export interface ChatGPTResponse {
  choices: {
    text: string;
  }[];
}

export async function fetchChatGPTResponse(
  request: ChatGPTRequest,
): Promise<ChatGPTResponse> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Error fetching ChatGPT response: ${response.statusText}`);
  }

  return await response.json();
}
