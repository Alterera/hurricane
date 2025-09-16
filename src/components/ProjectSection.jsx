import React from 'react';
import { ExternalLink, Github, Code, Database, Globe , ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectSection = ({isDarkMode , setIsDarkMode}) => {
  const projects = [
    {
      title: `St. Mary's English School`,
      description: 'Built the school website from scratch using cutting edge technology like Nextjs, React and for the content management we have utilised the Sanity CMS.',
      technologies: ['Next js', 'React.js', 'Sanity', 'Tailwind', 'Framer'],
      image: 'https://epe.brightspotcdn.com/dims4/default/0495656/2147483647/strip/true/crop/7063x4793+52+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Fcb%2Fcd%2Ff8213ccb4203abdae3aad13a1eef%2Fai-gpt-teacher-08162022-966654886-949652688.jpg',
      github: '#',
      live: 'https://stmarysenglishschoolpanigaon.in/',
      category: 'Full Stack'
    },
    {
      title: 'Mukaria Mart LLP',
      description: 'This is an ecommerce project I have worked on. The complete website is built using wordpress, elementor. I have done SEO optimization and ranked the website on first page of google search.',
      technologies: ['Wordpress', 'Elementor', 'Redis', 'Cloudinary'],
      image: 'https://www.greenqueen.com.hk/wp-content/uploads/2022/04/pinterest-green-queen.jpg',
      github: '#',
      live: 'https://mukariamart.com',
      category: 'Full Stack'
    },
    {
      title: 'Bethany School Garchuk',
      description: 'A modern school website built using Nextjs, Reactjs, Mongodb and for the content management we have used Sanity CMS.',
      technologies: ['Nextjs', 'React.js', 'Sanity', 'Tailwind CSS', "Framer"],
      image: 'https://static.resumecoach.com/wp-content/uploads/sites/43/2023/11/13133339/resumecoach_resumebuilder_jumbo-1-736x703.webp',
      github: '#',
      live: 'https://bethanyschoolgarchuk.in/',
      category: 'Full Stack'
    },
    {
      title: 'Cricket Club Portal',
      description: 'This project is a cricket club management system which allows players and team owners register and take auction in the cricket events. Also I have integrated the ticket booking and venue entry with QR scanning feature.',
      technologies: ['Nextjs', 'Reactjs', 'MongoDB', 'Tailwind CSS'],
      image: 'https://cdn.theatlantic.com/thumbor/EOnfJgXmV77HsH_Jw0Q639th6iY=/0x0:4800x2700/960x540/media/img/mt/2024/02/HR_1258467649_1/original.jpg',
      github: '#',
      live: 'https://balidungacricketclub.com',
      category: 'Full Stack'
    },
    {
      title: 'St. Vivekanand School',
      description: 'A professional school website to represent the holistic education and development process of the students in the St. Vivekanand School Bikaner.',
      technologies: ['Nextjs', 'Reactjs', 'Sanity', 'Framer' , 'Tailwind CSS'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaw7BILSU4nkH7GXMOaKlyQ3BNbDoeV3GTTJ3A-x82LN-1NC5PU9SMFRDgKdJ4fdSpDQ&usqp=CAU',
      github: '#',
      live: 'https://stvivekanandschool.com',
      category: 'Full Stack'
    },
    {
      title: 'Rent N Go',
      description: 'A Car rental platform to allow customers to book any type of cars in Guwahati. The website is built using nextjs, mongodb and tailwind css.',
      technologies: ['Nextjs', 'Reactjs', 'MongoDB', 'Framer' , 'Tailwind CSS'],
      image: 'https://www.webfactoryltd.com/wp-content/uploads/2020/05/zelt.jpg',
      github: '#',
      live: 'https://anurag-singh17.github.io/Zelt/',
      category: 'Frontend'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack':
        return <Code className="w-5 h-5" />;
      case 'Frontend':
        return <Globe className="w-5 h-5" />;
      case 'Backend':
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

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
      id="projects"
      className={`myfont py-20 transition-colors duration-300 bg-gray-900 text-gray-100`}
    >
      <div className="container mx-auto px-4">
        <motion.div className="max-w-7xl mx-auto" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={fadeUp}>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 text-white`}
            >
              My Projects
            </h2>
            <div
              className={`w-24 h-1 mx-auto mb-4 bg-gradient-to-r from-white to-gray-500`}
            ></div>
            <p
              className={`text-lg max-w-2xl mx-auto text-gray-300`}
            >
              Here are some of my recent projects that showcase my skills and
              passion for development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`group rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 transform hover:-translate-y-2 bg-gray-800 border-gray-700 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 100}ms` }}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 left-4 flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-100`}
                  >
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors duration-200 bg-gray-700 hover:bg-gray-600`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors duration-200 bg-gray-700 hover:bg-gray-600`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-200 text-white group-hover:text-gray-200`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mb-4 line-clamp-3 text-gray-300`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium border bg-gray-700 text-gray-200 border-gray-600`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 transition-colors duration-200 text-gray-300 hover:text-blue-400`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div className="text-center mt-12" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <p className={`text-gray-300 mb-6`}>
              Want to see more of my work?
            </p>
            <Link
              to="/all_projects"
              className="inline-flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUpRight className="w-5 h-5 font-medium" />
              <span className="font-medium">View All Projects</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
