import Image from "next/image";
import Link from "next/link";

async function getHomePage() {
    const homepageRes = await fetch("http://localhost:1337/api/homepage?populate=*", {
        cache: "no-store",
    });

    const data = await homepageRes.json();
    
    console.log(data);

    return data.data;
}

export default async function Homepage(props: any) {
    const homepage = await getHomePage();
    
    return (
        
        <section 
                    id="home" 
                    className="relative mt-0 min-h-screen flex pt-[15vh] justify-center"
                    >   
              {/* circles */}        
                       <div className="absolute inset-0 flex items-center justify-center z-1">
                          <div 
                           className="absolute h-40 w-40 rounded-full bg-red-500/90 animate-pulse blur-[100px]">
                          </div>
                        </div>
                      
                        <div className="
                        absolute 
                        z-30 
                        bottom-[70%] left-[39%] 
                        md:bottom-[50%] md:left-[65%] 
                        lg:bottom-[49%] lg:left-[67%]
                        ">  
                          
                          <a href="#contact" 
                           className="
                           group
                           relative
                           flex items-center justify-center 
                           h-[20vw] w-[20vw]
                           min-w-[125px] min-h-[125px]
                           max-w-[300px] max-h-[300px]
                           rounded-full
                           overflow-hidden 
                           bg-red-500/90
                           animate-bounce-slow
                           cursor-pointer">
                        
                        
              
                          <span
                          className="
                          pointer-events-none
                          absolute 
                          text-white 
                          text-2xl 
                          font-light 
                          opacity-0
                          z-20 
                          group-hover:opacity-100 
                          transition duration-300">
                            Contact Me
                          </span>
                          </a>
                          
                        </div>
                        
              
                        <div className="
                        absolute 
                        inset-0
                        flex items-center justify-center 
                        z-10 
                        bottom-[45%] left-[25%] 
                        md:bottom-[2%] md:left-[35%] 
                        lg:bottom-[0%] lg:left-[30%] ">
                          <div 
                           className="
                           relative
                           flex items-center justify-center 
                           h-[2vw] w-[2vw]
                           min-w-[5px] min-h-[5px]
                           max-w-[10px] max-h-[10px]
                           rounded-full 
                           bg-red-500/90
                           animate-bounce-slower">
                          </div>
                        </div>
              
                        <div className="
                        absolute 
                        inset-0 
                        flex 
                        items-center 
                        justify-center 
                        z-10 
                        bottom-[66%] left-[-20%] 
                        md:bottom-[30%] md:left-[70%] 
                        lg:bottom-[55%] lg:left-[50%] ">
                          <div 
                           className="
                           absolute 
                           h-[2vw] w-[2vw]
                           min-w-[5px] min-h-[5px]
                           max-w-[10px] max-h-[10px]
                           rounded-full 
                           bg-red-500/90
                           animate-bounce-slower">
                          </div>
                        </div>
              
                        <div className="
                        absolute 
                        inset-0 
                        flex 
                        items-center 
                        justify-center 
                        z-10 
                        bottom-[43%] left-[-20%] 
                        md:bottom-[36%] md:left-[35%] 
                        lg:bottom-[-2%] lg:left-[68%] ">
                          <div 
                           className="
                           absolute 
                           h-[2vw] 
                           w-[2vw]
                           min-w-[5px] min-h-[5px]
                           max-w-[10px] max-h-[10px]
                           rounded-full 
                           bg-red-500/90
                           animate-bounce-slower">
                          </div>
                        </div>
              
              {/* text container */}
                      <div className="z-5 pt-[40rem] px-[10vw] transform -translate-y-1/2 w-[100vw] h-[100vh] items-center">
                      <div className="flex gap-8 text-2xl font-light">
                      <h3 className="">Skill</h3>
                      <h3 className="">|</h3>
                      <h3 className="">Skill</h3>
                      <h3 className="">|</h3>
                      <h3 className="">Skill</h3>
                      
                      
                      </div>
                      
                      <h1 className="text-7xl font-bold pt-5 left-0">
                        {homepage.name}
                      </h1>
                      
                      <h2 className="text-4xl left-0 py-5">
                        {homepage.role}</h2>
                      
                      <h3 className="text-2xl py-5">
                        {homepage.bio} 
                      </h3>
                      
                      <a href="#projects" 
                      className="inline-block mt-5 px-5 py-4 text-white font-light rounded-3xl bg-red-500/90 hover:bg-red-500/30 hover:mt-4 hover:animate-ease transition duration-300">
                        Scroll Down
                      </a>
                      </div>
              </section>     
        
        )}
