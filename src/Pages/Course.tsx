// import { Link } from "react-router-dom"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../Components/ui/carousel";
// import { Card, CardContent, CardFooter } from "../Components/ui/card";
// import { Button } from "../Components/ui/button";
// import Image from "../assets/img2.webp";
// import Python from "../assets/img4.avif";
// import JavaScript from "../assets/javascript.avif";
// import network from "../assets/network.avif";
// import userinterface from "../assets/userinterface.avif"
// import graphics from "../assets/graphics.avif"
// import siteEngineer from "../assets/img3.jpg"

// function Course() {
//    const courses = [

//   {
//     id : 1,
//     title: "Web Development",
//     image: JavaScript,
//     description:
//       "Learn to build modern websites with HTML, CSS, JavaScript, and React.",
//   },
//     {
//     id : 2,
//     title: "Quantity surveying consultancy services",
//     image: siteEngineer,
//     description:"Preparation of contract document,value Engineering and project management"
//   },
//   {
//     id:3,
//     title: "Graphic Design",
//     image: graphics,
//     description:
//       "Master design principles and tools like Photoshop, Illustrator, and Figma.",
//   },
//   {
//     id:4,
//     title: "Python",
//     image: Python,
//     description:
//       "Learn python for Web developmet from basics to Advance",
//   },
//     {
//         id:5,
//     title: "UI/UX",
//     image: userinterface,
//     description:
//       "Learn wireframe and strcture from expert from begining to advance",
//   },
//     {
//        id: 6,
//     title: "Networking",
//     image: network,
//     description:
//       "Learn Netwoking from expert from beginning to advance",
//   },
  

// ];

//   return (
//     <div>
//          {/* Header */}
//      <section className="relative h-[70vh] flex items-center overflow-hidden w-full pl-7 pt-10">
//       {/* Background Image Layer */}
//       <img
//         src={Image}
//         alt="Background"                                     
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/80" />

//       {/* Text Content */}
//       <div className="relative z-10 text-white pl-6 md:pl-12 max-w-[800px]">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           Building Tech & Dreams
//         </h1>
//         <p className="text-lg md:text-[20px] max-w-xl">
//           Hanotech blends modern technology with practical construction to shape a smarter future.
//         </p>

//            {/* Call to Action Button */}
//         <Link
//           to="/contact"
//           className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 mt-5"
//         >
//           Get in Touch
//         </Link>
//       </div>
      
//     </section>
//       <section className="py-12 px-4 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
//         Our popular courses
//       </h2>

//       <Carousel className="w-full max-w-[70%] mx-auto" >
//         <CarouselContent className="-ml-4">
//           {courses.map((course) => (
//             <CarouselItem
//               key={course.id}
//               className="pl-4 md:basis-1/2 lg:basis-1/3"
//             >
//               <Card className="rounded-2xl overflow-hidden shadow-md">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <CardContent className="p-4">
//                   <h3 className="text-xl font-semibold">{course.title}</h3>
//                   <p className="text-sm text-gray-600 mt-2">
//                     {course.description}
//                   </p>
//                 </CardContent>

//                 <div className="flex flex-row ">
//                   <CardFooter className="p-4">
//                   <Link to={`/course/${course.id}`}>
//                       <Button className="w-full">View Course</Button>
//                   </Link>
              
//                 </CardFooter>
//                 <CardFooter className="p-4">
//                   <Link to={`/course/${course.id}`}>
//                       <Button className="w-full">Book a service</Button>
//                   </Link>
              
//                 </CardFooter>
//                 </div>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {/* Navigation */}
//         <CarouselPrevious className="text-gray-500 hover:text-gray-800" />
//         <CarouselNext className="text-gray-500 hover:text-gray-800" />
//       </Carousel>
//     </section>
//     </div>
//   )
// }

// export default Course

// src/pages/Course.tsx
import { Link } from "react-router-dom";
import Image from "../assets/img2.webp";
import CourseList from "../Components/CourseList";

function Course() {
  return (
    <div>
      {/* Header Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden w-full pl-7 pt-10">
        <img
          src={Image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 text-white pl-6 md:pl-12 max-w-[800px]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Building Tech & Dreams
          </h1>
          <p className="text-lg md:text-[20px] max-w-xl">
            Hanotech blends modern technology with practical construction to
            shape a smarter future.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 mt-5"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Course List Section */}
      <CourseList />
    </div>
  );
}

export default Course;

