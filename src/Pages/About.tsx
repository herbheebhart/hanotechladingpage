import { Link } from "react-router-dom";
import HeroImage from "../assets/img2.webp";
import TeamImage from "../assets/Inst1.jpeg";
import TeamImage2 from "../assets/Inst2.jpeg";
import TeamImage3 from "../assets/Inst3.jpeg";
import Image from "../assets/student6.jpg";
import Image2 from "../assets/student5.jpg";
import { Card } from "../Components/ui/card";
import { Instagram, Mail, Phone } from "lucide-react";

function About() {
  const team = [
    {
      name: "Alimi Abdqadr Adewale",
      role: "Project Manager (Construction)",
      img: TeamImage2,
    },
    {
      name: "Solahudeen Habibah",
      role: "Web Developer",
      img: TeamImage,
    },
    {
      name: "AbdKareen olukunle",
      role: "Cyber Security & Networking Expert",
      img: TeamImage3,
    },
    {
      name: "Muhiydeen",
      role: "Python Developer",
      img: TeamImage,
    },
  ];

  const sections = [
    {
      title: "Our Mission",
      text: "To provide high-quality construction and IT services that meet client needs while maintaining integrity and professionalism.",
      img: Image,
      reverse: false,
    },
    {
      title: "Our Vision",
      text: "To be a leading provider of innovative, sustainable, and client-focused solutions in both the construction and technology industries.",
      img: Image2,
      reverse: true,
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden w-full pl-7 pt-10">
        <img
          src={HeroImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 text-white pl-6 md:pl-12 max-w-[800px]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Hanotech</h1>
          <p className="text-lg md:text-[20px] max-w-xl">
            Delivering excellence in Construction & IT solutions
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 mt-5"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-w-6xl mx-auto px-6 space-y-12">
        {sections.map((sec, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              sec.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                {sec.title}
              </h2>
              <p className="text-gray-700">{sec.text}</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <img src={sec.img} alt={sec.title} className="rounded-md" />
            </div>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-orange-500 mb-28">
            Meet Our Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <Card
          key={index}
          className=" rounded-2xl shadow-lg hover:shadow-2xl transition duration-300
                     bg-white/20 backdrop-blur-md border border-white/30"
        >
          {/* Decorative Top Shape */}
          <div
            className="h-32 bg-orange-500 relative"
            style={{
              clipPath: "ellipse(100% 100% at 50% 0%)",
            }}
          ></div>

          {/* Avatar with clip-path */}
          <div className="flex justify-center -mt-20 relative z-10">
            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 object-cover border-4 border-sky-600 shadow-md"
              style={{
                clipPath: "circle(50% at 50% 50%)",
              }}
            />
          </div>

          {/* Text */}
          <h3 className="text-lg font-semibold text-gray-900 mt-4">
            {member.name}
          </h3>
          <p className="text-sm text-gray-700">{member.role}</p>
            <div className="flex justify-center gap-5 text-sky-600 pb-7">
          <a href="https://instagram.com" target="_blank">
            <Instagram />
          </a>
          <a href="mailto:email@example.com">
            <Mail />
          </a>
          <a href="tel:+2349076573487">
            <Phone />
          </a>
        </div>
        </Card>
      ))}
    </div>
        </div>
      </section>
    </div>
  );
}

export default About;
