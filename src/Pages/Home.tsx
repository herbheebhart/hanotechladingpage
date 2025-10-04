import { Link } from "react-router-dom";
import Event from "../Components/Events";
import Comment from "../Components/Comments"
import Image from "../assets/img2.webp";
import Python from "../assets/img4.avif";
import JavaScript from "../assets/javascript.avif";
import network from "../assets/network.avif";
import userinterface from "../assets/userinterface.avif"
import graphics from "../assets/graphics.avif"
import siteEngineer from "../assets/img3.jpg"
import { Card, CardContent, CardFooter } from "../Components/ui/card";
import { Button } from '../Components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel";
import { motion } from "framer-motion";





const Home = () => {

 const courses = [

  {
    id : 1,
    title: "Web Development",
    image: JavaScript,
    description:
      "Learn to build modern websites with HTML, CSS, JavaScript, and React.",
  },
    {
    id : 2,
    title: "Quantity surveying consultancy services",
    image: siteEngineer,
    description:"Preparation of contract document,value Engineering and project management"
  },
  {
    id:3,
    title: "Graphic Design",
    image: graphics,
    description:
      "Master design principles and tools like Photoshop, Illustrator, and Figma.",
  },
  {
    id:4,
    title: "Python",
    image: Python,
    description:
      "Learn python for Web developmet from basics to Advance",
  },
    {
        id:5,
    title: "UI/UX",
    image: userinterface,
    description:
      "Learn wireframe and strcture from expert from begining to advance",
  },
    {
       id: 6,
    title: "Networking",
    image: network,
    description:
      "Learn Netwoking from expert from beginning to advance",
  },
  

];

  return (
    <div>
     <section className="relative h-[70vh] flex items-center overflow-hidden w-full pl-7 pt-10">
      {/* Background Image Layer */}
      <img
        src={Image}
        alt="Background"                                     
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Text Content */}
      <div className="relative z-10 text-white pl-6 md:pl-12 max-w-[800px]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Building Tech & Dreams
        </h1>
        <p className="text-lg md:text-[20px] max-w-xl">
          Hanotech blends modern technology with practical construction to shape a smarter future.
        </p>

           {/* Call to Action Button */}
        <Link
          to="/contact"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 mt-5"
        >
          Get in Touch
        </Link>
      </div>
      
    </section>
     {/* Courses Section */}
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Our packages
      </h2>

      <Carousel className="w-full max-w-[70%] mx-auto" >
        <CarouselContent className="-ml-4">
          {courses.map((course) => (
            <CarouselItem
              key={course.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {course.description}
                  </p>
                </CardContent>

                <div className="flex flex-row ">
                  <CardFooter className="p-4">
                  <Link to={`/course/${course.id}`}>
                      <Button className="w-full">View Course</Button>
                  </Link>
              
                </CardFooter>
                <CardFooter className="p-4">
                  <Link to={`/course/${course.id}`}>
                      <Button className="w-full">Book a service</Button>
                  </Link>
              
                </CardFooter>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="text-gray-500 hover:text-gray-800" />
        <CarouselNext className="text-gray-500 hover:text-gray-800" />
      </Carousel>
    </section>
    <Event/>

     <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Why Choose Us? </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 shadow-lg"
        >
          <Card className="p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Expert professionals and Instructors</h3>
            <p className="text-gray-600">
              Services from seasoned costruction and IT experts and Learning from industry professionals with years of experience.
            </p>
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }} className="p-6 shadow-lg">
            <Card className="p-6 shadow-lg"> 
          <h3 className="text-xl font-semibold mb-2">Hands-On Learning and scheduling </h3>
          <p className="text-gray-600">
            Practical projects and real-world applications to enhance your skills, with tailored scheduling matching your preference.
          </p>
        </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }} className="p-6 shadow-lg">
               <Card className="p-6 shadow-lg">
               <h3 className="text-xl font-semibold mb-2">latest construction trends</h3>
                <p className="text-gray-600">
                 with modern design, updated pricing and multitude discharge of construction methodology offered
                </p>
                </Card>
          </motion.div>
     
      </div>
    </section>
    <Comment/>
      </div>

 
 
    
  );
};

export default Home;


