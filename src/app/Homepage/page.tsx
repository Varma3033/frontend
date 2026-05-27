import Link from "next/link";
import {
    ArrowDownCircle
} from "lucide-react"

async function getHomePage() {
    const homepageRes = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/homepage?populate=*`, {
        cache: "no-store",
    });

    const data = await homepageRes.json();
    
    console.log(data);

    return data.data;
}

export default async function Homepage() {
    const homepage = await getHomePage();
    
    return (
        
        <section 
        id="home" 
        className="relative mt-0 min-h-screen flex items-center justify-center px-5 overflow-hidden"
                    >   
{/* circles */}    
       {/* interactive circles */}
<div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* background circle */}
  <div className="absolute left-1/2 top-1/2 h-90 w-90 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-[70px] animate-pulse" />

  {/* contact circle */}
<Link
  href="#contact"
  className="
    pointer-events-auto
    group
    absolute
    right-[8%]
    top-[20%]
    z-30
    flex items-center justify-center
    h-[50px] w-[50px]
    sm:h-[60px] sm:w-[60px]
    md:h-[70px] md:w-[70px]
    lg:h-[80px] lg:w-[80px]
    rounded-full
    bg-red-500/80
    shadow-xl shadow-red-500/40
    backdrop-blur-md
    animate-pulse
    transition-all duration-700
    hover:scale-110
    hover:bg-red-600
  "
>

  {/* expanding hover effect */}
  <div
    className="
      absolute
      inset-0
      rounded-full
      bg-white/10
      scale-0
      transition duration-200
      "
  />

  {/* text */}
  <span
    className="
      absolute
      text-white
      text-[0.6rem] md:text-[0.75rem] lg:text-[0.9rem]
      font-light
      opacity-0
      group-hover:opacity-100
      transition duration-200
    "
  >
    Contact Me
  </span>

  {/* center dot */}
  <div
    className="
      h-2 w-2
      md:h-3 md:w-3
      lg:h-4 lg:w-4
      rounded-full
      bg-white
      transition duration-500
      group-hover:scale-[10]
      group-hover:opacity-30"
  />
</Link>

  {/* small floating circle 1 */}
  <div className="absolute left-[12%] top-[28%] h-4 w-4 rounded-full bg-red-500/80 shadow-lg shadow-red-500/50 animate-bounce-slower" />

  {/* small floating circle 2 */}
  <div className="absolute right-[20%] bottom-[25%] h-3 w-3 rounded-full bg-red-400/80 shadow-lg shadow-red-500/50 animate-bounce-slower" />

  {/* small floating circle 3 */}
  <div className="absolute left-[25%] bottom-[18%] h-2 w-2 rounded-full bg-red-500/80 shadow-lg shadow-red-500/50 animate-pulse" />

</div>
              
              {/* text container */}
                      <div className="relative pt-20 px-8 z-20 flex flex-col items-center justufy-center text-center w-full max-w-5xl -translate-y-10">
                      <div className="flex flex-wrap items-center justify-center gap-4 font-light">
                      <button className="p-2 bg-red-500/50 backdrop-blur-lg rounded-2xl transition duration-300 hover:scale-105"> <h3 className="text-md text-white">{homepage.skill1}</h3> </button>
                      <button className=""> <h3 className="">|</h3> </button>
                      <button className="p-2 bg-red-500/50 backdrop-blur-xl rounded-2xl transition duration-300 hover:scale-105"> <h3 className="text-md text-white">{homepage.skill2}</h3> </button>
                      <button className=""> <h3 className="">|</h3> </button>
                      <button className="p-2 bg-red-500/50 backdrop-blur-xl rounded-2xl transition duration-300 hover:scale-105 transition"> <h3 className="text-md text-white">{homepage.skill3}</h3> </button>
                      
                      
                      </div>
                      
                      <h1 className="text-4xl font-black uppercase md:text-5xl pt-5 left-0">
                        {homepage.name}
                      </h1>
                      
                      <h2 className="text-2xl font-bold text-black/50 md:text-3xl pt-5">
                        {homepage.role}</h2>
                      
                      <h3 className="text-xl font-light md:text-2xl py-5">
                        {homepage.bio} 
                      </h3>
                      
                      <Link href="#projects" 
                      className="z-50 mt-6 flex flex-col items-center justify-center w-30 h-30 p-2 text-black font-light rounded-full bg-red-500/4 
                      hover:bg-white/60 animate-bounce-md hover:shadow-lg hover:animate-ease transition duration-300">
                       <h3> Scroll Down </h3>
                      <ArrowDownCircle 
                      size={40}
                      className="pt-2" />
                      
                      </Link>
                      </div>
              </section>     
        
        )}
