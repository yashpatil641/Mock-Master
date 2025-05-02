"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Github, Mail, Loader2 } from "lucide-react";
import { z } from "zod";
import SignIn from "@/components/sign-in";
import { githubSignIn } from "@/lib/actions";

// Form validation schema
const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional(),
});

type SignInFormData = z.infer<typeof signInSchema>;

// Generate stable particle data outside component
const createParticles = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    size: Math.random() * 8 + 2,
    initialX: `${Math.random() * -10000}%`,
    initialY: `${Math.random() * -10000}%`,
    targetX: `${Math.random() * 10000}%`,
    targetY: `${Math.random() * 2000}%`,
    opacity: Math.random() * 0.5 + 0.2,
    duration: Math.random() * 60 + 10,
  }));
};

export default function SignInPage() {
  const [formData, setFormData] = useState<Partial<SignInFormData>>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SignInFormData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Generate particles just once when component mounts
  const [particles] = useState(() => createParticles(40));

  const validateForm = () => {
    try {
      signInSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<Record<keyof SignInFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof SignInFormData] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
      return false;
    }
  };

  const handleInputChange = (field: keyof SignInFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulating API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Here you would handle actual authentication
      console.log("Sign in successful!", formData);
      // Redirect user after successful login
    } catch (error) {
      console.error("Sign in failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden mt-18 mb-60">

      {/* Fixed floating particles effect */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 blur-[1px] "
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: particle.opacity,
          }}
          animate={{
            y: [particle.initialY, particle.targetY],
            x: [particle.initialX, particle.targetX],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      <div className="w-full max-w-md">
        {/* Logo and branding */}
        <Link href="/" className="block mb-8 text-center">
          <motion.div
            className="inline-block"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >

          </motion.div>
        </Link>

        {/* Sign in card */}
        <motion.div
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg shadow-xl overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="p-8">
            <h1 className="font-display text-2xl font-bold text-white mb-1">Welcome back</h1>
            <p className="text-slate-300 mb-8">Sign in to continue your interview preparation</p>

            {/* Social sign-in options */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <form action={githubSignIn}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 hover:bg-white/15 transition-colors rounded-lg border border-white/10 text-white"
                >
                  <Github size={18} />
                  <button type="submit">GitHub</button>
                  </motion.div>
              </form>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 hover:bg-white/15 transition-colors rounded-lg border border-white/10 text-white"
              >
                <Mail size={18} />
                <span>Google</span>
              </motion.button>
            </div>
          </div>

        </motion.div>

        {/* Privacy notice */}
        <motion.p
          className="text-sm text-slate-500 text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-slate-400 hover:text-white underline underline-offset-2">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-slate-400 hover:text-white underline underline-offset-2">
            Privacy Policy
          </Link>
        </motion.p>
      </div>
    </div>
  );
}