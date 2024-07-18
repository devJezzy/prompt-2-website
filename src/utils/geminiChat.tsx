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

const sys_prompt={
"hero":`You are a good selector for hero-section templates. I will provide descriptions of each template within "<template></template>" XML tags.
not based on template title. title just for your reference.
Choose the best template based on user requirements and return "hero-n" for the selected template, where 'n' is the template number.


<template>
1.Agency Hero Section
Header: Logo and name left, navigation bar right, additional button.
Main Section: Two-column; headline, subtext, two buttons on left.

2.Archi Company Hero Section
-eader: Logo and name left, navigation center, button right.
Main Section: Two-column; left with headline and buttons, right with overlapping images.
Footer: Logos of partners/clients.

3.Creative Agency Hero Section
Header: Logo and name left, navigation middle, button right.
Main Section: Central headline with text and button.
Background: Dark with gradient circles.

4.Digital Agency Hero Section
Header: Logo and name left, navigation center, button right.
Main Section: Left with headline and form, right with service image.
Background: Light with soft gradients.

5.Healthcare Hero Section
Header: Name left, navigation right, button.
Main Section: Left with headline and email input, right with healthcare image, statistics below.
Background: Dark, professional tone.

6.Tech Agency Hero Section
Header: Logo left, navigation center, button right.
Main Section: Central headline, text, buttons, and three feature boxes.
Background: Dark with gradient highlights.

7.Medcare Hero Section
Header: Name and navigation center, button right.
Main Section: Left with headline and buttons, right with service image, statistics below.
Background: Light grey, clean look.

8.Portfolio Hero Section
Header: Navigation left, name center, social media right.
Main Section: Left with heading and statistics, center with image, right with skill boxes.
Background: Clean, light, minimalistic.

9.Podcast Agency Website Hero Section
Header: Logo and name left, navigation center, two buttons right.
Main Section: Left with headline and promotional tag, center with service image, engagement indicators below.
Background: Light with gradient accents.
</template>`,"test":"yasar"}







export default async function getResponse(query: string): Promise<any> {

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: sys_prompt["hero"],
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(query);
  return result.response.text();
}