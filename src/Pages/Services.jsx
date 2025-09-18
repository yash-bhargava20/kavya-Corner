import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Social Service",
    desc: "Actively providing help to the needy and promoting equality in society.",
    img: "/services/social.jpg",
    details: [
      "Distributing clothes, ration, sanitary pads, and study materials.",
      "Works for women and children in slums.",
      "Leads campaigns for equality and dignity.",
    ],
  },
  {
    id: 2,
    title: "Education & Writing",
    desc: "Authored poetry, academic books, and runs free schools for underprivileged children.",
    img: "/services/education.jpg",
    details: [
      "Books in poetry, literature, and medical research.",
      "Supports upcoming poets & writers.",
      "Organizes literary and cultural programs.",
    ],
  },
  {
    id: 3,
    title: "Healthcare",
    desc: "Organized free medical camps and health awareness drives.",
    img: "/services/health.jpg",
    details: [
      "Awareness on women’s health and hygiene.",
      "Recognized as a 'Corona Warrior'.",
      "Provides affordable healthcare in rural areas.",
    ],
  },
  {
    id: 4,
    title: "Community Leadership",
    desc: "Leads campaigns and inspires communities through cultural and social initiatives.",
    img: "/services/community.jpg",
    details: [
      "Speaker, motivator, and chief guest at events.",
      "Actively leads 'Beti Bachao – Beti Padhao'.",
      "Works for inclusive and empowered India.",
    ],
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="px-6 md:px-12 py-16 bg-white text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4 "
          >
            Powering Progress <br /> Through Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg mb-6"
          >
            We deliver impactful initiatives that uplift society through{" "}
            <span className="font-semibold">
              education, healthcare, leadership, and social service.
            </span>
            Our mission is to create a self-reliant and compassionate community.
          </motion.p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg shadow transition">
            Get Involved
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/services/social.jpg"
            alt="Social Service"
            className="w-full h-56 object-cover rounded-lg shadow"
          />
          <img
            src="/services/education.jpg"
            alt="Education"
            className="w-full h-56 object-cover rounded-lg shadow"
          />
          <img
            src="/services/health.jpg"
            alt="Healthcare"
            className="w-full h-56 object-cover rounded-lg shadow col-span-2"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto space-y-20">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={"grid grid-cols-1 md:grid-cols-2 gap-10 items-center "}
          >
            {index % 2 === 1 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
                <div className="bg-gray-100 p-5  shadow-lg">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{service.desc}</p>
                  <div className="space-y-3">
                    {service.details.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggle(`${service.id}-${idx}`)}
                        className="pb-2 cursor-pointer border-b border-gray-200"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">{item}</span>
                          <ChevronDown
                            className={`text-gray-700 w-5 h-5 transform transition ${
                              openIndex === `${service.id}-${idx}`
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </div>
                        {openIndex === `${service.id}-${idx}` && (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gray-700 mt-2 text-sm"
                          >
                            {item}
                          </motion.p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gray-100 p-5  shadow-lg">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 ">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{service.desc}</p>
                  <div className="space-y-3">
                    {service.details.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggle(`${service.id}-${idx}`)}
                        className="pb-2 cursor-pointer border-b border-gray-200"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">{item}</span>
                          <ChevronDown
                            className={`text-gray-700 w-5 h-5 transform transition ${
                              openIndex === `${service.id}-${idx}`
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </div>
                        {openIndex === `${service.id}-${idx}` && (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gray-700 mt-2 text-sm"
                          >
                            {item}
                          </motion.p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
