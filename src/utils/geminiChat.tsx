import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSystemPrompt } from "./systemPrompt";


const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "AIzaSyDZyCG6kKFqEkTIQZu8kFTNjR4UFZdHG3A";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};



export default async function getResponse(query: string, section : string): Promise<any> {

  const sys_prompt = getSystemPrompt(section)
  console.log(sys_prompt)

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: sys_prompt,
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(query);
  return result.response.text();
}