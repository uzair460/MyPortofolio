"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  details?: string[];
}

const projects: Project[] = [
  {
    title: "E-commerce Data Analysis Project",
    description:
      "A comprehensive data analysis project focusing on e-commerce sales data. Features include AWS RDS MySQL setup, data generation with Python, and interactive Power BI dashboards for business insights.",
    image: "/project2.jpeg",
    tech: ["Python", "Power BI", "AWS RDS", "MySQL", "Data Analysis"],
    github: "https://github.com/yourusername/ecommerce-analysis",
    demo: "https://ecommerce-analysis-demo.com",
    featured: true,
    details: [
      "AWS RDS MySQL Server Setup: Configured a MySQL database on AWS RDS and connected it to MySQL Workbench",
      "Data Generation: Used Python to generate synthetic CSV datasets for realistic e-commerce transactions",
      "Database Population: Imported the generated CSV data into MySQL with appropriate table relationships",
      "Power BI Integration: Created interactive dashboards for key business metrics",
      "Analytics & Insights: Analyzed price trends, customer demographics, and best-selling categories",
    ],
  },
  {
    title: "Data Visualization Inventory Management POS App",
    description:
      "A web and mobile-based application for small businesses to manage inventory. Features real-time tracking, data visualization, and mobile integration with barcode scanning.",
    image: "/project1.jpeg",
    tech: ["React", "Node.js", "MongoDB", "AWS", "React Native"],
    github: "https://github.com/uzair460/Data-Visualizing-Inventory-Management-App-for-Small-Businesses",
    demo: "https://inventory-management-demo.com",
    featured: true,
    details: [
      "Real-Time Inventory Management: Track stock levels with real-time updates",
      "Data Visualization: Generate insightful reports and graphs for inventory trends",
      "Mobile Integration: Use the mobile app for on-the-go inventory updates and barcode scanning",
      "Low Stock Alerts: Get notified when stock levels drop below predefined thresholds",
      "User-Friendly Interface: Designed for non-technical users with simplicity in mind",
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.details && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                        {project.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
