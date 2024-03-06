
import "./globals.css";
import About from "@/sections/About/About";
import Hero from "@/sections/Hero/Hero";
import Services from "@/sections/Services/Services";


export default function Home() {
  return (
    <main >
      <div className="">
        <Hero/>
        <About/>
        <Services/>
       

      </div>
    </main>
  );
}
