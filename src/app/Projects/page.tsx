import Image from "next/image";
import Link from "next/link";


async function getAllProjects() {
    const projectsRes = await fetch("http://localhost:1337/api/projects?populate=*", {
        cache: "no-store",
    });

    const data = await projectsRes.json();
    
    console.log(data);

    return data.data;
}

export default async function Projects() {
    const projects = await getAllProjects();
    return (
     
     <section id="projects" 
        className="mt-0 min-h-screen pt-[13vh]">
       
       <div className="mx-auto max-w-7xl">
        
        <div className="mb-[2rem] text-center"> 
        <h1 className="text-2xl font-bold">Projects</h1>
        </div>

        <div className="grid 
        pl-[2em]
        pr-[2em]
        grid-cols-1 
        gap-[4em]
        " >
            
        {projects.map((project: any, index: number) => (
            <div 
            key={project.id}
            className="rounded-lg">
            
            <Link href={`/projects/${project.slug}`}
//every other project is reversed to create a zigzag layout
            className={
            `flex flex-col items-center
                ${ index % 2 === 0 
//when index is even, layout is normal, when index is odd, layout is reversed                 
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                 }
                `} >

            <div className="w-full md:w-1/2">
                <img
                key={project.id}
                src={`http://localhost:1337${project.image.url}`}
                alt={project.title}
                className="object-contain w-full h-[250px] rounded-lg mb-4 transition duration-300 hover:scale-105" />
            </div>
            
            <div className="w-full flex flex-col items-center md:w-1/2 md:pl-[2em] md:items-start">
            
             <h2 className="text-2xl font-bold">
                {project.title}
             </h2>
            
             <p className="mt-2 text-black">
                {project.year}
             </p>
            
             <p className="mt-4 text-black">
                {project.description}
             </p>
        
             <p className="mt-4 text-black">
                {project.githubUrl}
             </p>

            </div>

            </Link>

            </div>
        ))}
        
        </div>
        </div>
     </section>
   
    );
}