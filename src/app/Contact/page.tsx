import Link from "next/link";
import {
    Mail,
    ArrowRightCircle
} from "lucide-react"

import {
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa"


async function getContactPage() {
    const contactRes = await fetch("http://localhost:1337/api/contact?populate=*", {
        cache: "no-store",
    });

    const data = await contactRes.json();
    
    console.log(data);

    return data.data;
}

export default async function Contact() {
    const contact = await getContactPage();
    
    return (
        
        <section
         id="contact" 
         className="relative min-h-screen pt-[15vh] px-6 mt-0 ">

        <div className="flex flex-col items-center text-center gap-10">

{/* heading */}
        <div>
            <h1 className="text-4xl font-black uppercase md:text-5xl">{contact.contactTitle}</h1>
            <h2 className="mt-4 text-xl text-black/60 md:text-2xl">{contact.contactDescription}</h2>
                       
        </div>

{/* Contact Links */}
        <div className="grid gap-6 w-full max-w-3xl">
                        
            <Link href={`mailto:${contact.email}`}
            className="h-30 group flex items-center justify-between rounded-4xl border border-black/10 bg-white/80 shadow-sm backdrop-blur-xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                
                <div className="flex items-center gap-5 flex-1">
                
                <div className="flex items-center justify-center rounded-full">       
                   <Mail 
                   size={36} /> 
                </div>

                <div className="min-w-0">
                <h2 className="truncate">
                    {contact.emailTitle} {contact.email}
                </h2>
                </div>

                </div>
                
                <ArrowRightCircle 
                size={40}
                className="flex-shrink-0" 
                />
                
            </Link>     
            
            <Link href={contact.social1URL}
            className="h-30 group flex items-center justify-between rounded-4xl border border-black/10 bg-white/80 shadow-sm p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                
                <div className="flex items-center gap-5">
                
                <div className="flex items-center justify-center rounded-full">
                    <FaInstagram size={40} /> 
                </div>
                
                <h2>       
                    {contact.social1} {contact.social1username}
                </h2>
                
                </div>
                
                
                <ArrowRightCircle size={40} />
                
            </Link>

            <Link href={contact.social2URL}
            className="h-30 group flex items-center justify-between rounded-4xl border border-black/10 bg-white/80 shadow-sm p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                
                <div className="flex items-center gap-5">
                
                <div className="flex items-center justify-center rounded-full">
                    <FaLinkedin size={40} />
                </div>
                
                <h2>       
                    {contact.social2} {contact.social2username}
                </h2>
                
                </div>
                
                <ArrowRightCircle size={40} />
                
            </Link>

            </div>

            </div>
            </section>
        )}
