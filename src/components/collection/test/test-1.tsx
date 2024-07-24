import Image from "next/image";
import Link from "next/link";

// <dev>
import { GetTripProps } from "@/context/TripContext";
import getContent from "@/utils/contentEditor";
import { useState, useEffect } from "react";

const contentJSON = {
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
// </dev>

export default function HeroSection() {
  // <dev>
  const [content, setContent] = useState(contentJSON);

  useEffect(() => {
    console.log("test");
  }, []);
  // </dev>

  return (
    <>
      <main className="w-full">
        <section className="relative pt-10 xl:pt-14">
          <p className="mt-10 text-gray-700 dark:text-gray-300">
            {content.sub_heading}
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Link
              href={content.cta1.link}
              className="relative px-6"
            >
              <span className="relative">{content.cta1.text}</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
  // <dev>
export function getContentJSON() {
  return contentJSON
}
  // </dev>
