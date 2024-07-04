import './App.css';
import soccer from './assets/img/soccer.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#spinner").style.visibility = "visible";
  } else {
      document.querySelector(
        "#spinner").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};

function App() {
  return (
    <div className="App">
      <div className='soccer'>
        <img className='soccer-img' id='spinner' src={soccer} alt="ball" />
      </div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
