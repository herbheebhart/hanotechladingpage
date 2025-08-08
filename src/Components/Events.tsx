import imag from "../assets/wimg.png";
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Mail, Phone } from "lucide-react";

function Events() {
  return (
    <section
      className="min-h-[70vh] w-full items-center bg-white "
    >
         <h2 className="text-4xl font-bold text-center mb-8 text-orange-600 pt-10">
        Our Events
      </h2>
   <div></div>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto px-6 pt-10">
        {/* Left Text Content */}
        <div className="text-black pt-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
           Meet With the Expertice During our Event
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Hanotech blends modern technology with practical construction to shape a smarter future.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 mt-5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Right Profile Card */}
      <Card className="w-full max-w-sm mx-auto bg-white shadow-xl overflow-hidden py-0">
      {/* Top oval clip background */}
      <div
        className="h-44 bg-orange-500 relative "
        style={{
          clipPath: "ellipse(100% 100% at 50% 0%)",
        }}
      ></div>

      {/* Image clipped with SVG clipPath */}
      <div className="flex justify-center -mt-28 z-10 relative">
        <svg width="120" height="120" className="rounded-full border-4 border-sky-600 shadow-md">
          <defs>
            <clipPath id="avatar-clip" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 A0.5,0.5 0 0 1 0,1 Z" />
            </clipPath>
          </defs>
          <image
            href={imag}
            width="120"
            height="120"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#avatar-clip)"
          />
        </svg>
      </div>

      <CardContent className="mt-2 text-center">
        <h2 className="text-xl font-bold">Abidemi Abogunrin</h2>
        <p className="text-sm text-gray-500 mb-4">cybersecurity and systems Engineer at Microsoft</p>

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
      </CardContent>
    </Card>
      </div>
    </section>
  );
}

export default Events;


