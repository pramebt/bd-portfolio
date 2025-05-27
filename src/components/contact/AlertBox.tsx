"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react'
type Props = {
  result: string;
  showAlert: boolean;
};
const AlertBox = ({ result, showAlert }: Props) => {
  return (
    <AnimatePresence>
      {showAlert && result && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-6 bg-zinc-900 text-white border border-zinc-700 rounded-xl px-6 py-4 shadow-lg z-50 max-w-sm w-[90%] sm:w-full"
        >
          <p className={`${result.includes("✅") ? "text-green-400" : "text-red-400"} font-medium`}>
            {result}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AlertBox