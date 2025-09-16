import React from "react";
import { motion } from "framer-motion";
import { Code, Briefcase, Heart } from "lucide-react";
import CountUp from "./reactbits/CountUp";

const About = ({ isDarkMode }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };
  return (
    <section
      id="about"
      className={`myfont py-20 transition-colors duration-500
       bg-zinc-900 text-gray-200`}
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
              About Me
            </h2>
            <div className={`w-24 h-1 mx-auto bg-white`}></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <motion.p className={`text-lg leading-relaxed text-gray-300`} variants={fadeUp}>
                Hello! I'm Bidyut Nath, a passionate Full Stack Developer with a
                strong foundation in modern web technologies. I love creating
                digital solutions that make a difference and bring ideas to life
                through code.
              </motion.p>

              <motion.p className={`text-lg leading-relaxed text-gray-300`} variants={fadeUp}>
                My journey in software development has equipped me with
                expertise in both frontend and backend technologies. I'm
                particularly skilled in the MERN stack and enjoy working on
                challenging projects that push the boundaries of what's possible
                on the web.
              </motion.p>

              <motion.p className={`text-lg leading-relaxed text-gray-300`} variants={fadeUp}>
                When I'm not coding, I'm exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying updated with the latest industry trends.
              </motion.p>

              {/* Stats */}
              <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8" variants={container}>
                <motion.div
                  className={`text-center p-4 rounded-xl transition-colors duration-300 bg-zinc-800 text-gray-200`}
                  variants={fadeUp}
                >
                  <div className="flex items-center text-3xl font-bold justify-center">
                    <CountUp
                      from={0}
                      to={13}
                      separator=","
                      direction="up"
                      duration={0.2}
                      className="count-up-text"
                    />
                    <span>+</span>
                  </div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </motion.div>
                <motion.div
                  className={`text-center p-4 rounded-xl transition-colors duration-300 bg-zinc-800 text-gray-200`}
                  variants={fadeUp}
                >
                  <div className="flex items-center justify-center text-3xl font-bold">
                  <CountUp
                      from={0}
                      to={19}
                      separator=","
                      direction="up"
                      duration={0.2}
                      className="count-up-text"
                    />
                    <span>+</span>
                  </div>
                  <div className="text-sm text-gray-400">Projects</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Feature Cards */}
            <motion.div className="space-y-6" variants={container}>
              <motion.div
                className={`p-6 rounded-2xl border transform hover:scale-105 transition-all duration-300 bg-zinc-800 border-zinc-700"
                    `}
                variants={fadeUp}
              >
                <Code className={`w-12 h-12 mb-4 text-blue-400`} />
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className={"text-gray-300"}>
                  I write maintainable, scalable, and well-documented code that
                  follows industry best practices.
                </p>
              </motion.div>

              <motion.div
                className={`p-6 rounded-2xl border transform hover:scale-105 transition-all duration-300 bg-zinc-800 border-zinc-700`}
                variants={fadeUp}
              >
                <Briefcase className={`w-12 h-12 mb-4 text-purple-400`} />
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className={"text-gray-300"}>
                  I enjoy tackling complex challenges and finding innovative
                  solutions to technical problems.
                </p>
              </motion.div>

              <motion.div
                className={`p-6 rounded-2xl border transform hover:scale-105 transition-all duration-300 bg-zinc-800 border-zinc-700"
                    `}
                variants={fadeUp}
              >
                <Heart
                  className={`w-12 h-12 mb-4 ${
                    isDarkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                />
                <h3 className="text-xl font-semibold mb-2">
                  Passionate Learner
                </h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Constantly exploring new technologies and frameworks to stay
                  ahead in the rapidly evolving tech landscape.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
