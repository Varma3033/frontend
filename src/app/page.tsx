export default function Home() {
  return (
    <main className="scroll-smooth">
      <section 
      id="home" 
      className="relative mt-0 min-h-screen flex pt-[15vh] justify-center"
      >   
{/* circle */}        
         <div className="absolute inset-0 flex items-center justify-center z-1 overflow-hidden">
            <div 
             className="absolute h-64 w-64 rounded-full bg-red-500/70 blur-[100px]">
            </div>
          </div>
{/* text container */}
        <div className="z-5 w-[100vw] h-[100vh] flex flex-col items-center justify-center rounded-xl ">
        <h1 className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum turpis felis. In hac habitasse platea dictumst. Donec molestie nibh vel est varius dignissim. In finibus risus arcu, sed pellentesque nisl tempus nec. Maecenas ac pretium dolor, a congue ipsum. Donec vel sagittis urna, nec ultricies risus. Proin blandit ornare diam.</h1>
        </div>
      </section>

      <section 
      id="my-projects" 
      className="min-h-screen">
        <div className="">
        <h1>My Projects</h1>
        </div>
      </section>

      <section 
      id="about-me" 
      className="min-h-screen">
        <div className="">
        <h1>About Me</h1>
        </div>
      </section>

      <section 
      id="contact-me" 
      className="min-h-screen">
        <div className="">
        <h1>Contact Me</h1>
        </div>
      </section>

    </main>
  )
}
