import './App.css'
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import Projects from "../Projects/Projects.tsx";
import About from "../About/About.tsx";
import Contact from "../Contact/Contact.tsx";

function App() {

  return (
    <div className="app">
      <Header/>
        <main className="section main">
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
    </div>
  )
}

export default App
