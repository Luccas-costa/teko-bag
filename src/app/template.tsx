'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
        <motion.div
            className="min-h-screen bg-black z-100 fixed top-0 left-0 w-1/5"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 16}}
            transition={{ duration: 0.5}}
        >

        </motion.div>
        {children}
        </div>
    )
}