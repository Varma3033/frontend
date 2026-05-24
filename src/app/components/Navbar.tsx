"use client";

import { useEffect, useState } from "react";
import NavLink from "./navlink";

export default function Navbar() {

//variable to keep track of the active section on the page, starting from the homepage
  const [activeSection, setActiveSection] = useState("home");

//
    useEffect(() => {
        const sections = document.querySelectorAll("section");
//
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
//
            { threshold: 0.5 }
        );
//
        sections.forEach((section) => 
            {observer.observe(section); 
            });
//
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };

    }, []); //

        return (
        //navbar/header component with styling and navigation links
        <header className="mt-10 fixed z-50 left-1/2 transform -translate-x-1/2 right-1/2 w-[650px] h-[50px] rounded-full bg-white/50 backdrop-blur-xl">
        <div>
          <nav className="flex items-center justify-center w-[650px] h-[50px] border border-black rounded-full">
            <ul className="flex items-center justify-center gap-15 text-lg font-bold text-black">
              <li>
                <NavLink 
                text="Home" 
                path="#home" 
                //ternary operator: highlight navbar link when on corresponding section
                className={
                    activeSection === "home" 
                    ? "opacity-100 text-red-400 bg-red-300/20 py-2 px-4 rounded-3xl" 
                    : "opacity-50 hover:opacity-75"} />
              </li>
              <li>
                <NavLink 
                text="My Projects" 
                path="#my-projects" 
                className={
                    activeSection === "my-projects" 
                    ? "opacity-100 text-red-400 bg-red-300/20 py-2 px-4 rounded-3xl" 
                    : "opacity-50 hover:opacity-75"} />
              </li>
              <li>
               <NavLink 
               text="About Me" 
               path="#about-me" 
               className={
                   activeSection === "about-me" 
                   ? "opacity-100 text-red-400 bg-red-300/20 py-2 px-4 rounded-3xl" 
                   : "opacity-50 hover:opacity-75"} />
              </li>
              <li>
                <NavLink 
                text="Contact Me" 
                path="#contact-me" 
                className={
                    activeSection === "contact-me" 
                    ? "opacity-100 text-red-400 bg-red-300/20 py-2 px-4 rounded-3xl" 
                    : "opacity-50 hover:opacity-75"} />
              </li>
            </ul>
          </nav>
        </div> 
        </header>
        );
    }