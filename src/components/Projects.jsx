import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sun, Moon,  ExternalLink, Github} from "lucide-react";


const projects = [
  {
    name: "St. Mary's English School",
    description:
      "AI-Based Study Assistant An intelligent, full-stack study assistant web application that allows students to upload PDF notes and receive: Summarized, quizzes, True/False, questions Q&A based on the document ",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Gsap"],
    image:
      "https://epe.brightspotcdn.com/dims4/default/0495656/2147483647/strip/true/crop/7063x4793+52+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Fcb%2Fcd%2Ff8213ccb4203abdae3aad13a1eef%2Fai-gpt-teacher-08162022-966654886-949652688.jpg",
    github: "#",
    link: "#",
    backend: "#",
    fullstack: true,
  },
  {
    name: "Pinterest",
    description:
      "Pinterest-inspired Web Application A modern web application designed for discovering, saving, and sharing visual content, inspired by Pinterest.",
    technologies: ["React", "Express", "MongoDB", "Tailwind", "Cloudinary", "Node.js", "Gsap"],
    image:
      "https://www.greenqueen.com.hk/wp-content/uploads/2022/04/pinterest-green-queen.jpg",
    github: "https://github.com/ANURAG-SINGH17/Pinterest",
    link: "https://pintrest-sigma.vercel.app/",
    backend: "https://pintrest-kniq.onrender.com/",
    fullstack: true,
  },
  {
    name: "AI-Based Resume Maker",
    description:
      "AI-Based Resume Maker An intelligent and user-friendly web application designed to streamline the resume creation process using AI. This project leverages cutting-edge technologies to allow users to generate professional resumes with ease.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "TailwindCSS", "Gsap"],
    image:
      "https://static.resumecoach.com/wp-content/uploads/sites/43/2023/11/13133339/resumecoach_resumebuilder_jumbo-1-736x703.webp",
    github: "https://github.com/ANURAG-SINGH17/Ai_Resume-builder",
    link: "https://ai-resume-builder-one-xi.vercel.app/",
    backend: "https://ai-resume-builder-2-jmj8.onrender.com/",
    fullstack: true,
  },
  {
    name: "Apple Vision Pro",
    description:
      "This project is a clone of Apple Vision Pro interface, replicating its immersive user experience. The goal is to recreate the fluid, intuitive interaction that Apple Vision Pro offers, using modern web technologies.",
    technologies: ["Html", "CSS", "JavaScript", "Gsap", "locomotive"],
    image:
      "https://cdn.theatlantic.com/thumbor/EOnfJgXmV77HsH_Jw0Q639th6iY=/0x0:4800x2700/960x540/media/img/mt/2024/02/HR_1258467649_1/original.jpg",
    github: "https://github.com/ANURAG-SINGH17/Apple-Vision-Pro",
    link: "https://anurag-singh17.github.io/Apple-Vision-Pro/",
    fullstack: false,
  },
  {
    name: "Magma",
    description:
      "Magma Clone: A fully responsive and animated website inspired by Magma, offering a seamless and dynamic user experience across all devices..",
    technologies: ["Html", "CSS", "JavaScript", "Gsap", "locomotive"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaw7BILSU4nkH7GXMOaKlyQ3BNbDoeV3GTTJ3A-x82LN-1NC5PU9SMFRDgKdJ4fdSpDQ&usqp=CAU",
    github: "https://github.com/ANURAG-SINGH17/MAGMA",
    link: "https://anurag-singh17.github.io/MAGMA/",
    fullstack: false,
  },
  {
    name: "Zelt",
    description:
      "FRONTEND PROJECT Full Responsive - Zelt Clone: A visually captivating and animated digital platform, recreated from Zelt, designed to deliver immersive experiences with modern web animations and sleek design. ",
    technologies: ["Html", "CSS", "JavaScript", "Gsap", "locomotive"],
    image:
      "https://www.webfactoryltd.com/wp-content/uploads/2020/05/zelt.jpg",
    github: "https://github.com/ANURAG-SINGH17?tab=repositories",
    link: "https://anurag-singh17.github.io/Zelt/",
    fullstack: false,
  },
  {
    name:"Duo Studio",
    description:"Duo Studio Clone: Inspired by Duo Studio, we provide innovative design and strategic digital solutions to elevate your brand’s online presence. ",
    technologies: ["Html", "CSS", "JavaScript", "Gsap", "locomotive"],
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPa_kM96wyyeIJ-KzRearvFk9onwnn3oOTyw&s",
    github:"https://github.com/ANURAG-SINGH17/DUO-STUDIO",
    link:"https://anurag-singh17.github.io/DUO-STUDIO/",
    fullstack: false,
  },
  {
    name:"CYBERFICTION",
    description:"FRONTEND PROJECT Cyberfiction Clone: A dynamic and animated digital experience inspired by Cyberfiction, blending futuristic design with cutting-edge web technologies.",
    technologies: ["Html", "CSS", "JavaScript", "Gsap", "locomotive"],
    image:"https://assets.awwwards.com/awards/submissions/2023/02/63ed11e78e091496655329.png",
    github:"https://github.com/ANURAG-SINGH17/CYBERFICTION",
    link:"https://anurag-singh17.github.io/CYBERFICTION/",
    fullstack: false,
  },
  {
    name:"REJOUICE",
    description:"Frontend Project Full Responsive - Rejouice Clone: A beautifully animated and interactive website inspired by Rejouice, crafted to provide an engaging and visually stunning user experience. ",
    technologies: ["Html", "CSS", "JavaScript", "Gsap", "locomotive"],
    image:"https://www.cssdesignawards.com/cdasites/2023/202309/20230914161045.jpg",
    github:"https://github.com/ANURAG-SINGH17/REJOUICE",
    link:"https://anurag-singh17.github.io/REJOUICE/",
    fullstack: false,
  },
  {
    name:"TWO GOOD CO",
    description:"Two Good Co Clone: A creatively animated website inspired by Two Good Co, offering a seamless and visually appealing digital experience.",
    technologies: ["Html", "CSS", "JavaScript", "Gsap", "locomotive"],
    image:"https://assets.awwwards.com/awards/sites_of_the_day/2023/08/two-good-co-1.jpg",
    github:"https://github.com/ANURAG-SINGH17/Two-Good-Co.-?tab=readme-ov-file",
    link:"https://anurag-singh17.github.io/Two-Good-Co.-/",
    fullstack: false,
  },
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div
  className={`min-h-screen flex flex-col items-center py-10 px-4 transition-colors duration-500 bg-gray-900 text-white`}
>
  {/* Header with theme toggle */}
  <div className="flex justify-between items-center w-full max-w-5xl mb-8">
    <h1 className="text-4xl font-bold mt-10">My Projects</h1>
  </div>

  {/* Project Cards */}
  <div className="w-full max-w-5xl space-y-6">
    {projects.map((project, index) => (
      <div
        key={index}
        className={`rounded-2xl shadow-md border overflow-hidden transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-400`}
      >
        {/* Header */}
        <div
          onClick={() => toggleProject(index)}
          className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-opacity-70"
        >
          <h2 className="text-lg font-semibold">{project.name}</h2>
          {openIndex === index ? (
            <ChevronUp className="w-6 h-6" />
          ) : (
            <ChevronDown className="w-6 h-6" />
          )}
        </div>

        {/* Details */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            openIndex === index
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden px-6 pb-6">
            {/* Card Content as Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Side - Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />

              {/* Right Side - Text */}
              <div>
                <p className="mb-4">{project.description}</p>

                {/* Note for fullstack projects */}
                {project.fullstack && (
                  <p className="text-sm text-red-400 mb-3">
                    <strong>Note:</strong> Open the{" "}
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-400"
                    >
                      backend link
                    </a>{" "}
                    before opening the live demo to connect the server.
                  </p>
                )}

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 bg-black text-white rounded-full h-8 text-sm shadow-md hover:text-blue-500 transition-transform duration-300 ease-in-out hover:scale-105 flex items-center gap-3"
                  >
                    <ExternalLink className="h-4 w-4"/> <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 flex items-center text-sm text-white hover:text-blue-500 transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg shadow-md cursor-pointer"
                  >
                    <Github className="h-4 w-4"/> <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Projects;
