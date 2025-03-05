"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GlowArea } from "../glow";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  return (
    <GlowArea className="flex gap-8 items-center justify-center flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "sticky top-0 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white p-4",
          className
        )}
      >
        <div className="flex flex-1 justify-evenly items-center gap-6">
          {navItems.map((navItem, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={navItem.link}
                className="flex items-center space-x-2 text-base font-medium text-white hover:text-gray-300"
              >
                <span>{navItem.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 rounded-full border border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10"
          >
            <Link href={"/signin"}>LogIn</Link>
          </motion.button>
        </div>
      </motion.div>
    </GlowArea>
  );
};
