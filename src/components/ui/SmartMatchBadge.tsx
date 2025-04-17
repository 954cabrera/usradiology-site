import { motion } from "framer-motion";

export default function SmartMatchBadge() {
  return (
    <motion.div
      className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#E6C378]/20 text-[#E6C378] border border-[#E6C378] shadow-[0_0_0_4px_#E6C37833,0_0_12px_#E6C378,0_0_24px_#E6C378] animate-pulse"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
    >
      Powered by SmartMatch™
    </motion.div>
  );
}
