import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Process from "../components/home/Process";
import About from "../components/home/About";
import Features from "../components/home/Features";
import Statistics from "../components/home/Statistics";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Process />
      <Statistics />
    </>
  );
}

export default Home;