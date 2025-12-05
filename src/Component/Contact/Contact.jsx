import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="text-blue-400 w-10 h-10 mx-auto mb-4" />,
      title: "Email",
      info: "yourEmail@gmail.com",
      color: "hover:shadow-blue-500",
    },
    {
      icon: <FaPhoneAlt className="text-green-400 w-10 h-10 mx-auto mb-4" />,
      title: "Phone",
      info: "+8801755875181",
      color: "hover:shadow-green-500",
    },
    {
      icon: <FaWhatsapp className="text-green-400 w-10 h-10 mx-auto mb-4" />,
      title: "WhatsApp",
      info: "+8801755875181",
      color: "hover:shadow-green-400",
    },
  ];

  return (
    <section id="contact" className="py-20 text-white ">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out for any project, collaboration, or job opportunity.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 p-6 rounded-xl shadow-lg transition text-center ${contact.color}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {contact.icon}
              <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
              <p className="text-gray-300">{contact.info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
