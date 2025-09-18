import { Facebook, Linkedin, Mail, Instagram } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";

const Socials = () => {
  const socials = [
    {
      name: "X",
      icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
      link: "https://instagram.com/PSGangania",
    },

    {
      name: "LinkedIn",
      icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
      link: "https://www.linkedin.com/in/psgangania",
    },
    {
      name: "Facebook",
      icon: <FontAwesomeIcon icon={faFacebook} size="lg" />,
      link: "https://facebook.com/PSGangania",
    },
    {
      name: "Instagram",
      icon: <FontAwesomeIcon icon={faInstagram} size="lg" />,
      link: "https://instagram.com/PSGangania",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Follow Me</h2>
      <hr className="mb-4 border-gray-300" />
      <div className="flex gap-4">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 border border-gray-500 rounded-md text-gray-600 hover:bg-purple-600 hover:text-white transition-colors"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
