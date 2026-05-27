import Image from "next/image"
import Link from "next/link"
import Footer from "@/app/components/Footer";
import {
    ArrowLeftCircle
} from "lucide-react"

async function getProjects(slug: string) {
  const projectRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`,
  {cache: "no-store"}
  );
  
  if (!projectRes.ok) return null;
const data = await projectRes.json();
console.log("Slug from URL", slug)
console.log("Strapi Result", data)

return data.data?.[0] ?? null;

}


export default async function ProjectDetailPage({params,}: 
  {
  params: Promise<{ slug: string }>;
}) {
  const {slug} = await params;
  
  const project= await getProjects(slug);

  if (!project) {
    return <div className="p-10">Project Unavailable</div>;
  }

  const images = project.carouselImages || [];

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
    
    <div className="flex-1 w-full mt-0 pt-10">
     <div className="mx-auto max-w-screen">

{/* Header */}    
      <div className="relative flex items-center justify-center text-center">
                
        <Link 
        href="/#projects" 
        className="absolute left-5 top-0 flex items-center 
        gap-2 rounded-full border border-black/10 bg-black/50
        px-3 py-2 text-sm text-white shadow-md 
        hover:bg-white/50 hover:text-black">

        <ArrowLeftCircle size={24} />
        <span className="hidden md:block">Back</span>
        </Link>
        
      <div className="mx-auto max-w-[75%] md:max-w-none">
       <p className="text-sm font-bold md:text-xl text-black/60">
          Project
        </p>
       <h1 className="mt-4 text-xl font-black uppercase md:text-3xl">
          {project.title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-bold text-black/60">
          {project.year}
          </p>
      </div>
      </div>

{/* Carousel */}
            
          <div className="mx-auto mt-10 px-5 max-w-7xl overflow-hidden">
          <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5">
          {images.map((image: any) => (
            <div
            key={image.id}
            className="relative
            h-[400px]
            w-[85vw]
            md:w-[500px]
            max-w-[700px]
            shrink-0
            snap-center
            overflow-hidden
            rounded-[1rem]
            shadow-md
            sm:h-[400px]
            md:h-[400px]"
            >
            
            <Image
            unoptimized
            sizes="(max-width: 700px) 85vw, (max-width: 1024px) 50vw, 700px"
            fill
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
            alt={project.title}
            className="object-cover transition duration-500 hover:scale-105" 
            />
            </div>  
          ))}
          </div>
          </div>   

{/* Content */}
        <div className="mt-10 mb-10 mx-auto max-w-[85vw] md:max-w-[70vw] lg:max-w-[60vw] items-center text-center">
          
          <div className="rounded-[2rem] border border-black/10 bg-white/50 p-5 md:p-10">
           
          <h2 className="text-xl md:text-2xl font-bold uppercase">
              About this project
          </h2>
          
          <p className="mx-auto mt-5 mb-5 max-w-[85vw] text-md md:text-xl">
          {project.projectDesc}
          </p>

          <div className="flex justify-center">  
          <Link href={project.githubUrl}
          target="_blank"
          className="">
          
          <p className="text-center py-3 px-5 rounded-2xl text-white bg-black/50 hover:text-black hover:bg-white/90">
           View In Github
          </p>
          
          </Link>
          </div>
          
          </div>
         
        </div>
  
    </div>
    </div>
    <Footer />
  </main>

)}