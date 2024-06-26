"use client";

import { TypewriterEffectSmooth } from "../ui/typewritter-effect";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const ProductSection = () => {
  const words = [
    {
      text: "We",
      className: "text-grey-200",
    },
    {
      text: "have",
      className: "text-grey-200",
    },
    {
      text: "Launched A",
      className: "text-grey-200",
    },
    {
      text: "new app Called ",
      className: "text-grey-200",
    },
    {
      text: "PaperAdda.",
      className: "text-primary",
    },
  ];
  return (
    <section className="container mx-auto">
      <TypewriterEffectSmooth words={words} />
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-600 dark:text-white"
          >
            PaperAdda
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            It&apos;s one site you can prepare for all the competetive exams in
            India. Daily tests , weekly exams , concept discussion using AI
            realtme analytics leaderboard and many more thing
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={10}
              as="button"
              className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-normal "
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  );
};

export default ProductSection;
