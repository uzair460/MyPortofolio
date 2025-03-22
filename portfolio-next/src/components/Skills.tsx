"use client";

import { motion } from "framer-motion";
import {
  ReactIcon,
  NodeIcon,
  MongoDBIcon,
  MySQLIcon,
  PowerBIIcon,
  PythonIcon,
  AWSIcon,
  TailwindIcon,
  ExpressIcon,
  PandasIcon,
  NumPyIcon,
  SQLIcon,
} from "@/components/icons";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "React", level: 90, icon: ReactIcon },
      { name: "Tailwind CSS", level: 85, icon: TailwindIcon },
      { name: "HTML/CSS", level: 90, icon: ReactIcon },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 85, icon: NodeIcon },
      { name: "Express.js", level: 80, icon: ExpressIcon },
      { name: "Python", level: 80, icon: PythonIcon },
    ],
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB", level: 85, icon: MongoDBIcon },
      { name: "MySQL", level: 80, icon: MySQLIcon },
      { name: "AWS", level: 75, icon: AWSIcon },
    ],
  },
  {
    category: "Data Analysis",
    items: [
      { name: "Power BI", level: 85, icon: PowerBIIcon },
      { name: "Pandas", level: 80, icon: PandasIcon },
      { name: "NumPy", level: 80, icon: NumPyIcon },
      { name: "SQL", level: 85, icon: SQLIcon },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
