import { GoogleGenerativeAI } from "@google/generative-ai";

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


const sys_prompt = `You are a sitemap creator. You need to select the necessary sections from available section listout in below based on the user's requirements. Only include the necessary sections.
Available sections:
navbar
hero
feature
blog
about
cta
testimonial
pricing
metrics
trustby
footer
Your response must be section : {available section in array format}
`;


export default async function getSitemap(query: string): Promise<any> {
  const chatSession = await model.startChat({
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