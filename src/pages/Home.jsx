import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FeaturedCategories from "../components/FeaturedCategory";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";

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
      <Categories/>
      <Testimonials/>
      <Contact/>
      <Footer />
    </>
  );
}

export default Home;
