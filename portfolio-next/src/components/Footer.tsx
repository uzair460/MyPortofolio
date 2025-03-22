"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, X, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/uzair460",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/uzair-anjum-4070801b4/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/Red4601",
    icon: X,
  },
  {
    name: "Email",
    href: "mailto:anjumuzair46@gmail.com",
    icon: Mail,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Social Links */}
          <motion.div variants={item} className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            variants={item}
            className="text-center text-gray-500 dark:text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Uzair Anjum. All rights reserved.
          </motion.p>

          {/* Made with */}
          <motion.p
            variants={item}
            className="mt-4 text-center text-gray-500 dark:text-gray-400 text-sm"
          >
            Made with <span className="text-red-500">❤</span> using Next.js,
            Tailwind CSS, and Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
