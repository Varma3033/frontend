import Image from "next/image";
import Link from "next/link";

async function getContactPage() {
    const contactRes = await fetch("http://localhost:1337/api/contact?populate=*", {
        cache: "no-store",
    });

    const data = await contactRes.json();
    
    console.log(data);

    return data.data;
}

export default async function Contact(props: any) {
    const contact = await getContactPage();
    
    return (
        
        <section
      id="contact" 
      className="relative mt-0 min-h-screen flex pt-[15vh] justify-center">

        <div className="absolute inset-0 flex items-center justify-center z-1">
            <div 
             className="absolute h-70 w-70 rounded-full bg-red-500/70 blur-[200px]">
            </div>
        </div>

            <div className="w-full md:w-1/2">
                <img
                key={contact.id}
                src={`http://localhost:1337${contact.icons1}`}
                alt={contact.email}
                className="object-contain w-full h-[250px] rounded-lg mb-4 transition duration-300 hover:scale-105" />
            </div>
            
            <div className="w-full flex flex-col items-center md:w-1/2 md:pl-[2em] md:items-start">
                {contact.email}
            </div>

            <div className="w-full md:w-1/2">
                <img
                key={contact.id}
                src={`http://localhost:1337${contact.icons2}`}
                alt={contact.phone}
                className="object-contain w-full h-[250px] rounded-lg mb-4 transition duration-300 hover:scale-105" />
            </div>
            
            <div className="w-full flex flex-col items-center md:w-1/2 md:pl-[2em] md:items-start">
                {contact.phone}
            </div>

            <div className="w-full md:w-1/2">
                <img
                key={contact.id}
                src={`http://localhost:1337${contact.icons3}`}
                alt={contact.social1URL}
                className="object-contain w-full h-[250px] rounded-lg mb-4 transition duration-300 hover:scale-105" />
            </div>
            
            <div className="w-full flex flex-col items-center md:w-1/2 md:pl-[2em] md:items-start">
                {contact.social1URL}
            </div>

            <div className="w-full md:w-1/2">
                <img
                key={contact.id}
                src={`http://localhost:1337${contact.icons4}`}
                alt={contact.social2URL}
                className="object-contain w-full h-[250px] rounded-lg mb-4 transition duration-300 hover:scale-105" />
            </div>
            
            <div className="w-full flex flex-col items-center md:w-1/2 md:pl-[2em] md:items-start">
                {contact.social2URL}
            </div>

            </section>
        )}
