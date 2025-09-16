import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { type: "anchor", to: "#home", label: "Home" },
    { type: "anchor", to: "#about", label: "About" },
    { type: "anchor", to: "#skills", label: "Skills" },
    { type: "anchor", to: "#services", label: "Services" },
    { type: "anchor", to: "#projects", label: "Projects" },
    { type: "anchor", to: "#contact", label: "Contact" },
    // { type: "route", to: "/all_projects", label: "All Projects" },
  ];

  const handleAnchorClick = (hash) => {
    const id = hash.startsWith("#") ? hash.substring(1) : hash;
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToTarget, 300);
    } else {
      scrollToTarget();
    }
    setIsOpen(false);
  };

  return (
    <div
      className={`myfont w-full fixed left-0 z-20 pt-5 px-6 flex justify-between items-center 
        transition-colors duration-500 text-white`}
    >
      {/* title */}
      <div className="font-bold text-lg"></div>

      {/* Desktop Nav */}
      <div
        className={`hidden md:flex justify-center gap-7 backdrop-blur-lg items-center rounded-3xl shadow-md border px-6 h-11 
          transition-colors duration-500 border-zinc-700 text-zinc-300`}
      >
        {navItems.map((item) =>
          item.type === "anchor" ? (
            <button
              key={item.to}
              onClick={() => handleAnchorClick(item.to)}
              className="px-3 py-1 rounded-2xl transition-all duration-300 
         hover:text-[#ff102a] cursor-pointer"
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-1 rounded-2xl transition-all duration-300 
         hover:text-[#ff102a] cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      {/* Dark Mode + Hamburger */}
      <div className="flex items-center gap-3 cursor-pointer">
        {/* Contact Button */}
        <Link href="#">
          <button className="flex items-center gap-2 rounded-full transition-all duration-300 hover:scale-101 cursor-pointer">
            <BsWhatsapp className="w-5 h-5 text-green-400" />
            Let's Talk
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className={`absolute top-16 left-0 w-full flex flex-col items-center gap-5 py-6 backdrop-blur-lg shadow-md border 
            transition-colors duration-500 bg-black/80 border-zinc-700 text-zinc-300`}
        >
          {navItems.map((item) =>
            item.type === "anchor" ? (
              <button
                key={item.to}
                onClick={() => handleAnchorClick(item.to)}
                className="px-3 py-1 rounded-2xl transition-all duration-300 
        hover:bg-black hover:text-white"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-1 rounded-2xl transition-all duration-300 
        hover:bg-black hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
