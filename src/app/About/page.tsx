import Image from "next/image";

async function getData(url: string): Promise<any | null> {
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Fetch failed:", res.status, url);
    return null;
  }

  const text = await res.text();

  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Invalid JSON:", error);
    return null;
  }
}

async function getAboutPage(): Promise<any | null> {
  const data = await getData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about?populate=*`
  );

  console.log("About Data:", data);

  return data?.data ?? null;
}

export default async function About() {
    const about = await getAboutPage();
    
    return (
        
        <section
      id="about" 
      className="relative mt-0 min-h-screen flex pt-30 justify-center">
       
        <div className="z-30">
            <div className="flex items-center justify-center w-full pb-5">
            <div className="relative h-[30vw] w-[30vw] max-h-[300px] max-w-[300px] rounded-full bg-white">  
                <Image
                unoptimized
                sizes="(max-width: 768px) 180px, 300px"
                fill
                key={about?.id}
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${about?.profilepic.url}`}
                alt={about?.name}
                className="object-cover rounded-full transition duration-300 hover:scale-105" 
                />   
            </div>
            </div>
            
            <div className="w-full flex flex-col items-center justify-center">
            
            <div className="">
             <h2 className="text-4xl font-black uppercase md:text-5xl">
                {about?.name}
             </h2>
            </div>
            
            <div className="flex flex-row items-center justify-center gap-6 py-4">
            <div className="py-3 px-4 bg-red-500/50 backdrop-blur-lg rounded-2xl transition duration-300 hover:scale-105">                  
             <h3 className="text-lg text-white">
                {about?.role}
             </h3>
            </div>

            <div className="p-3 bg-red-500/50 backdrop-blur-lg rounded-2xl transition duration-300 hover:scale-105">                  
             <h3 className="text-lg text-white">
                {about?.location}
             </h3>
            </div>
            </div>

            <div className="w-[75vw] max-w-[800px] flex justify-center items-center">
             <p className="mt-4 text-center text-md md:text-lg">
                {about?.bio}
             </p>
            </div>
            
            </div>
            
            </div>

            </section>
            
        )}
