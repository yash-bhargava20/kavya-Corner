import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion } from "framer-motion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What social services do you provide?",
      a: "Dr. Pooja Singh Gangania has been consistently serving society through education, healthcare, and cultural preservation. She provides free schooling for underprivileged children, distributes books, clothes, sanitary pads, and essential items to the needy, and organizes health camps on women’s hygiene and mental health awareness. During the COVID-19 crisis, she actively distributed food, medicines, and safety materials. She supports upcoming writers and artists by giving them platforms to showcase their talent and works tirelessly to preserve Indian culture. Through campaigns like Shiksha Adhikar – Har Dwar and Chikitsa Adhikar – Har Dwar, she ensures education and healthcare reach every door. Her efforts also extend to environmental protection, tree plantations, and spreading awareness for a self-reliant and dignified society.",
    },
    {
      q: "How can I get involved in your NGO activities?",
      a: "You can join as a volunteer with the Kavya Corner Foundation, contribute by donating books, clothes, or funds, and participate in awareness campaigns and events.",
    },
    {
      q: "Do you organize health camps?",
      a: "Yes, regular multispecialty health checkups, sanitary-pad distribution drives, women hygiene awareness sessions, and mental health counseling workshops are conducted.",
    },
    {
      q: "Are there opportunities for writers and artists?",
      a: "Absolutely! The foundation organizes Kavi Sammelans, art exhibitions, cultural events, and publishes literary works to support emerging writers and artists.",
    },
    {
      q: "Where are you based?",
      a: "The headquarters is in Greater Noida (West), Gautam Buddh Nagar, but the programs and outreach extend across India.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="space-y-3"
      >
        {faqs.map((faq, index) => (
          <motion.div
            variants={item}
            viewport={{ amount: 0.2 }}
            key={index}
            onClick={() => toggleFAQ(index)}
            className="bg-neutral-200 text-gray-800 rounded-lg px-3 py-2 cursor-pointer md:text-lg text-base "
          >
            <div className="flex justify-between items-center">
              <span>{faq.q}</span>
              {openIndex == index ? <X size={16} /> : <Plus size={16} />}
            </div>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "opacity-100 translate-y-0 mt-2 border-t border-dashed border-stone-400"
                  : "opacity-0 -translate-y-2 h-0"
              }`}
            >
              <p className="mt-3 text-gray-700 font-thin">{faq.a}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Faq;
