'use client';

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1 },
};

interface SmartMatchCardProps {
  title: string;
  description: string;
  delay?: number;
}

export default function SmartMatchCard({ title, description, delay = 0 }: SmartMatchCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="w-full bg-white px-6 py-7 rounded-2xl shadow-md hover:shadow-xl ring-0 hover:ring-4 hover:ring-[#E6C378] transition duration-300 ease-out [will-change:transform] [backface-visibility:hidden]"
      variants={cardVariants}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay,
      }}
    >
      <h3 className="font-semibold text-xl text-[#0E1B2A] mb-3 border-b-2 border-[#E6C378] inline-block pb-1">
        {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}
