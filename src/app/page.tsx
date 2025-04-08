import About from "@/components/About";
import Contact from "@/components/Contact";
import DesignProcess from "@/components/designProcess";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Work from "@/components/Work";
import Image from "next/image";


export default function HomePage() {

  return (
    <>
      <Header />
      <div id="home">
        <Herosection />
      </div>
      <div>
        <Image className="vector-light" src='/images/vector.png' alt='img' width={1434} height={180} layout="responsive" />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Image className="vector-light" src='/images/vector.png' alt='img' width={1434} height={180} layout="responsive" />
      </div>
      <DesignProcess />
      <div>
        <Image className="vector-light" src='/images/vector.png' alt='img' width={1434} height={180} layout="responsive" />
      </div>
      <div id="work">
        <Work />
      </div>
      <div>
        <Image className="vector-light" src='/images/vector.png' alt='img' width={1434} height={180} layout="responsive" />
      </div>
      <Technologies />
      <div>
        <Image className="vector-light contact" src='/images/vector.png' alt='img' width={1434} height={180} layout="responsive" />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

