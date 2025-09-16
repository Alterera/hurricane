import React, { useState } from "react";
import { ArrowRight, Facebook, Instagram } from "lucide-react";
import { FiDownload } from "react-icons/fi";
import HyperSpeed from "./reactbits/HyperSpeed";
import RotatingText from "./reactbits/RotatingText";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const HeroSection = ({ isDarkMode, setIsDarkMode }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Specialist",
    "Frontend Enthusiast",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      className={`myfont h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 
      ${isDarkMode ? "text-white" : "text-white"}`}
    >
      {/* HyperSpeed Background */}
      <div className="absolute inset-0 z-10">
        <HyperSpeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "mountainDistortion",
            length: 400,
            roadWidth: 9,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 50,
            lightPairsPerRoadWay: 50,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],

            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.05, 400 * 0.15],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.2, 0.2],
            carFloorSeparation: [0.05, 1],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xff102a, 0xeb383e, 0xff102a],
              rightCars: [0xdadafa, 0xbebae3, 0x8f97e4],
              sticks: 0xdadafa,
            },
          }}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="max-w-4xl mx-auto text-center" variants={container} initial="hidden" animate="show">
          <div className="space-y-6 animate-fade-in">
            {/* Profile Image */}
            <motion.div className="mt-14 w-full flex gap-6 justify-center z-1" variants={fadeUp}>
              <div className="h-30 w-30 rounded-full overflow-hidden">
                <img
                  src="/bidyut.webp"
                  alt="Profile"
                  className="h-30 w-30 rounded-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 w-full flex gap-4 justify-center flex-wrap" variants={fadeUp}>
              <h1 className="hero-text-shadow">Bidyut Nath</h1>
            </motion.div>

            {/* Role Animation */}
            <motion.div className="h-12 flex items-center justify-center" variants={fadeUp}>
              <RotatingText
                texts={["Web Developer", "IT Consultant", "Educator"]}
                mainClassName="text-xl sm:text-2xl md:text-3xl font-medium hero-text-shadow text-white overflow-hidden justify-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.div>

            {/* Description */}
            <motion.p className="text-sm md:text-lg max-w-2xl md:max-w-3xl mx-auto text-gray-200 hero-text-shadow" variants={fadeUp}>
              Passionate about crafting exceptional digital experiences with
              modern technologies. Specialized in full-stack development with
              expertise in MERN stack and beyond.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex gap-4 justify-center mt-5" variants={fadeUp}>
              {/* Contact Me Button */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-2 rounded-full font-medium border transition-all duration-300
                  bg-white text-black border-white hover:bg-gray-200 hover:text-[#ff102a] hover:scale-105"
              >
                contact me <ArrowRight size={18} />
              </a>

              {/* Resume Button */}
              <a
                href="#"
                download="bidyut-resume.pdf"
                className="flex items-center gap-2 px-6 py-2 rounded-full font-medium border transition-all duration-300
                  border-white text-white hover:bg-white hover:text-black hover:scale-105"
              >
                my resume <FiDownload size={18} />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="flex justify-center space-x-6 mt-5 animate-fade-in-up delay-700" variants={fadeUp}>
              {[
                { href: "https://wa.me/917577060394", Icon: BsWhatsapp },
                {
                  href: "https://www.facebook.com/bidyut.nath.9883/",
                  Icon: Facebook,
                },
                { href: "https://www.instagram.com/biiidyut1/", Icon: Instagram },
              ].map(({ href, Icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 
                    text-white hover:bg-white hover:bg-opacity-20 hover:text-black"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
