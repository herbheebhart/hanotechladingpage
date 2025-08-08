import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StudentComment {
  id: number;
  name: string;
  role: string;
  message: string;
}

const comments: StudentComment[] = [
  {
    id: 1,
    name: "Amina Yusuf",
    role: "Frontend Student",
    message: "The lessons are very clear and easy to follow. Thank you, Hanotech!",
  },
  {
    id: 2,
    name: "Kabir Musa",
    role: "Tech for Kids",
    message: "I love the animations! I'm learning so much and it's fun too!",
  },
  {
    id: 3,
    name: "Zainab Abdul",
    role: "UI/UX Beginner",
    message: "The teaching style is friendly and practical. I'm happy I joined.",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function StudentCommentCarousel() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setCurrent([
      (current + newDirection + comments.length) % comments.length,
      newDirection,
    ]);
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-45% to-sky-300 py-16 px-4 md:px-10 overflow-hidden">

      {/* Floating Icon */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
        className="absolute top-6 right-6 z-10"
      >
        <div className="p-3 bg-orange-500 rounded-full shadow-xl text-white animate-pulse">
          <MessageSquare size={28} />
        </div>
      </motion.div>

      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-10">
        What Our Students Say
      </h2>

      <div className="relative max-w-3xl mx-auto px-4">
        <AnimatePresence custom={direction}>
          <motion.div
        whileHover={{scale: 1.05}}
            key={comments[current].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 shadow-2xl text-center"
          >
            <h3 className="text-lg font-semibold text-sky-600">
              {comments[current].name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {comments[current].role}
            </p>
            <p className="text-gray-700 text-base">
              "{comments[current].message}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
         {/* Navigation */}
        <div className="flex justify-between items-center -mt-20 px-20">
          <button
            onClick={() => paginate(-1)}
            className="p-2 rounded-full hover:bg-orange-200 transition"
          >
            <ChevronLeft className="text-sky-600" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-2 rounded-full hover:bg-orange-200 transition"
          >
            <ChevronRight className="text-sky-600" />
          </button>
        </div>
    </section>
  );
}
