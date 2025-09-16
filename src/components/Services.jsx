import React from "react";
import { Code, Brush, Layers, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "High-quality and scalable websites using modern frameworks like React, and Node.js.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "UI/UX Design",
    desc: "Crafting clean, modern, and user-friendly interfaces with a focus on seamless experiences.",
    icon: <Brush className="w-8 h-8" />,
  },
  {
    title: "CSC Services",
    desc: "Providing CSC services from last 4 years. Have proper knowledge of Digital Seva Portal workflow.",
    icon: <MonitorSmartphone className="w-8 h-8" />,
  },
  {
    title: "API Services",
    desc: "Seamless API servives like AI, third-party tools, and other services to build powerful digital ecosystems.",
    icon: <Layers className="w-8 h-8" />,
  },
];

const Services = () => {
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
      id="services"
      className={`myfont py-20 px-6 md:px-16 lg:px-28 bg-black transition-colors duration-500`}
    >
      <motion.div className="text-center mb-14" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 className={`text-4xl md:text-5xl font-extrabold text-white`} variants={fadeUp}>
          My Services
        </motion.h2>
        <motion.p className={`mt-4 max-w-2xl mx-auto text-zinc-400 text-sm md:text-base`} variants={fadeUp}>
          I provide end-to-end digital solutions that transform your ideas into
          powerful products.
        </motion.p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`group p-6 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div
              className={`mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-700 group-hover:scale-110 transition-transform duration-300`}
            >
              {React.cloneElement(service.icon, { className: `w-8 h-8 text-white` })}
            </div>
            <h3 className={`text-xl font-semibold mb-2 text-white group-hover:text-indigo-500`}>
              {service.title}
            </h3>
            <p className={`text-sm leading-relaxed text-zinc-400`}>
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
