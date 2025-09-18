import React, { useState } from "react";
import { motion } from "framer-motion";

import Education from "../Components/Education";
import Work from "../Components/Work";
import { ArrowRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Heart, BookOpen, Stethoscope, Users } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-5 px-3 text-gray-800">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h1>

      <div className="flex items-center p-6 md:px-12 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col h-full justify-center md:order-1 order-2"
          >
            <div className="relative inline-block max-w-fit overflow-hidden">
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "0%", "100%"] }}
                transition={{
                  duration: 1.2,
                  times: [0, 0.5, 1],
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-0 h-full w-full mx-1 bg-purple-600 z-0"
              />
              <motion.h1
                initial={{ color: "#fff" }}
                animate={{ color: "#7e22ce" }}
                transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
                className="relative z-10 text-3xl md:text-4xl font-bold mb-4 px-1"
              >
                Hello! I'm Dr. Pooja Singh,
              </motion.h1>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-base"
            >
              <p className="leading-relaxed mb-4">
                A writer, social-political activist, and doctor dedicated to
                community service, education, and healthcare. My journey is
                guided by the belief in{" "}
                <span className="font-semibold">
                  selfless service and empowerment
                </span>
                , especially for women and underprivileged children.
              </p>
              <p className="leading-relaxed">
                I’ve authored books in both poetry and medical research,
                organized awareness campaigns, and continue working to preserve
                Indian culture while uplifting society with compassion and
                dedication.
              </p>
            </motion.div>

            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mt-10 flex items-center gap-2 overflow-hidden rounded-lg shadow px-5 py-3 font-medium bg-purple-600 text-white group max-w-fit hover:text-purple-500"
            >
              <a href="/contact" className="relative z-10">
                Connect with Me
              </a>
              <ArrowRight className="w-4 h-4 relative top-[1px] z-10" />
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></span>
            </motion.button>
          </motion.div>

          <div className="relative flex justify-center items-center order-1 md:order-2">
            <div className="absolute w-72 h-72 md:w-80 md:h-80 bg-purple-600 rounded-full"></div>
            <motion.img
              src="/profile.png"
              alt="Dr. Pooja Singh"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full relative z-10"
            />
          </div>
        </div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-between items-center mx-auto gap-6 mb-8 mt-8 max-w-xl md:max-w-lg"
      >
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 text-xl md:text-2xl cursor-pointer font-semibold transition ${
            activeTab === "education"
              ? "text-purple-700 "
              : "text-gray-600 hover:text-purple-500"
          }`}
        >
          <GraduationCap className="w-6 h-6" />
          Education
        </button>
        <button
          onClick={() => setActiveTab("work")}
          className={`flex items-center gap-2 text-xl md:text-2xl cursor-pointer font-semibold transition ${
            activeTab === "work"
              ? "text-purple-700 "
              : "text-gray-600 hover:text-purple-500"
          }`}
        >
          <BriefcaseBusiness className="w-6 h-6" />
          Work Experience
        </button>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="p-6 mt-10 bg-gray-50 rounded-xl border border-dashed border-gray-400 shadow-md"
      >
        {activeTab === "education" && <Education />}
        {activeTab === "work" && <Work />}
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-gray-800 font-bold mt-10 mb-6 text-center"
      >
        My Work
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[
          {
            icon: <Heart className="w-10 h-10 text-red-500" />,
            title: "Social Service",
            text: "Actively provides help to the needy by distributing clothes, ration, sanitary pads, masks, and study materials. She promotes equality and works for women and children in slums.",
          },
          {
            icon: <BookOpen className="w-10 h-10 text-purple-600" />,
            title: "Education & Writing",
            text: "Authored literary works like Mook Chikhein and Alp-Viram, and academic books in microbiology. Runs free schools for underprivileged children and supports upcoming poets & writers.",
          },
          {
            icon: <Stethoscope className="w-10 h-10 text-green-600" />,
            title: "Healthcare",
            text: "Organized free medical camps, spreading awareness about mental health, hygiene, and women’s health. Recognized as a 'Corona Warrior' during the pandemic.",
          },
          {
            icon: <Users className="w-10 h-10 text-blue-600" />,
            title: "Community Leadership",
            text: "Invited as speaker, motivator, and chief guest at many social and cultural events. Actively leads campaigns like Beti Bachao – Beti Padhao in Gautam Budh Nagar.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start border border-gray-200"
          >
            {item.icon}
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
