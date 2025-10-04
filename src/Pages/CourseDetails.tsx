// src/pages/CourseDetail.tsx
import { useParams } from "react-router-dom";
import { courses } from "../data/Courses";
import Tabs from "../Components/Tab"; // import your tab component

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <h2 className="text-center mt-10 text-red-500">
        Course not found ❌
      </h2>
    );
  }

  // Setup course details in tab format
  const courseTabs = [
    {
      label: "Description",
      content: <p className="text-gray-700">{course.description}</p>,
    },
    {
      label: "Requirements",
      content: (
        <ul className="list-disc list-inside text-gray-700">
          {course.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Outline",
      content: (
        <ol className="list-decimal list-inside text-gray-700">
          {course.outline.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ),
    },
    {
      label: "Info",
      content: (
        <div className="space-y-1 text-gray-700">
          <p><strong>Duration:</strong> {course.info.duration}</p>
          <p><strong>Mode:</strong> {course.info.mode}</p>
          <p>
            <strong>Certificate:</strong>{" "}
            {course.info.certificate ? "Yes" : "No"}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 mt-15">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
        {course.title}
      </h1>

      <img
        src={course.image}
        alt={course.title}
        className="w-full h-72 object-cover rounded-xl mb-8 shadow-lg"
      />

      {/* Tabs for course info */}
      <Tabs tabs={courseTabs} />
    </div>
  );
}

export default CourseDetails;
