import Image from "next/image";
import Link from "next/link";

async function getAboutPage() {
    const aboutRes = await fetch("http://localhost:1337/api/about?populate=*", {
        cache: "no-store",
    });

    const data = await aboutRes.json();
    
    console.log(data);

    return data.data;
}

export default async function About(props: any) {
    const about = await getAboutPage();
    
    return (
        
        <section
      id="about" 
      className="relative mt-0 min-h-screen flex pt-[15vh] justify-center">

        <div className="absolute inset-0 flex items-center justify-center z-1">
            <div 
             className="absolute h-70 w-70 rounded-full bg-red-500/70 blur-[200px]">
            </div>
        </div>

            <div className="w-full md:w-1/2">
                <img
                key={about.id}
                src={`http://localhost:1337${about.profilepic.url}`}
                alt={about.name}
                className="object-contain w-full h-[250px] rounded-lg mb-4 transition duration-300 hover:scale-105" />
            </div>
            
            <div className="w-full flex flex-col items-center md:w-1/2 md:pl-[2em] md:items-start">
            
             <h2 className="text-2xl font-bold">
                {about.name}
             </h2>
            
             <p className="mt-2 text-black">
                {about.location}
             </p>
            
             <p className="mt-4 text-black">
                {about.role}
             </p>
        
             <p className="mt-4 text-black">
                {about.bio}
             </p>

            </div>

            </section>
        )}
