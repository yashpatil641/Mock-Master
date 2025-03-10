"use client";
import Link from "next/link";
import { Glow, GlowArea } from "@/components/glow";
import { Button } from "@/components/ui/button";
import { Sparkles, MicVocal, BrainCircuit, BarChart3, CheckCircle2, ArrowRight, FileText, Star } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const reviewControls = useAnimation();

  // Reviews carousel animation
  useEffect(() => {
    const scrollReviews = async () => {
      if (!reviewsRef.current) return;

      await reviewControls.start({
        x: [0, -1920],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear"
          }
        }
      });
    };

    scrollReviews();
  }, [reviewControls]);

  const reviews = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      company: "Tech Innovate",
      image: "https://i.pravatar.cc/150?img=1",
      content: "MockMaster helped me nail my dream job interview! The AI feedback was spot-on and helped me improve my responses dramatically.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "Growth Solutions",
      image: "https://i.pravatar.cc/150?img=5",
      content: "I was skeptical at first, but the personalized questions and detailed feedback helped me prepare in ways I hadn't thought of. Highly recommend!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "UX Designer",
      company: "Creative Designs Inc.",
      image: "https://i.pravatar.cc/150?img=11",
      content: "The interview simulation felt incredibly realistic. I went into my actual interview with so much more confidence.",
      rating: 4
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      company: "DataTech Solutions",
      image: "https://i.pravatar.cc/150?img=9",
      content: "As someone who gets nervous during interviews, this tool was a game-changer. I practiced until I felt confident with my responses.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Marketing Director",
      company: "Brand Elevate",
      image: "https://i.pravatar.cc/150?img=3",
      content: "The AI picked up on verbal tics I didn't even notice myself. That feedback alone was worth the investment.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "HR Specialist",
      company: "People First",
      image: "https://i.pravatar.cc/150?img=6",
      content: "As someone who conducts interviews, I recommend MockMaster to all candidates. It really helps them prepare properly.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-800 via-indigo-900 to-slate-950 mt-18">

      {/* Enhanced floating background elements - repositioned to favor upper left */}
      <div className="fixed inset-0 overflow-hidden -z-10 opacity-80">
        <div className="absolute top-0 left-0 w-[50rem] h-[50rem] rounded-full bg-blue-500/15 blur-[10rem]" />
        <div className="absolute top-[5%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-purple-600/10 blur-[8rem]" />
        <div className="absolute top-[40%] right-[10%] w-[40rem] h-[40rem] rounded-full bg-cyan-500/10 blur-[10rem]" />
        <div className="absolute bottom-[10%] left-[40%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/10 blur-[9rem]" />
      </div>


      {/* Navigation */}
      {/* <nav className="container mx-auto py-6 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl flex items-center">
          <span className="text-white">Mock</span>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Master</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-slate-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
            About
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild className="border-slate-700 text-slate-300 hover:text-white hover:border-slate-500">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24 h-screen px-[3vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              Master Your Interview Skills with <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
              Prepare confidently for any job interview with personalized AI-powered mock interviews, real-time feedback, and performance analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GlowArea>
                <Glow color="cyan">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
                    <Sparkles size={18} className="text-yellow-300" />
                    Start free interview
                  </Button>
                </Glow>
              </GlowArea>
              <Button size="lg" variant="outline" asChild className="border-slate-700 text-slate-300 hover:text-white hover:border-slate-500">
                <Link href="/pricing" className="gap-2 inline-flex items-center">
                  View plans <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-2 text-white">Front-end Developer Interview</h3>
                <p className="text-slate-400 text-sm">Tech Company Inc. • Senior Level</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-md bg-slate-800/70 border border-slate-700">
                  <p className="font-medium text-slate-300">Question 2 of 10:</p>
                  <p className="text-white">Explain how you would implement a responsive navigation menu that works across different device sizes.</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-400">
                  <MicVocal size={16} className="text-cyan-400 animate-pulse" />
                  <span>Recording your answer...</span>
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-md border border-slate-700/50">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Real-time feedback</span>
                  <span className="font-mono text-cyan-400">85%</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  Great discussion of media queries and flexbox. Consider mentioning accessibility.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-indigo-950/20 to-slate-900/20  py-16 md:py-24 px-20">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
              Master Every Interview with AI
            </h2>
            <p className="text-lg text-slate-300">
              MockMaster uses advanced AI to prepare you for any job interview, providing real-time feedback and personalized coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainCircuit className="w-10 h-10 text-cyan-400" />,
                title: "AI-Generated Questions",
                description: "Our AI generates tailored interview questions specific to your target role, company, and experience level.",
                bgGradient: "from-cyan-500/20 to-blue-600/5"
              },
              {
                icon: <MicVocal className="w-10 h-10 text-purple-400" />,
                title: "Voice Recording & Analysis",
                description: "Practice answering verbally while our system records and transcribes your responses for detailed feedback.",
                bgGradient: "from-purple-500/20 to-indigo-600/5"
              },
              {
                icon: <FileText className="w-10 h-10 text-indigo-400" />,
                title: "Transcript Generation",
                description: "Get complete transcripts of your mock interviews to review your answers and identify improvement areas.",
                bgGradient: "from-indigo-500/20 to-blue-600/5"
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
                title: "Performance Scoring",
                description: "Receive detailed scores across multiple dimensions including content, delivery, and technical accuracy.",
                bgGradient: "from-blue-500/20 to-cyan-600/5"
              },
              {
                icon: <Sparkles className="w-10 h-10 text-amber-400" />,
                title: "Personalized Feedback",
                description: "Get actionable feedback with specific suggestions on how to improve your interview responses.",
                bgGradient: "from-amber-500/20 to-orange-600/5"
              },
              {
                icon: <CheckCircle2 className="w-10 h-10 text-emerald-400" />,
                title: "Interview Mastery",
                description: "Track your progress over time and master the skills needed to ace your next job interview.",
                bgGradient: "from-emerald-500/20 to-teal-600/5"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-white/10`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2 text-white">{feature.title}</h3>


                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Infinite Carousel */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto mb-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Users Say</h2>
            <p className="text-lg text-slate-300">
              Join thousands of job seekers who have improved their interview performance with MockMaster
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="w-[18%] z-50 h-full absolute bg-gradient-to-r from-black/50"></div>
          <div className="w-[18%] z-50 h-full right-0 absolute bg-gradient-to-r from-transparent to-black/50"></div>

          <motion.div
            ref={reviewsRef}
            animate={reviewControls}
            className="flex gap-6"
            style={{ width: "fit-content" }}
          >
            {/* First set of reviews */}
            {reviews.map((review, i) => (
              <div
                key={`review-1-${i}`}
                className="w-[350px] flex-shrink-0 bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700 relative">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{review.name}</h4>
                    <p className="text-sm text-slate-400">{review.role}, {review.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className={starIndex < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-600"}
                    />
                  ))}
                </div>
                <p className="text-slate-300 italic">{review.content}</p>
              </div>
            ))}

            {/* Duplicate reviews for seamless looping */}
            {reviews.map((review, i) => (
              <div
                key={`review-2-${i}`}
                className="w-[350px] flex-shrink-0 bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700 relative">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{review.name}</h4>
                    <p className="text-sm text-slate-400">{review.role}, {review.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className={starIndex < review.rating ? "text-amber-400 fill-amber-400" : "text-slate-600"}
                    />
                  ))}
                </div>
                <p className="text-slate-300">{review.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto py-16 md:py-24 px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How MockMaster Works</h2>
          <p className="text-lg text-slate-300">
            A simple three-step process to help you prepare for your next interview
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-500 -translate-y-1/2 z-0 opacity-30"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                number: "01",
                title: "Select Your Role",
                description: "Choose the specific job role, seniority level, and target company for your interview preparation.",
                gradient: "from-cyan-500 to-blue-600"
              },
              {
                number: "02",
                title: "Practice Interview",
                description: "Complete a realistic mock interview with AI-generated questions tailored to your target position.",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                number: "03",
                title: "Get Feedback",
                description: "Receive instant analysis, scoring, and personalized recommendations to improve your performance.",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-lg border border-white/10 shadow-lg relative"
              >
                <div className={`bg-gradient-to-r ${step.gradient} w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4 text-white`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="w-full flex items-center justify-center">
        <GlowArea className="py-16 md:py-24 relative inline-flex">
          <Glow color="cyan" className="rounded-xl">
            <div className="container mx-auto ">
              <div className=" backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <div className="absolute -top-[10rem] -right-[10rem] w-[30rem] h-[30rem] rounded-full bg-cyan-600/60 blur-[6rem]" />
                  <div className="absolute -bottom-[10rem] -left-[10rem] w-[30rem] h-[30rem] rounded-full bg-purple-600/60 blur-[6rem]" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative z-10 "
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Ace Your Next Interview?</h2>
                  <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                    Start practicing with MockMaster today and gain the confidence you need to land your dream job.
                  </p>
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-cyan-500/80 to-purple-600/80 hover:from-cyan-600 hover:to-purple-700 text-white border-none">
                    <Sparkles size={18} className="text-yellow-300" />
                    Start free interview
                  </Button>
                </motion.div>
              </div>
            </div>
          </Glow>
        </GlowArea>
      </div>
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-3">
                <li><Link href="/features" className="text-slate-400 hover:text-cyan-400 transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-slate-400 hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link href="/testimonials" className="text-slate-400 hover:text-cyan-400 transition-colors">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About us</Link></li>
                <li><Link href="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
                <li><Link href="/careers" className="text-slate-400 hover:text-cyan-400 transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-slate-400 hover:text-cyan-400 transition-colors">Help center</Link></li>
                <li><Link href="/guides" className="text-slate-400 hover:text-cyan-400 transition-colors">Interview guides</Link></li>
                <li><Link href="/community" className="text-slate-400 hover:text-cyan-400 transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms</Link></li>
                <li><Link href="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} MockMaster. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}