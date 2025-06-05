"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import WorkSliderButton from "@/components/WorkSliderButton";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Taghche Website",
    description:
      "LandingPage of Taghche Website Contain full Responsive With DarkMode",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "JavaScript" }],
    image: "/taghche.jpg",
    live: "/taghche/index.html",
  },
  {
    num: "02",
    category: "frontend",
    title: "Accademy Bahr Website",
    description:
      "accademy Bahr Website Contain full Responsive With DarkMode and Ai features.",
    stack: [
      { name: "Html 5" },
      { name: "tailwind" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/acalandm.png",
    live: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Foo food Fastfood Website",
    description:
      "Developed a website using Next.js, focused on SEO and modern design, fully responsive",
    stack: [
      { name: "Html 5" },
      { name: "tailwind" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next" },
    ],
    image: "/foolandm.png",
    live: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "Advanced Admin Panel",
    description:
      "A cutting-edge website built with Next.js, optimized for SEO and featuring a sleek, modern design. Fully responsive, this panel integrates powerful business analytics charts, user behavior tracking, and AI-driven intelligent analysis to enhance decision-making.",
    stack: [
      { name: "Html 5" },
      { name: "tailwind" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next" },
    ],
    image: "/cmslandm.png",
    live: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "Jungle Squad Game",
    description:
      "Jungle Squade Game  Develoap and create Game Engine with Java Script .",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/jungl.png",
    live: "",
  },
  {
    num: "06",
    category: "frontend",
    title: "Bad Neiber Game",
    description:
      "Bad Neiber Game  Develoap and create Game Engine with Java Script .",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/nb.png",
    live: "",
  },
  {
    num: "07",
    category: "frontend",
    title: "Digi Style Website",
    description:
      "LandingPage of Taghche Website Contain full Responsive With DarkMode",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/digi.png",
    live: "",
  },
  {
    num: "08",
    category: "frontend",
    title: "Digi Style Website",
    description:
      "LandingPage of Taghche Website Contain full Responsive With DarkMode",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/digi.jpg",
    live: "",
  },
];
function Work() {
  const handleSlideChange = (swiper: { activeIndex: number }): void => {
    const currentIndex: number = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center py-12 xl:flex-row xl:gap-[30px] xl:px-0">
          <div className="flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              <div className="text-outline text-8xl leading-none font-extrabold text-transparent">
                {project.num}
              </div>
              <h2 className="group-hover:text-accent text-[42px] leading-none font-bold text-white capitalize transition-all duration-500">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-col">
                {" "}
                <div className="flex flex-wrap gap-4">
                  {" "}
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-accent text-xl">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </div>
                <div className="flex gap-4">
                  <Link href={project.live} className="my-2">
                    {" "}
                    <Button className="bg-primary text-accent border-accent hover:bg-accent hover:text-primary border">
                      Live
                    </Button>
                  </Link>
                  <Link href={project.live} className="my-2">
                    <Button className="bg-primary text-accent border-accent hover:bg-accent-hover hover:text-primary border">
                      <FaGithub />
                    </Button>
                  </Link>
                </div>
              </ul>
              <div className="border border-white/20" />
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 z-10 h-full w-full bg-black/10"></div>
                      <div className="relative h-[460px] w-full">
                        <Image
                          src={project.image}
                          fill
                          alt=""
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderButton />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
