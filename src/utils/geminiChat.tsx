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
</template>`,

"feature":`1.The UI template features a left-aligned headline and subheading. It includes a vertical list of features with icons and descriptions on the left, and a large image on the right. The layout is clean and structured for showcasing key elements.
2.The UI template has a left-aligned headline and subheading. It features a vertical list of feature descriptions on the left, each highlighted with a background box. On the right, there is a large image displaying a dashboard interface, giving a professional look and feel. The layout is structured for clear presentation of information and visual appeal.
3.The UI template features a dark background with a large headline and subheading on the left. Below, there is a grid of four feature boxes, each with an icon, title, description, and "Live preview" link. On the right side, there is a section with a subheading and description, along with a call-to-action button labeled "Try it now." The layout is clean and divided into feature highlights and a prominent call-to-action area.
4.The UI template features grid of six feature boxes on the left, each with an icon, title, and description. On the right, there is a section with a subheading, a brief description, and a prominent call-to-action button labeled "Try it now." The layout is organized to highlight multiple features and drive user engagement with a clear action point.
5.The UI template features a large headline and subheading on the left. Below, there are three feature boxes with icons, titles, and descriptions. On the right, an image of a smiling person holding a grocery bag is displayed. The layout is clean, emphasizing features and a welcoming visual.
6.The UI template features a headline on the left. Below, there are four feature boxes arranged in a grid, each with an icon, title, and description. On the right, an image of a person enjoying pizza is displayed, framed with a green border. A "Sign up now" button is included below the features, promoting user engagement. The layout is clear and visually appealing.
7.The UI template features a headline and subheading at the top. Below, there are four service boxes arranged in a grid, each with an icon, title, description, and a "Get a quote" link. The layout is organized to highlight multiple services with clear call-to-action options for each.
8.The UI template features a headline and subheading at the top. Below, there are six service boxes arranged in a grid, each with an icon, title, and description. The layout is clean and organized, providing a clear overview of multiple services.
9.The UI template features a headline and subheading at the top. Below, it presents three feature sections, each with a screenshot of a dashboard interface on the left and a description with a list of advantages on the right. The layout is structured to highlight key features with accompanying visuals and detailed benefits.
10.The UI template features a headline and subheading at the top center. Below, it displays a central dashboard screenshot flanked by two columns of feature descriptions. Each column has two feature boxes with icons, titles, and descriptions. The layout is designed to highlight a central image while providing detailed feature information on both sides.
`

}

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