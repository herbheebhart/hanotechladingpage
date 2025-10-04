// src/App.tsx
// import "./App.css"
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Course from "./Pages/Course";
import CourseDetail from "./Pages/CourseDetails";
import Footer from "./Components/Footer";
import Question from "./Pages/Question";



function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/question" element={<Question/>}/>
        </Routes>
      </div>
      <Footer />
    </>
    
  );
}

export default App;

