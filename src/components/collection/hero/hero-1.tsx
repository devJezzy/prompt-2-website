import getContent from "@/utils/contentEditor";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const contentJSON = {
  heading: "Build Your Online Platform with best",
  heiglighted_heading_end_text: "Digital Agency",
  sub_heading: "one or two lines for subheading",
  cta1: {
    text: "Get Started",
    link: "#",
  },
  cta2: {
    text: "Learn More",
    link: "#",
  },
  image: {
    src: "/images/heroImg.webp",
    alt: "happy team",
  },
};

export default function HeroSection() {
  const [content, setContent] = useState(contentJSON);

  useEffect(() => {
    const fetchData = async () => {
      const sys_prompt = `
      You are a content editor for a website. Your task is to change the content of the hero section based on the given example CMS template. The example template is provided in the <CMS></CMS> XML tag.if they hava cta button need to change like user prompt. just take the example for structure of data. user asked for his invidual use.
      <CMS>
      ${JSON.stringify(contentJSON)}
      </CMS>
      `;

      console.log(sys_prompt)
  
      const query = "create a website showcase my skills";
  
      try {
        const res = await getContent(query, sys_prompt);
        setContent(JSON.parse(res))
        console.log(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <main className="w-full">
        <section className="relative pt-10 xl:pt-14">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
            <div className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
              <h1 className="text-indigo-950 dark:text-white text-4xl/snug sm:text-6xl/tight lg:text-5xl/tight xl:text-6xl/tight font-semibold">
                {content.heading}
                <span className="bg-indigo-50 dark:bg-gray-900 dark:text-indigo-300 inline-block border border-dashed border-indigo-600 px-3">
                  {content.heiglighted_heading_end_text}
                </span>
              </h1>
              <p className="mt-10 text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
                {content.sub_heading}
              </p>
              <div className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap">
                <Link
                  href={content.cta1.link}
                  className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition active:before:bg-indigo-700 text-white hover:before:bg-indigo-800 before:bg-indigo-600 hover:before:scale-105"
                >
                  <span className="relative">{content.cta1.text}</span>
                </Link>
                <Link
                  href={content.cta2.link}
                  className="relative px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-gray-100 dark:before:bg-gray-900 text-indigo-600 dark:text-white hover:before:scale-105"
                >
                  <span className="relative">{content.cta2.text}</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={1850}
                height={1200}
                className="lg:absolute w-full lg:inset-x-0 object-cover lg:h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
