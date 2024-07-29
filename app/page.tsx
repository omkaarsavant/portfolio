"use client";
import React, { useRef, useState } from "react";
import { ContainerScroll } from "../components/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { BackgroundGradient } from "../components/background-gradient";
import { Carousel, Card } from "@/components/apple-cards-carousel";
import { FlipWords } from "../components/flip-words";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import { TextGenerateEffect } from "../components/text-generate-effect";
import MouseFollowCaption from "../components/MouseFollowCaption";
import { ShootingStars } from "../components/shooting-stars";
import { PinContainer } from "../components/3d-pin";
import { LampContainer } from "../components/lamp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SiQwiklabs } from "react-icons/si";


export const ButtonShootingStarBorder = () => {
  const buttons = [
    { icon: FaLinkedin, text: "omkar-savant", href: "https://www.linkedin.com/in/omkar-savant/", delay: 0.3 },
    { icon: FaGithub, text: "omkaarsavant", href: "https://github.com/omkaarsavant", delay: 0.4 },
    { icon: SiCredly, text: "omkar-savant", href: "https://www.credly.com/users/omkar-savant", delay: 0.5 },
    { icon: FaXTwitter, text: "omkaarsavant", href: "https://twitter.com/omkaarsavant", delay: 0.6 },
    { icon: SiQwiklabs, text: "Omkar Savant", href: "https://www.cloudskillsboost.google/public_profiles/a4423f31-81c5-4139-9727-072d87c5010c", delay: 0.7 },
  ];

  return (
    <div className="mt-[20px]">
      <div className="ml-[650px] mt-[20px]">
        {buttons.slice(0, 1).map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: button.delay,
                duration: 0.8,
                ease: "easeInOut",
              }}
              onClick={() => window.open(button.href, "_blank")}
              className={`group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200`}
            >
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
              <span className="relative z-10 flex items-center py-0.5 text-xl text-neutral-100">
                <Icon className="mr-2" /> {button.text}
              </span>
            </motion.button>
          );
        })}
      </div>
      <div className="ml-[850px] mt-[-40px]">
        {buttons.slice(1, 2).map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: button.delay,
                duration: 0.8,
                ease: "easeInOut",
              }}
              onClick={() => window.open(button.href, "_blank")}
              className={`group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200`}
            >
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
              <span className="relative z-10 flex items-center py-0.5 text-xl text-neutral-100">
                <Icon className="mr-2" /> {button.text}
              </span>
            </motion.button>
          );
        })}
      </div>
      <div className="ml-[1050px] mt-[-40px]">
        {buttons.slice(2, 3).map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: button.delay,
                duration: 0.8,
                ease: "easeInOut",
              }}
              onClick={() => window.open(button.href, "_blank")}
              className={`group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200`}
            >
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
              <span className="relative z-10 flex items-center py-0.5 text-xl text-neutral-100">
                <Icon className="mr-2" /> {button.text}
              </span>
            </motion.button>
          );
        })}
      </div>
      <div className="ml-[750px] mt-[10px]">
        {buttons.slice(3, 4).map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: button.delay,
                duration: 0.8,
                ease: "easeInOut",
              }}
              onClick={() => window.open(button.href, "_blank")}
              className={`group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200`}
            >
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
              <span className="relative z-10 flex items-center py-0.5 text-xl text-neutral-100">
                <Icon className="mr-2" /> {button.text}
              </span>
            </motion.button>
          );
        })}
      </div>
      <div className="ml-[950px] mt-[-40px]">
        {buttons.slice(4, 5).map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: button.delay,
                duration: 0.8,
                ease: "easeInOut",
              }}
              onClick={() => window.open(button.href, "_blank")}
              className={`group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200`}
            >
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800" />
              <span className="relative z-10 flex items-center py-0.5 text-xl text-neutral-100">
                <Icon className="mr-2" /> {button.text}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};


/* 
tailwind.config.ts

...
extend: {
  animation: {
    flip: "flip 6s infinite steps(2, end)",
    rotate: "rotate 3s linear infinite both",
  },
  keyframes: {
    flip: {
      to: {
        transform: "rotate(360deg)",
      },
    },
    rotate: {
      to: {
        transform: "rotate(90deg)",
      },
    },
  },
}
*/


export const InputBorderSpotlight = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!inputRef.current || isFocused) return;

    const rect = inputRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendClick = () => {
    if (email) {
      window.location.href = `mailto:omkarsavant04@gmail.com?subject=Contact&body=${encodeURIComponent(
        `Email from: ${email}`
      )}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex mt-[-300px] ml-[800px] w-80 relative items-center"
    >
      <input
        ref={inputRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleEmailChange}
        value={email}
        autoComplete="off"
        placeholder="Enter your email address"
        type="email"
        name="email"
        className="relative h-10 w-full cursor-default rounded-md border border-neutral-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors duration-500 placeholder:select-none placeholder:text-neutral-500 focus:border-[rgb(207_174_255)] focus:outline-none"
        style={{
          backgroundImage: isFocused
            ? `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(207, 174, 255, 0.5) 0%, transparent 40%)`
            : "none",
        }}
      />
      <button
        onClick={handleSendClick}
        className="ml-2 h-10 w-10 flex items-center justify-center rounded-md bg-neutral-950 p-3.5 text-slate-100"
        aria-label="Send Email"
      >
        ➔
      </button>
      <input
        ref={inputRef}
        disabled
        style={{
          border: "1px solid rgb(207 174 255)",
          opacity: 0.5,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        aria-hidden="true"
        className="border-[rgb(207 174 255)] pointer-events-none absolute left-0 top-0 z-10 h-10 w-full cursor-default rounded-md border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
      />
    </motion.div>
  );
};


export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Lets <br /> Connect!
      </motion.h1>
    </LampContainer>
  );
}


function AnimatedPinDemo() {
  return (
    <div className="h-[40rem]  flex items-center justify-center mt-[-600px] ">
      <PinContainer
        title="Microsoft"
        href="https://learn.microsoft.com/en-in/users/omkarsavant-1517/credentials/269613d32052892a"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Microsoft Certified

          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Azure AI Engineer Associate 
            
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: 'url("/images/ai.png")' }} />
        </div>
      </PinContainer>
      <PinContainer
        title="Microsoft"
        href="https://learn.microsoft.com/en-in/users/omkarsavant-1517/credentials/68c74e9d612ff42d"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Microsoft Certified
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            Azure AI Fundamentals 
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: 'url("/images/fun.png")' }} />
        </div>
      </PinContainer>
      <PinContainer
        title="Microsoft"
        href="https://learn.microsoft.com/en-in/users/omkarsavant-1517/credentials/e3c8a056aeefcb98"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          Microsoft Certified
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Azure Data Scientist Associate
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: 'url("/images/data.png")' }} />
        </div>
      </PinContainer>
    </div>
  );
}
function AnimatedPinDemo2() {
  return (
    <div className="h-[40rem]  flex items-center justify-center mt-[-250px] ">
      <PinContainer
        title="Credly"
        href="https://www.credly.com/badges/a01437ea-1e53-4519-9e80-ff5d60fb1f12"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Google Cloud Certified
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Cloud Digital Leader
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: 'url("/images/cdl.png")' }} />
        </div>
      </PinContainer>
      <PinContainer
        title="Credly"
        href="https://www.credly.com/badges/18aa3d90-88bf-424a-a2fb-970441f687ab/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            GitHub Certified
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             Foundation
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: 'url("/images/g1.png")' }} />
        </div>
      </PinContainer>
      <PinContainer
        title="Credly"
        href="https://www.credly.com/badges/12f6eafc-fcd7-4b20-a51e-5c46be660d64/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]  ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          GitHub Certified
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            
         Advanced Security
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: 'url("/images/g2.png")' }} />
        </div>
      </PinContainer>
    </div>
  );
}


export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-[40rem]">
      <h2 className=" flex-col md:flex-row z-10 text-3xl md:text-7xl md:leading-tight max-w-5xl mx-auto  tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <span className="ml-[150px] items-center">Notable Certifications</span>
      </h2>
      <ShootingStars />
    </div>
  );
}


const words = `He is skilled in...
`;

function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}


function BackgroundGradientDemo() {
  return (
    <div className="  justify-center items-center min-h-screen ml-[375px] mt-[50px] ">
      <div className="flex space-x-4">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900  ">
          <Image
            src={`/images/cpp.png`}
            alt="C++ Logo"
            height="200"
            width="200"
            className="object-contain"
          />
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
          <Image
            src={`/images/java.png`}
            alt="C++ Logo"
            height="200"
            width="200"
            className="object-contain"
          />
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
          <Image
            src={`/images/gcp.png`}
            alt="C++ Logo"
            height="200"
            width="200"
            className="object-contain"
          />
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
          <Image
            src={`/images/cpp.png`}
            alt="C++ Logo"
            height="200"
            width="200"
            className="object-contain"
          />
        </BackgroundGradient>
        
      </div>
    </div>
  );
}
function BackgroundGradientDemo2() {
  return (
    <div className="  justify-center items-center min-h-screen ml-[375px] mt-[-580px] ">
      <div className="flex space-x-4">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900  ">
          <Image
            src={`/images/cpp.png`}
            alt="C++ Logo"
            height="200"
            width="200"
            className="object-contain"
          />
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
          <Image
            src={`/images/java.png`}
            alt="C++ Logo"
            height="200"
            width="200"
            className="object-contain"
          />
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
          <Image
            src={`/images/gcp.png`}
            alt="C++ Logo"
            height="200"
            width="200"
            className="object-contain"
          />
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
          <Image
            src={`/images/cpp.png`}
            alt="C++ Logo"
            height="200"
            width="200"
            className="object-contain"
          />
        </BackgroundGradient>
        
      </div>
    </div>
  );
}

function ThreeDCardDemo() {
  return (
    <div className="flex justify-center space-x-4">
      <Link legacyBehavior href="https://github.com/omkaarsavant/Villa-Booking" passHref>
        <a target="_blank" rel="noopener noreferrer" className="block">
          <CardContainer className="inter-var cursor-pointer">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Villa Booking Website
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                A Villa Booking website with working Sign In/Out, Payment, and Chatbot facilities. It also features a Natural Language Processed Chatbot which helps users.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/villa.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </a>
      </Link>

      <Link legacyBehavior href="https://github.com/omkaarsavant/-Online-IEEE-Paper-Generation-System" passHref>
        <a target="_blank" rel="noopener noreferrer" className="block">
          <CardContainer className="inter-var cursor-pointer">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Online IEEE Paper Generation System
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                A pdf containing the data in IEEE format will be generated by the algorithm after the user enters the necessary information in the appropriate fields.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/ieee.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </a>
      </Link>
      <Link legacyBehavior href="https://mkphotographyandfilms.com/water/home1/index.html" passHref>
        <a target="_blank" rel="noopener noreferrer" className="block">
          <CardContainer className="inter-var cursor-pointer">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                WinEarth
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                A Social Awareness website about Gangapur Dam, and its Desilting Process. Created for Winjit Technologies.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/winearth.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </a>
      </Link>
    </div>
  );
}

function ThreeDCardDemo2() {
  return (
    <div className="mt-[-135px] flex justify-center space-x-4">
      

      <Link legacyBehavior href="https://github.com/omkaarsavant/Pravaas-Derailment-Prevention-by-Track-Object-Detection" passHref>
        <a target="_blank" rel="noopener noreferrer" className="block">
          <CardContainer className="inter-var cursor-pointer">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Derailment Prevention by Object Detection
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Train derailments caused by foreign items are a major problem in India. This ML Model detects foreign objects and reports it.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/images/ml.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </a>
      </Link>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            College Mentor Website
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Enhanced the College  mentor website by implementing a dynamic backend using PHP and MySQL. Also improved User Experience
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/mentor.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
          <CardItem
              translateZ={20}
              as={Link}
              href="https://github.com/omkaarsavant/-Online-IEEE-Paper-Generation-System"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              ‎ ‎ ‎ ‎ ‎ 
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}



function FlipWordsDemo() {
  const words = ["Cloud", "Web", "Software", "Machine Learning", "Tech"];

  return (
    <div className="h-[5px] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
    He loves to build
        <FlipWords words={words} />Projects
       
      </div>
    </div>
  );
}


function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Meet Omkar! He is...
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "LinkedIn",
    title: "Top Web Development Voice",
    src: "/images/linkedin.png",
   
  },
  { category: "Tech",
    title: "Enthusiast/Community Member",
    src: "/images/tech.png",
    
    
  },
  {
    category: "Smart India Hackathon ",
    title: "Hackathon Winner",
    src: "/images/sih.png",
    
  },

  {
    category: "Certifications",
    title: "Multi Certification Holder",
    src: "/images/cert.png",
   
   
  },
  {
    category: "Google",
    title: "Ex-Web Development Lead",
    src: "/images/gdsc.png",
   
   
  },

];









// Navbar Component
function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <div className="flex justify-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <Link
          href="#home"
          className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg"
        >
          Home
        </Link>
        <Link
          href="#about" 
          className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg"
        >
          About
        </Link>
        <Link
          href="#projects" 
          className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg"
        >
          Skills
        </Link>
        <Link
          href="#certifications" 
          className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg"
        >
          Certifications
        </Link>
        <Link
          href="#socials" 
          className="text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg"
        >
          Socials
        </Link>
      </div>
    </div>
  );
}

// MainPage Component
export default function MainPage() {
  const imagesSet1 = [
    { src: '/images/cpp.png', alt: 'CPP Image 1' },
    { src: '/images/java2.png', alt: 'CPP Image 2' },
    { src: '/images/gcp2.png', alt: 'CPP Image 2' },
    { src: '/images/sql.png', alt: 'CPP Image 2' }
  ];

   const imagesSet2 = [
    { src: '/images/git.png', alt: 'CPP Image 3' },
    { src: '/images/php.png', alt: 'CPP Image 4' },
    { src: '/images/aws.png', alt: 'CPP Image 4' },
    { src: '/images/python.png', alt: 'CPP Image 4' }
  ]; 
  const imagesSet3 = [
    { src: '/images/az.png', alt: 'CPP Image 3' },
    { src: '/images/next.png', alt: 'CPP Image 4' },
    { src: '/images/react.png', alt: 'CPP Image 4' },
    { src: '/images/css.png', alt: 'CPP Image 4' }
  ]; 
  const imagesSet4 = [
    { src: '/images/sales.png', alt: 'CPP Image 3' },
    { src: '/images/table.png', alt: 'CPP Image 4' }
  ]; 
  return (
    <div>
      {/* Smooth scrolling CSS */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <NavbarDemo />
      <div id="home">
        <HeroScrollDemo />
      </div>
      <div id="about">
        <AppleCardsCarouselDemo />
      </div>
      <div id="projects">
        <FlipWordsDemo />
     </div>
     <ThreeDCardDemo />
      <ThreeDCardDemo2 />
     <div id="skills">
        <TextGenerateEffectDemo />
        <div className="mt-[-200px]">
        <MouseFollowCaption images={imagesSet1} />
        <div className="mt-[-600px]">
        <MouseFollowCaption images={imagesSet2} />
        </div>
        <div className="mt-[-600px]">
        <MouseFollowCaption images={imagesSet3} />
        </div>
        <div className="mt-[-600px]">
        <MouseFollowCaption images={imagesSet4} />
        </div>
        </div>
      </div>
      <div id="certifications">
        <ShootingStarsAndStarsBackgroundDemo />
        <div className="relative z-0">
        <AnimatedPinDemo />
        <AnimatedPinDemo2 />
        </div>
      </div>
      <div id="socials">
        <LampDemo />
        <div className="relative z-1">
        <InputBorderSpotlight />
        </div>
        <ButtonShootingStarBorder />
        </div>
    </div>
  );
}

// HeroScrollDemo Component
function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden " id="hero-section">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Welcome to my <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none" style={{ paddingBottom: '100px' }}>
                Portfolio!
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/link.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

// NavbarDemo Component
function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}


