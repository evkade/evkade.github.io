import "./App.css";
import Header from "./components/Header";
import Me from "./pages/Me";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main>
        <Me />
        {/*<About />
        <Skills />
        <Experience />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
