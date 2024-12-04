import Navbar from "./Navbar";
import Hero from "./Hero";
import "./App.css";
import Services from "./Services";
import Team from "./Team";
import Pricing from "./Pricing";
import ContactForm from "./ContactForm";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Team/>
      <Pricing/>
      <ContactForm/>
    </div>
  );
};

export default App;
