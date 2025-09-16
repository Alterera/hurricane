import React from "react";
import { motion } from "framer-motion";

const Skills = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90, color: "bg-blue-500" },
        { name: "HTML", level: 95, color: "bg-orange-400" },
        { name: "CSS", level: 90, color: "bg-blue-400" },
        { name: "JavaScript", level: 85, color: "bg-yellow-400" },
        { name: "TailwindCSS", level: 88, color: "bg-cyan-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Express.js", level: 80, color: "bg-gray-500" },
        { name: "MongoDB", level: 75, color: "bg-emerald-500" },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "C++ OOP", level: 80, color: "bg-indigo-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-400" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="skills"
      className={`myfont py-20 transition-colors duration-300 bg-gray-900 text-gray-100`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={fadeUp}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-white`}>
              My Skills
            </h2>
            <div className={`w-24 h-1 mx-auto mb-4 bg-white`}></div>
            <p className={`text-lg max-w-2xl mx-auto text-gray-400`}>
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className={`p-6 rounded-2xl shadow-lg border transform hover:scale-105 transition-all duration-300 bg-gray-800 border-gray-700"`}
                variants={fadeUp}
              >
                <h3 className={`text-2xl font-semibold mb-6 text-center text-white`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skill.name} className="group" variants={fadeUp}>
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`font-medium text-gray-200`}
                        >
                          {skill.name}
                        </span>
                        <span className={`text-sm text-gray-400`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`w-full rounded-full h-3 overflow-hidden bg-gray-700`}
                      >
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${
                              categoryIndex * 200 + skillIndex * 100
                            }ms`,
                          }}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Icons */}
          <motion.div className="mt-16 text-center" variants={container}>
            <motion.h3 className={`text-2xl font-semibold mb-8 text-whit`} variants={fadeUp}>
              Technologies I Work With
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind",
                "C++",
                "Git",
                "VSCode",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 cursor-default border bg-gray-800 border-gray-700 text-gray-300 hover:border-white hover:text-white"
                      `}
                  style={{ animationDelay: `${index * 100}ms` }}
                  variants={fadeUp}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
