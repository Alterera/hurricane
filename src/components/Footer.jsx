import React from 'react';
import { Heart, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = ({isDarkMode , setIsDarkMode}) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <footer className="myfont bg-black text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-6xl mx-auto" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Column */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <div className="text-2xl font-bold text-white bg-clip-text">
                Bidyut Nath
              </div>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions 
                and bringing ideas to life through code.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div className="space-y-4" variants={fadeUp}>
              <h3 className="text-lg font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS', 'Css', 'C++' , 'javaScript', 'VsCode', 'Figma', 'Git & GitHub'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 dark:bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div className="border-t border-gray-800 dark:border-gray-700 pt-8" variants={fadeUp}>
            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Developed by</span>
                <Link to="https://alterera.net">
                  <span className='text-blue-400 hover:underline'>Alterera Networks</span>
                </Link>
              </div>
              
              <div className="text-gray-400">
                © 2025 Bidyut Nath. All rights reserved.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
