
import "./globals.css";
import About from "@/sections/About/About";
import Contacts from "@/sections/Contacts/Contacts";
import Hero from "@/sections/Hero/Hero";


export default function Home() {
  return (
    <main >
      <div className="">
        <Hero/>
        <About/>
        <Contacts/>
       

      </div>
    </main>
  );
}
