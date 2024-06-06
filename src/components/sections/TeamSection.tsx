"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../ui/background-beams";

const teamMembers = [
  {
    name: "Arindam Roy",
    role: "Software Engineer",
    bio: "Experienced full-stack developer with experience over 5+ years in the industry.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Rakesh Sharma",
    role: "UI/UX Designer",
    bio: "Creative and innovative designer with a passion for intuitive user experiences.",
    image: "https://i.pravatar.cc/150?img=20",
  },
  // Add more team members here
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-900 relative py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-200 mb-8">Our Team</h2>
        <div className="flex justify-center flex-col space-y-2 lg:space-y-0 lg:flex-row">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index === currentIndex ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`mx-4 bg-neutral-800 rounded-lg shadow-md overflow-hidden ${
                index === currentIndex ? "" : "opacity-50"
              }`}
            >
              <img
                className="w-full h-48 object-cover"
                src={member.image}
                alt={member.name}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-200">
                  {member.name}
                </h3>
                <p className="text-gray-300">{member.role}</p>
                <p className="text-gray-400 mt-2">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default TeamSection;
