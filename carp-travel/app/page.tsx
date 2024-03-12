import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import About from "@/sections/About/About";
import Contacts from "@/sections/Contacts/Contacts";
import Hero from "@/sections/Hero/Hero";
import Career from '@/sections/Career/Career';
import Gallery from '@/sections/Gallery/Gallery';
import Services from '@/sections/Services/Services';


export default function Home() {
  return (
    <main >
      <div className="">
        <Hero/>
        <About/>
        <Services/>
        <Career/>
        <Gallery/>
        <Contacts/>
        <ToastContainer autoClose={1000}/>


      </div>
    </main>
  );
}
