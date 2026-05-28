//import next.js components
import Link from "next/link";
import Image from "next/image"

//create an async function to retrieve all data from the projects page in strapi
async function getAllProjects() {

    //sends fetch request to the strapi API endpoint
    // process.env.NEXT_PUBLIC_STRAPI_URL gets the backend URL from strapi
    // /api/projects accesses the projects in strapi
    // ?populate=* includes media uploaded in strapi such as images
    const projectsRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`,
    
    // this is important making sure strapi content appears immediately when updated   
    { cache: "no-store" });
    

    // this checks if the request failed and if it does, return null
if (!projectsRes.ok) return null;

// Converts the API response into JSON format so javascript can use the data from it
const data = await projectsRes.json();

//check if data is fetching correctly
    console.log(data);
//returns the data from projects
    return data.data;
}


async function projectPageTitle() {
    const projectpageRes = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/project-page-info?populate=*`,
         { cache: "no-store" });
   
         if (!projectpageRes.ok) return null;
    const data = await projectpageRes.json();
    
    console.log(data);

    return data.data;
}

//creating and allowing the exporting of react component so other files can use it
//async allows the component to fetch data from strapi before rendering, so the page actually shows

export default async function Projects() {
//calling the functions above to retrieve all project page data from strapi
    const projects = await getAllProjects();
    const projectpage = await projectPageTitle();

//returning the frontend structure that I am designing
    return (
//projects section
     <section id="projects" 
        className="min-h-screen scroll-mt-20 px-5 py-10 md:px-10">

       <div className="mx-auto max-w-7xl">
        
        <div className="mb-10 text-center"> 

{/*allows strapi content to be displayed*/}
{/*so projectpage?.projectPageDesc returns whatever is written in Strapi, meaning anyone can change it without looking at this code*/}
{/* || allows hardcoded text if no strapi content is found*/}
        <p className="pb-4 text-black/50">{projectpage?.projectPageDesc || "Selected Work"}</p>
        <h1 className="text-4xl font-black uppercase md:text-5xl">{projectpage?.projectPageTitle || "Projects"}</h1>
        </div>

        <div 
        className="space-y-10 md:space-y-20" >

{/*this allows hardcoded text if no strapi content is found*/}
        {projects.map((project: any, index: number) => {
            console.log("Project Slug", project.slug);
        return (
            <div 
            key={project.id}
            className={
            `group flex flex-col gap-2 rounded-[2rem] border border-black/10
            bg-black/5 backdrop-blur-xl p-5 shadow-sm
            md:items-center md:gap-4 md:p-8
            ${ index % 2 === 0 
//when index is even, layout is normal, when index is odd, layout is reversed
//every other project is reversed to create a zigzag layout (chatgpt helped me figure this out)         
            ? "md:flex-row-reverse"
            : "md:flex-row"}
            `} > 

{/*clickable image using next.js link component, which links to the more info page*/}
            <Link 
                className="relative h-[375px] w-full overflow-hidden rounded-[2rem] md:h-[500px] md:w-1/2"
                //dynamic route which uses the corresponding project slug seen in strapi, so page doesnt have to reload everytime the link is clicked
                href={`/projects/${project.slug?.trim()}`}>
                
                {/*next.js image component*/}
                <Image
                unoptimized
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                
                // Checks if image URL is already absolute
                // If not, adds the Strapi backend URL  (chatgpt helped figure this out, images werent showing)    
                src={project.image.url.startsWith("http")
                    ? project.image.url
                    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${project.image.url}`}
                alt={project.title}
                className="object-cover transition duration-500 group-hover:scale-105"
                />

            </Link>
        
            
            <div className="w-full flex flex-col items-center md:w-1/2 md:pl-10 md:items-start">
            
             <h2 className="text-2xl md:text-3xl font-bold uppercase mt-2 md:mt-0">
                {project.title}
             </h2>
            
             <p className="mt-2 md:mt-3 text-black/50 text-xl">
                {project.year}
             </p>
            
             <p className="mt-2 md:mt-4 text-xl text-center md:text-left">
                {project.description}
             </p>
{/*clickable button using next.js link component, which links to the more info page*/}
            <Link
            href={`/projects/${project.slug?.trim()}`}
            className="my-4 md:my-10 bg-black/60 text-white rounded-[3rem]
            hover:text-black hover:bg-white/60 hover:animate-ease transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
             <p className="text-xl px-4 py-2">
                {project.viewMore}
             </p>
             </Link>

            </div>
            </div>
        )
        })}
        
        </div>
        </div>
     </section>
   
    );
}