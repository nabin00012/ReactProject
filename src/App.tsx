import Footer from "./Footer";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Review from "./components/Review";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <br></br>
      <Features />
      <Workflow />
      <Pricing />
      <Review />
      <Footer />
    </>
  );
}

export default App;
