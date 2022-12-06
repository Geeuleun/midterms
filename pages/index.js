import Home from "../components/home";
import Navbar from "../components/Navbar";
import About from "../components/about";
import Contact from "../components/contact";




const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Contact/>
    </div>
  );
};

export default HomePage;
