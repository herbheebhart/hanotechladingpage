// src/Pages/CourseDetail.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    const courseData = [
      {
        id: "1",
        title: "Frontend Web Development",
        description: "Master HTML, CSS, JavaScript and build stunning responsive websites.",
        image: "/assets/frontend.jpg",
        syllabus: [
          "Introduction to HTML & CSS",
          "JavaScript Basics",
          "React Fundamentals",
          "Responsive Design with Tailwind CSS",
        ],
        video: "https://www.youtube.com/embed/dGcsHMXbSOA", // Sample
      },
      {
        id: "2",
        title: "Graphics Design",
        description: "Learn to create logos, flyers, and social media designs using CorelDraw and Canva.",
        image: "/assets/graphics.jpg",
        syllabus: [
          "CorelDraw Basics",
          "Canva for Social Media",
          "Typography & Color",
          "Design Projects",
        ],
        video: "https://www.youtube.com/embed/5fP8WXYe6rI",
      },
    ];

    const found = courseData.find(c => c.id === id);
    setCourse(found);
  }, [id]);

  if (!course) return <p className="p-4">Loading course details...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Title & Image */}
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <img src={course.image} alt={course.title} className="w-full rounded-lg shadow mb-6" />

      {/* Description */}
      <p className="text-lg mb-6">{course.description}</p>

      {/* Syllabus */}
      <h2 className="text-2xl font-semibold mb-2">What You’ll Learn:</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        {course.syllabus.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Video Preview */}
      <div className="aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-lg"
          src={course.video}
          title="Course Preview"
          allowFullScreen
        ></iframe>
      </div>

      {/* Enroll Button */}
      <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">
        Enroll Now
      </button>
    </div>
  );
}

export default CourseDetail;
