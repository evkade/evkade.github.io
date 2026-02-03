import "./App.css";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";
import Me from "./pages/me/Me";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Me />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
