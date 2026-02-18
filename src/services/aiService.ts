import OpenAI from "openai";
import { config } from "../config";

const client = new OpenAI({
  apiKey: config.openaiKey
});

export async function generateCode(prompt: string) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You write production-ready pull requests." },
      { role: "user", content: prompt }
    ],
    temperature: 0.2
  });

  return response.choices[0].message.content || "";
}
