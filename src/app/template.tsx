"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-red-500 z-50 fixed top-0 left-0 w-1/4'
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 1], y: ["-100%", "0%", "100%"] }}
        transition={{ duration: 1.4 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-green-500 z-50 fixed top-0 left-1/4 w-1/4'
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 1], y: ["-100%", "0%", "100%"] }}
        transition={{ duration: 1.6 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-blue-500 z-50 fixed top-0 left-2/4 w-1/4'
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 1], y: ["-100%", "0%", "100%"] }}
        transition={{ duration: 1.8 }}
      ></motion.div>
      <motion.div
        id='banner-1'
        className='min-h-screen bg-yellow-500 z-50 fixed top-0 left-3/4 w-1/4'
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 1], y: ["-100%", "0%", "100%"] }}
        transition={{ duration: 2 }}
      ></motion.div>
      {children}
    </div>
  );
}
