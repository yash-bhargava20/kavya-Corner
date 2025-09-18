import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MissionVision = () => {
  return (
    <div className="mx-auto mt-12 px-4 space-y-16">
      <div>
        <motion.div
          className="flex items-center gap-3 mb-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Target className="w-5 h-5 md:w-8 md:h-8 text-purple-600" />
          <h3 className="text-2xl md:text-3xl font-semibold text-purple-700">
            Mission
          </h3>
        </motion.div>

        <motion.p
          className="text-gray-700 leading-relaxed text-base md:text-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.15, duration: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          My mission is to dedicate my efforts towards{" "}
          <span className="font-medium">
            social upliftment, women empowerment, and community well-being
          </span>{" "}
          through education, healthcare, and cultural preservation. I strive to
          ensure that every child, woman, and marginalized person receives equal
          opportunities to live with dignity, knowledge, and hope.
        </motion.p>
      </div>

      <div>
        <motion.div
          className="flex items-center gap-3 mb-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Lightbulb className="w-5 h-5 md:w-8 md:h-8 text-yellow-500" />
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-600">
            Vision
          </h3>
        </motion.div>

        <motion.p
          className="text-gray-700 leading-relaxed text-base md:text-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.15, duration: 0.4 }}
          viewport={{ amount: 0.3 }}
        >
          My vision is to build a{" "}
          <span className="font-medium">
            self-reliant, educated, and healthy society
          </span>{" "}
          where values of compassion, equality, and cultural pride flourish. I
          aim to inspire future generations to embrace{" "}
          <span className="italic">“Service above Self”</span> and work
          collectively for a better, inclusive India.
        </motion.p>
      </div>
    </div>
  );
};

export default MissionVision;
