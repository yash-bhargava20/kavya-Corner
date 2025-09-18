import React, { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FAQ from "../Components/Faq";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  // const [success, setSuccess] = useState(false);

  const sendEmail = () => {
    //   e.preventDefault();
    //   emailjs
    //     .sendForm(
    //       "your_service_id",
    //       "your_template_id",
    //       form.current,
    //       "your_public_key"
    //     )
    //     .then(
    //       () => setSuccess(true),
    //       (error) => console.log(error.text)
    //     );
  };

  return (
    <div className="mt-5 px-3 text-gray-800">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-gray-700 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Feel free to reach out if you want to collaborate, or wish to join our
        social service initiatives.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="md:col-span-2 md:pr-6 md:border-r border-b md:border-b-0 border-stone-400 pb-6 md:pb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg border border-neutral-300">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-neutral-200 text-gray-900 focus:ring-1"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-neutral-200 text-gray-900"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded bg-neutral-200 text-gray-900"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-4">Let’s Connect</h2>
          <div className="space-y-3 mb-6">
            <p className="flex items-center gap-2">
              <Mail size={18} /> poojasinghgangania@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> 9773542776 / 9990887397
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
          <div className="flex gap-4">
            <a href="https://x.com/PSGangania" target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="lg"
                className="p-2 border rounded hover:text-white hover:bg-purple-600"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/psgangania"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="p-2 border rounded hover:text-white hover:bg-purple-600"
              />
            </a>
            <a
              href="https://instagram.com/PSGangania"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="p-2 border rounded hover:text-white hover:bg-purple-600"
              />
            </a>
            <a
              href="https://facebook.com/PSGangania"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="p-2 border rounded hover:text-white hover:bg-purple-600"
              />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FAQ />
      </motion.div>
    </div>
  );
};

export default Contact;
