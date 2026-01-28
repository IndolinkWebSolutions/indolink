import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FeaturedCategories from "../components/FeaturedCategory";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedCategories />
      <Footer />
    </>
  );
}

export default Home;
