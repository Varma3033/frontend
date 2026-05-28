//importing components and styles for the layout of the application
import "@/app/globals.css";
import type { Metadata } from "next";



//metadata for the application, including title and description
export const metadata: Metadata = {
  title: "Portfolio Site",
  description: "A portfolio website built with Next.js, Strapi, REST and Tailwind CSS.",
};

//layout component/function that wraps around the entire application, providing a consistent structure and styling across all pages
//export default means that this function can be used by any other file
export default function RootLayout({
  //children is a special prop object that contains the content that will be rendered inside the layout component.
  
  //within children is the page.tsx file 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang="en">
      <body className="min-h-screen">
       
        {/* main container for the application*/}
       <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          
        <main>      
            {children}
        </main>
        
       </div>
              
      </body>
    </html>
  );
}
