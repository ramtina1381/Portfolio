import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certificates />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
