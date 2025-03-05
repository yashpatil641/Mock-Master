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
        className={cn(
          "sticky top-0 z-[5000] mx-auto flex w-full max-w-6xl items-center justify-between rounded-full bg-gray-900 border border-gray-800 ring-2 ring-gray-600/50 shadow-[0_0_20px_rgba(107,114,128,0.8)] p-4 ",
          className
        )}
      >
        <div className="flex flex-1 justify-evenly items-center gap-6">
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className={cn(
                "flex items-center space-x-2 text-base font-medium text-white hover:text-gray-300"
              )}
            >
              <span>{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex">
          <button className="flex items-center space-x-2 rounded-full border border-gray-500 px-6 py-3 text-base font-medium text-white shadow-[0_0_10px_rgba(107,114,128,0.8)] hover:bg-gray-500/10">
            <Link href={"/signin"}>LogIn</Link>
          </button>
        </div>
      </motion.div>
    </GlowArea>
  );
};
