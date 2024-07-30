"use client";
import React, { useRef, useState, useEffect } from "react";
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
    <div className="mt-[20px] flex flex-wrap justify-center">
      {buttons.map((button, index) => {
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
            className={`group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 m-2`}
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
  );
};

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
        className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Lets <br /> Connect!
      </motion.h1>
    </LampContainer>
  );
}
function AnimatedPinDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-48 mt-[-100px]">
      <div className="flex justify-center p-2">
        <PinContainer
          title="Microsoft"
          href="https://learn.microsoft.com/en-in/users/omkarsavant-1517/credentials/269613d32052892a"
        >
          <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100">Microsoft Certified</h3>
            <div className="text-base text-slate-500 mb-2">Azure AI Engineer Associate</div>
            <div
              className="flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/images/ai.png")' }}
            />
          </div>
        </PinContainer>
      </div>
      <div className="flex justify-center p-4">
        <PinContainer
          title="Microsoft"
          href="https://learn.microsoft.com/en-in/users/omkarsavant-1517/credentials/68c74e9d612ff42d"
        >
          <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">Microsoft Certified</h3>
            <div className="text-base text-slate-500 mb-2">Azure AI Fundamentals</div>
            <div
              className="flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/images/fun.png")' }}
            />
          </div>
        </PinContainer>
      </div>
      <div className="flex justify-center p-4">
        <PinContainer
          title="Microsoft"
          href="https://learn.microsoft.com/en-in/users/omkarsavant-1517/credentials/e3c8a056aeefcb98"
        >
          <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">Microsoft Certified</h3>
            <div className="text-base text-slate-500 mb-2">Azure Data Scientist Associate</div>
            <div
              className="flex-1 rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/images/data.png")' }}
            />
          </div>
        </PinContainer>
      </div>
      <div className="flex justify-center p-4">
        <PinContainer
          title="Credly"
          href="https://www.credly.com/badges/a01437ea-1e53-4519-9e80-ff5d60fb1f12"
        >
          <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">Google Cloud Certified</h3>
            <div className="text-base text-slate-500 mb-2">Cloud Digital Leader</div>
            <div
              className="flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/images/cdl.png")' }}
            />
          </div>
        </PinContainer>
      </div>
      <div className="flex justify-center p-4">
        <PinContainer
          title="Credly"
          href="https://www.credly.com/badges/18aa3d90-88bf-424a-a2fb-970441f687ab/"
        >
          <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">GitHub Certified</h3>
            <div className="text-base text-slate-500 mb-2">Foundation</div>
            <div
              className="flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/images/g1.png")' }}
            />
          </div>
        </PinContainer>
      </div>
      <div className="flex justify-center p-4">
        <PinContainer
          title="Credly"
          href="https://www.credly.com/badges/12f6eafc-fcd7-4b20-a51e-5c46be660d64/"
        >
          <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">GitHub Certified</h3>
            <div className="text-base text-slate-500 mb-2">Advanced Security</div>
            <div
              className="flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/images/g2.png")' }}
            />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="">
      <h2 className=" flex-col md:flex-row z-10 text-3xl md:text-7xl md:leading-tight max-w-5xl mx-auto   font-medium bg-clip-text flex items-center gap-2 md:gap-8">
        <span className=" mx-auto items-center"> Notable Certifications</span>
      </h2>
      <ShootingStars />
    </div>
  );
}

const words = `He is skilled in...`;

function TextGenerateEffectDemo() {
  return (
    <div className="">
    <div className="flex max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans ">
      <TextGenerateEffect words={words} />
    </div>
    </div>
  );
}

function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 sm:space-y-0">
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
                A Social Awareness website about Gangapur Dam, and its Desilting Process. Were First Runner up. Created for Winjit Technologies. 
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
    <div className="mt-[-135px] flex flex-wrap justify-center space-x-4 space-y-4 sm:space-y-0">
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
            Enhanced the College  mentor website by implementing a dynamic backend using PHP and MySQL. Also improved User Interface.
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
                  
                >
                  ‎‎‎‎
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
  const allImages = [
    { src: '/images/cpp.png', alt: 'CPP Image 1' },
    { src: '/images/java2.png', alt: 'CPP Image 2' },
    { src: '/images/gcp2.png', alt: 'CPP Image 2' },
    { src: '/images/sql.png', alt: 'CPP Image 2' },
    { src: '/images/git.png', alt: 'CPP Image 3' },
    { src: '/images/php.png', alt: 'CPP Image 4' },
    { src: '/images/aws.png', alt: 'CPP Image 4' },
    { src: '/images/python.png', alt: 'CPP Image 4' },
    { src: '/images/az.png', alt: 'CPP Image 3' },
    { src: '/images/next.png', alt: 'CPP Image 4' },
    { src: '/images/react.png', alt: 'CPP Image 4' },
    { src: '/images/css.png', alt: 'CPP Image 4' },
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
      <MouseFollowCaption images={allImages} />
</div>
      <div id="certifications">
        <ShootingStarsAndStarsBackgroundDemo />
        <div className="relative z-0">
        <AnimatedPinDemo />
        
        </div>
      </div>
      <div id="socials" className="mt-[-100px] ">
        <div>
        <LampDemo />
        </div>
        <div className="relative z-1">
        <InputBorderSpotlight />
        </div>
        <ButtonShootingStarBorder />
        </div>
    </div>
  );
}

function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden mt-20" id="hero-section">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white">
              Welcome to my <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] font-bold mt-1 leading-none" style={{ paddingBottom: '100px' }}>
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
          className="mx-auto rounded-2xl object-cover h-72 sm:h-96 md:h-[36rem] lg:h-[48rem] object-center md:object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}



function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
       <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl hidden lg:block top-2">
      <Navbar className="top-2" />
      </div>
    </div>
  );
}




