import "./App.css";
import Header from "./components/Header";
import About from "./pages/about/About";
import Me from "./pages/Me";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Me />
        <About />
        {/*
        <Skills />
        <Experience />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
