import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import About from "@/sections/About/About";
import Contacts from "@/sections/Contacts/Contacts";
import Hero from "@/sections/Hero/Hero";
import Career from '@/sections/Career/Career';
import Gallery from '@/sections/Gallery/Gallery';


export default function Home() {
  return (
    <main >
      <div className="">
        <Hero/>
        <About/>
        <Career/>
        <Gallery/>
        <Contacts/>
        <ToastContainer autoClose={1000}/>


      </div>
    </main>
  );
}
