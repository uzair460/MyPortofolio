"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, GraduationCap, Code, Brain } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/me.jpeg"
                alt="Anjum Uzair"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Software Engineering Student & Aspiring Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I am currently pursuing my Bachelor's degree in Software
                Engineering at The University of Bolton, where I'm developing my
                expertise in full-stack development and data analysis. My
                academic journey has equipped me with a strong foundation in
                modern web technologies and data-driven solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                What sets me apart is my multicultural background and
                adaptability. Born and raised in Italy, I moved to the UK to
                pursue my studies. My fluency in Italian, English, Hindi,
                Punjabi, and Urdu, along with my Italian citizenship, positions
                me as a valuable asset for companies operating in global
                markets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Education
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Bachelor of Software Engineering
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The University of Bolton
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2022 - 2025
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Projects
                </h4>
                <p className="text-gray-600 dark:text-gray-300">2+ Academic</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Full Stack & Data Analysis
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Globe className="w-5 h-5 text-blue-500" />
                <span>Multilingual</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                <span>University of Bolton</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Code className="w-5 h-5 text-blue-500" />
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Brain className="w-5 h-5 text-blue-500" />
                <span>Data Analysis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
