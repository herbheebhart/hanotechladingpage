// src/components/CourseList.tsx
import { Link } from "react-router-dom";
import { courses } from "../data/Courses";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel";
import { Card, CardContent, CardFooter } from "../Components/ui/card";
import { Button } from "../Components/ui/button";

function CourseList() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Our Popular Courses
      </h2>

      <Carousel className="w-full max-w-[70%] mx-auto">
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

                <div className="flex flex-row">
                  <CardFooter className="p-4">
                    <Link to= {`/course/${course.id}`}>
                      <Button className="w-full">View Intro</Button>
                    </Link>
                  </CardFooter>
                  <CardFooter className="p-4">
                    <Link to="/contact">
                      <Button className="w-full">Book a Service</Button>
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="text-gray-500 hover:text-gray-800" />
        <CarouselNext className="text-gray-500 hover:text-gray-800" />
      </Carousel>
    </section>
  );
}

export default CourseList;
