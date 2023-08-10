import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profile.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Dharmen | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 " />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
              🙏 Meet Dharmendra, a wholehearted frontend developer
                with a passion for software development. A fusion of creativity
                and code. Passionate about crafting seamless interfaces and
                solving intricate digital puzzles. 🎨👨‍💻
              </p>
              <p className=" my-4 font-medium">
                He is on the 👀 for entry-level opportunities. Believes in
                the power of continuous learning and collaboration to create
                meaningful and efficient applications.
              </p>
              <p className=" my-4 font-medium">
                🌟 Quick Learner 🌟 Team Player 🌟 Problem Solver 🌟 Passionate
                about Tech-writing
              </p>

              <p className="font-medium">
                🚀 Excited to Explore Prompt Engineering & AI's Potential 🚀
              </p>
            </div>
 
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

              <Image
                src={profilePic}
                alt="FrontendFusionAI"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 
                    dark:text-light/75"
                >
                  articles published
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75">
                  papers published
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
