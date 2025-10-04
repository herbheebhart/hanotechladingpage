

// function Contact() {
//   return (
//     <div>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo harum aliquam id sint facilis itaque quaerat eligendi odit animi?
//     </div>
//   )
// }

// export default Contact
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../assets/img2.webp";
import { div } from "framer-motion/client";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xanqbvbq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    
    <div className="w-full bg-white py-10">
      {/* Header */}
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
      <h2 className="text-3xl font-bold text-center mt-10 pb-10 text-orange-600 ">
        Contact Us</h2>
      <div className="container mx-auto px-7 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-[rgba(0,0,0,0.35)_0_5px_15px]">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* First Name */}
            <div>
              <label className="block text-md font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-md font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-md font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-md font-medium">Phone Number</label>
              <input
                type="number"
                name="contact"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-md font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="col-span-2 mt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-orange-500 text-white py-4 px-4 rounded-sm hover:bg-orange-600 transition disabled:opacity-50"
              >
                {status === "submitting" ? "Submitting..." : "Send us message"}
              </button>
            </div>
          </form>

          {/* Success / Error Messages */}
          {status === "success" && (
            <p className="mt-4 text-blue-600 text-center">
              ✅ Your form has been submitted successfully!
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8448680659667!2d3.2470986748370163!3d6.666138221489682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b99e50bb16a6b%3A0x6913d24ff27b98bb!2s19%20Bishop%20Charles%20Oderinde%20St%2C%20Alagbado%2C%20Lagos!5e0!3m2!1sen!2sng!4v1739121295837!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "450px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

