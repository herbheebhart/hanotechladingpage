import JavaScript from "../assets/javascript.avif";
import Python from "../assets/img4.avif";
import graphics from "../assets/graphics.avif";
import network from "../assets/network.avif";
import userinterface from "../assets/userinterface.avif";
import siteEngineer from "../assets/img3.jpg";

export interface CourseType {
  id: number;
  title: string;
  image: string;
  description: string;
  requirements: string[];
  outline: string[];
  info: {
    duration: string;
    mode: string;
    certificate: boolean;
  };
}

export const courses: CourseType[] = [
  {
    id: 1,
    title: "Web Development",
    image: JavaScript,
    description:
      "Learn to build modern websites with HTML, CSS, JavaScript, and React.",
    requirements: ["Basic computer knowledge", "Laptop + Internet", "Willingness to learn"],
    outline: [
      "Introduction to Web Development",
      "Introduction to HTML",
      "introduction to CSS",
      "HTML and CSS project",
      "Mini Project: Portfolio Website",
      "Introduction to Javascript",
      "Standard project: Project you wish to build"
    ],
    info: { duration: "8 Weeks", mode: "Online/Physical", certificate: true },
  },
  {
    id: 2,
    title: "Quantity Surveying Consultancy",
    image: siteEngineer,
    description:
      "Preparation of contract documents, value engineering and project management.",
    requirements: ["Background in construction preferred", "Laptop"],
    outline: [
      "Introduction to QS",
      "Contract Documentation",
      "Cost Estimation",
      "Value Engineering",
      "Project Management Basics",
    ],
    info: { duration: "8 Weeks", mode: "Physical", certificate: true },
  },
  {
    id: 3,
    title: "Graphic Design",
    image: graphics,
    description:
      "Master design principles and tools like Photoshop, Illustrator, and Figma.",
    requirements: ["Laptop", "Creativity", "Basic computer skills"],
    outline: [
      "Principles of Design",
      "Typography & Colors",
      "Photoshop Basics",
      "Illustrator for Vector Graphics",
      "UI Design with Figma",
    ],
    info: { duration: "6 Weeks", mode: "Online/Physical", certificate: true },
  },
  {
    id: 4,
    title: "Python",
    image: Python,
    description: "Learn Python for web development from basics to advanced.",
    requirements: ["Laptop", "Basic programming knowledge"],
    outline: [
      "Python Basics",
      "Data Structures",
      "OOP with Python",
      "Flask/Django Basics",
      "Mini Project",
    ],
    info: { duration: "6 Weeks", mode: "Online/Physical", certificate: true },
  },
  {
    id: 5,
    title: "UI/UX",
    image: userinterface,
    description: "Learn wireframing and structure from beginner to advanced.",
    requirements: ["Laptop", "Creativity", "Interest in design"],
    outline: [
      "Intro to UI/UX",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Testing & Feedback",
    ],
    info: { duration: "6 Weeks", mode: "Online/Physical", certificate: true },
  },
  {
    id: 6,
    title: "Networking",
    image: network,
    description: "Learn Networking from beginner to advanced.",
    requirements: ["Laptop", "Basic IT knowledge"],
    outline: [
      "Networking Fundamentals",
      "IP Addressing",
      "Routing & Switching",
      "Network Security",
      "Hands-on Lab Practice",
    ],
    info: { duration: "8 Weeks", mode: "Physical", certificate: true },
  },
];
