import React, { useState } from "react";
import { PlusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Image from "../assets/img2.webp"

// Type for FAQ item
interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "You can build upon an existing idea, but most of the work should be done during the hackathon to keep it fair.",
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer:
      "Mentors and organizers will be available to support you with technical and non-technical challenges.",
  },
  {
    question: "What happens if I don’t have an idea for a project?",
    answer:
      "Don’t worry! You can join a team that has an idea or brainstorm with others at the start of the hackathon.",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer:
      "You can do either. Many participants form teams during the event if they come solo.",
  },
  {
    question: "What happens after the hackathon ends?",
    answer:
      "Projects will be judged, winners announced, and you’ll have the opportunity to keep working on your project beyond the event.",
  },
];

const Question: React.FC = () => {
  // store the single open index (or null if none is open)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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
        <div className="max-w-3xl mx-auto py-12 px-4">
           <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500 mb-10">
           Frequently Asked Questions
           </h2>

      {faqData.map((faqItem, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="mb-6">
            {/* Question Row */}
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between cursor-pointer text-left"
            >
              <span className="font-semibold text-gray-900 hover:text-sky-500 transition-colors">
                {faqItem.question}
              </span>
              <PlusIcon
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isOpen ? "rotate-45 text-orange-500" : "rotate-0 text-sky-500"
                }`}
              />
            </button>

            {/* Animated Answer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    {faqItem.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Divider */}
            <div className="border-b border-sky-500 mt-4"></div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Question;

