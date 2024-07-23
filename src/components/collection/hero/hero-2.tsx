"use client"
import { GetTripProps } from '@/context/TripContext';
import getContent from '@/utils/contentEditor';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const contentJSON = {
  heading: "We'll be happy to take care of your work.",
  headingSpan: "your work.",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae soluta ipsa incidunt expedita rem! Suscipit molestiae voluptatem iure, eum alias nobis velit quidem reiciendis saepe nostrum",
  buttons: [
    { href: "#", text: "Get started", className: "px-6 items-center h-12 rounded-3xl bg-pink-600 text-white duration-300 ease-linear flex justify-center w-full sm:w-auto" },
    { href: "#", text: "Book a call", className: "px-6 items-center h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto" }
  ],
};

const imageJson = {
  clientLogos: [
    { href: "#", src: "/images/microsoft.svg", alt: "client name", width: 600, height: 120, className: "h-10 w-auto dark:grayscale" },
    { href: "#", src: "/images/microsoft.svg", alt: "client name", width: 600, height: 120, className: "h-10 w-auto dark:grayscale" },
    { href: "#", src: "/images/microsoft.svg", alt: "client name", width: 600, height: 120, className: "h-10 w-auto dark:grayscale" },
    { href: "#", src: "/images/microsoft.svg", alt: "client name", width: 600, height: 120, className: "h-10 w-auto dark:grayscale" }
  ],
  images: [
    { src: "/images/buildingImg.jpg", alt: "building plan image", width: 1300, height: 1300, className: "w-full h-full object-cover z-30" },
    { src: "/images/working-on-housing-project.jpg", alt: "working-on-housing-project", width: 1300, height: 1300, className: "z-10 w-full h-full object-cover" }
  ]
}

export default function HeroSection() {

  const { userPrompt } = GetTripProps();

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
  
      // const query = "create a website showcase my skills";
  
      try {
        const res = await getContent(userPrompt, sys_prompt);
        setContent(JSON.parse(res))
        console.log(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  
  return (
    <section className="py-4 mt-14 sm:mt16 lg:mt-0">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
          <h1 className="font-semibold leading-tight text-teal-950 dark:text-white text-4xl sm:text-5xl lg:text-6xl">
            {content.heading} <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-orange-800">{content.headingSpan}</span>
          </h1>
          <p className="flex text-gray-700 dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
            {content.buttons.map((button, index) => (
              <Link key={index} href={button.href} className={button.className}>
                {button.text}
              </Link>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center flex-wrap gap-4 lg:justify-start w-full">
            {imageJson.clientLogos.map((logo, index) => (
              <a key={index} href={logo.href} target="_blank" rel="noreferer">
                <span className="sr-only">org name</span>
                <Image width={logo.width} height={logo.height} src={logo.src} alt={logo.alt} className={logo.className} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
          <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
            <Image src={imageJson.images[0].src} alt={imageJson.images[0].alt} width={imageJson.images[0].width} height={imageJson.images[0].height} className={imageJson.images[0].className} />
          </div>
          <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
            <Image src={imageJson.images[1].src} alt={imageJson.images[1].alt} width={imageJson.images[1].width} height={imageJson.images[1].height} className={imageJson.images[1].className} />
          </div>
        </div>
      </div>
    </section>
  );
}
