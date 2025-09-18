import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MissionVision from "../Components/MissionVission";

const HomePage = () => {
  const images = [
    "/recent/1.png",
    "/recent/2.png",
    "/recent/3.png",
    "/recent/5.png",
    "/recent/6.png",
    "/recent/7.png",
    "/recent/8.png",
    "/recent/9.png",
    "/recent/10.png",
    "/recent/11.png",
    "/recent/12.png",
    "/recent/13.png",
    "/recent/14.png",
    "/recent/15.png",
    "/recent/16.png",
    "/recent/17.png",
  ];

  return (
    <div className="min-h-screen  ">
      <section className="bg-gradient-to-br from-purple-800 to-purple-400/80 text-white py-20 px-6 mb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dr. Pooja Singh Gangania
            </h1>
            <p className="text-lg mb-6">
              Writer &#8226; Socio-Political Activist &#8226; Doctor Dedicated
              to{" "}
              <span className="font-bold">
                service, empowerment, and culture
              </span>
              .
            </p>
            <div className="mt-20 flex items-center gap-4 justify-center max-w-fit">
              <a
                href="/contact"
                className="flex items-center gap-2 bg-white text-purple-600 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition hover:-translate-y-1 duration-300"
              >
                Connect with Me
              </a>
              <a
                href="/about"
                className="flex items-center gap-2 bg-white text-purple-600 font-medium px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition hover:-translate-y-1 duration-300"
              >
                About Me
                <ArrowRight className="w-4 h-4 relative top-[1px]" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center order-1 md:order-2"
          >
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-800 rounded-full top-3 z-0"></div>
            <img
              src="/profile.png"
              alt="Dr. Pooja Singh"
              className="relative z-20 w-72 h-72 md:w-96 md:h-96 object-cover rounded-full bg-purple-200 shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      <section>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-700 mb-10">
          My Mission & Vision
        </h2>
        <MissionVision />
      </section>
      <section className="mt-20 overflow-hidden relative py-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-700 mb-10">
          Recent Photos
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-4 animate-loop">
            {images.concat(images).map((img, i) => (
              <img
                key={i}
                src={img}
                alt="recent"
                className="w-72 h-52 object-cover rounded-lg shadow border border-gray-300"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
