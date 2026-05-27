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
            { 
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0 
            }
        );
//
        sections.forEach((section) => observer.observe(section));
//
        return () => {
            sections.forEach((section) => observer.unobserve(section));
            };
    }, []);//

        return (
        //navbar/header component with styling and navigation links
        <header className="w-[92vw] max-w-[400px] h-[50px] mt-10 fixed z-50 left-1/2 transform -translate-x-1/2 right-1/2 rounded-full bg-white/80 backdrop-blur-xl">
        
          <nav className="w-full h-full border border-black/20 shadow-xs shadow-black/20 rounded-full backdrop-blur-xl">
            <ul className="flex h-[50px] items-center justify-center gap-4 text-md md:text-lg font-light backdrop-blur-xl">
              
              <li>
                <NavLink 
                text="Home" 
                path="#home" 
                //ternary operator: highlight navbar link when on corresponding section
                className={
                    activeSection === "home" 
                    ? "opacity-100 text-red-500 bg-red-300/20 py-2 px-4 rounded-3xl" 
                    : "py-2 px-4 rounded-3xl text-zinc-500 bg-white/80 hover:text-black hover:bg-zinc-100 hover:py-2 hover:px-4 hover:rounded-3xl"} />
              </li>
              
              <li>
                <NavLink 
                text="Work" 
                path="#projects" 
                className={
                    activeSection === "projects" 
                    ? "opacity-100 text-red-500 bg-red-300/20 py-2 px-4 rounded-3xl" 
                    : "y-2 px-4 rounded-3xl text-zinc-500 bg-white/80 hover:text-black hover:bg-zinc-100 hover:py-2 hover:px-4 hover:rounded-3xl"} />
              </li>
              
              <li>
                <NavLink 
                text="About" 
                path="#about" 
                className={
                    activeSection === "about" 
                    ? "opacity-100 text-red-500 bg-red-300/20 py-2 px-4 rounded-3xl" 
                    : "y-2 px-4 rounded-3xl text-zinc-500 bg-white/80 hover:text-black hover:bg-zinc-100 hover:py-2 hover:px-4 hover:rounded-3xl"} />
              </li>
              

              <li>
                <NavLink 
                text="Contact" 
                path="#contact" 
                className={
                    activeSection === "contact" 
                    ? "opacity-100 text-red-500 bg-red-300/20 py-2 px-4 rounded-3xl" 
                    : "y-2 px-4 rounded-3xl text-zinc-500 bg-white/80 hover:text-black hover:bg-zinc-100 hover:py-2 hover:px-4 hover:rounded-3xl"} />
              </li>

            </ul>
          </nav>
        
        </header>
        );
    }