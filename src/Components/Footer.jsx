import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    name: "X",
    icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
    link: "https://x.com/PSGangania",
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

function Footer() {
  return (
    <footer className="text-gray-700 bg-neutral-100 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-purple-700 mb-3">
            Dr. Pooja Singh Gangania
          </h3>
          <div className="flex justify-left md:justify-start gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition text-xl"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-purple-700 mb-3">
            Address
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Villa No. 2, Street No. 15, Rise Resort Resident <br />
            Sector 1, Greater Noida (West) <br />
            Gautam Budh Nagar - 201306 <br />
            <span className="font-medium">Phone:</span> 9773542776 / 9990887397
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-purple-700 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-purple-600 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="/books" className="hover:text-purple-600 transition">
                Books
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-purple-600 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/awards" className="hover:text-purple-600 transition">
                Awards
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-purple-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 py-3 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
