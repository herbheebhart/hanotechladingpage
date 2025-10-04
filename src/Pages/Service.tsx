
// function Service() {
//   return (
//     <div>
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, eaque asperiores! Illum similique reprehenderit harum odit enim, quod nesciunt perspiciatis!
//     </div>
//   )
// }

// export default Service
import { Laptop, HardHat, GraduationCap } from "lucide-react";

// Import images (replace with your own)
import itImg from "../assets/bg3.avif";
import constructionImg from "../assets/img2.webp";
import trainingImg from "../assets/img4.avif";

function Services() {
  const services = [
    {
      title: "IT Services",
      description:
        "We deliver modern IT solutions that help businesses stay secure, connected, and efficient.",
      icon: <Laptop className="w-14 h-14 text-sky-500" />,
      image: itImg,
      details: [
        "Software & Web Development",
        "Networking & Cybersecurity",
        "Cloud Solutions & IT Consulting",
        "Maintenance & Technical Support",
      ],
    },
    {
      title: "Construction Services",
      description:
        "From concept to completion, we provide high-quality construction and project management solutions.",
      icon: <HardHat className="w-14 h-14 text-orange-500" />,
      image: constructionImg,
      details: [
        "Contract Adminstration",
        "Quantity Surveying & project management",
        "Procurement,Renovation & Remodeling",
        "Design & Structural Engineering Solutions",
        "Sustainable & Smart Building Technology",
      ],
    },
    {
      title: "IT Training",
      description:
        "We empower individuals and organizations with digital skills for today’s tech-driven world.",
      icon: <GraduationCap className="w-14 h-14 text-green-500" />,
      image: trainingImg,
      details: [
        "Beginner & Advanced Coding Classes",
        "Networking & Cybersecurity Training",
        "Digital Literacy for Students & Businesses",
        "Practical, Hands-on Workshops",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-7">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Hanotech, we merge <span className="font-semibold">Construction</span> 
            and <span className="font-semibold">Technology</span> to deliver reliable 
            solutions for individuals, businesses, and communities.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-transform transform hover:-translate-y-2 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl shadow-md w-full object-cover h-64"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Ready to work with us?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your project or training needs.
          </p>
          <a
            href="/contact"
            className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;

