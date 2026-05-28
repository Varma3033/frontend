//Needed since navbar tracks scrolling and user interaction
"use client";

// import React hooks
// useEffect = runs code when component loads/updates
// useState = stores and updates component data
import { useEffect, useState } from "react";
import NavLink from "./navlink";


export default function Navbar() {

//variable to keep track of the active section on the page, starting from the homepage (chatgpt helped me figure this out) 
  const [activeSection, setActiveSection] = useState("home");

//run after component loads
    useEffect(() => {
//select all the <section> element tags 
        const sections = document.querySelectorAll("section");

//create intersection observer API- a browser feature
        const observer = new IntersectionObserver(
          // Runs whenever a section enters/leaves the viewport
            (entries) => {
                // Loops through each section
                entries.forEach((entry) => {
                     // Checks if the section is visible
                    if (entry.isIntersecting) {
                        // Updates activeSection using the section's ID
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { 
                // Controls at what % of the page does each section "active"- key for navbar to highlight accordingly
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
            <ul className="flex h-[50px] items-center justify-center gap-4 text-md md:text-lg font-light rounded-full backdrop-blur-xl">
              
              <li>
                <NavLink 
                text="Home" 
                path="#home" 
                //ternary operator: highlight navbar link when on corresponding section (chatgpt helped me figure this out) 
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
                    : "py-2 px-4 rounded-3xl text-zinc-500 bg-white/80 hover:text-black hover:bg-zinc-100 hover:py-2 hover:px-4 hover:rounded-3xl"} />
              </li>
              
              <li>
                <NavLink 
                text="About" 
                path="#about" 
                className={
                    activeSection === "about" 
                    ? "opacity-100 text-red-500 bg-red-300/20 py-2 px-4 rounded-3xl" 
                    : "py-2 px-4 rounded-3xl text-zinc-500 bg-white/80 hover:text-black hover:bg-zinc-100 hover:py-2 hover:px-4 hover:rounded-3xl"} />
              </li>
              

              <li>
                <NavLink 
                text="Contact" 
                path="#contact" 
                className={
                    activeSection === "contact" 
                    ? "opacity-100 text-red-500 bg-red-300/20 py-2 px-4 rounded-3xl" 
                    : "py-2 px-4 rounded-3xl text-zinc-500 bg-white/80 hover:text-black hover:bg-zinc-100 hover:py-2 hover:px-4 hover:rounded-3xl"} />
              </li>

            </ul>
          </nav>
        
        </header>
        );
    }