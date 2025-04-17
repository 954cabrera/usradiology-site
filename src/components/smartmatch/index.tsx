'use client';

import SmartMatchCard from "./SmartMatchCard";
import { scenes } from "./SmartMatchData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      ease: "easeOut",
    },
  },
};

export default function SmartMatch() {
  return (
    <section className="bg-[#FAF5EB] py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#0E1B2A]">Powered by SmartMatch™</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          USRadiology’s intelligent care navigator that matches you with the right MRI—based on diagnosis, comfort, location, and price.
        </p>

        <div className="relative overflow-visible min-h-[300px] px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {scenes.map((scene, index) => {
              const delay = (index % 3) * 0.15; // stagger by column
              return (
                <SmartMatchCard
                  key={index}
                  title={scene.title}
                  description={scene.description}
                  delay={delay}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

