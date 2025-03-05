"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="mt-28 mb-36 mx-20 px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-white font-extrabold text-6xl mb-6">About Us</h1>
      
      <p className="text-white text-lg ">
        Welcome to our AI Mock Interview platform – your partner in interview success!
      </p>
      
      <p className="text-white text-lg  mt-4">
        We are Yash and Anirudh, two passionate BTech 2nd-year students from IITDMJ. Our journey in engineering and our experiences during countless interviews inspired us to create a platform that helps our peers excel. We understand that preparing for interviews can be stressful and time-consuming, so we built this service to provide accessible, customizable, and cutting-edge AI-powered mock interviews.
      </p>
      
      <p className="text-white text-lg  mt-4">
        Our platform simulates real interview scenarios, offers constructive feedback, and adapts to your evolving skills. We continuously enhance our algorithms based on the latest industry trends and user feedback, ensuring that every session is as realistic and beneficial as possible.
      </p>
      
      <h2 className="text-white font-bold text-2xl mt-8">Our Mission</h2>
      <ul className="list-disc list-inside text-white text-lg mt-4">
        <li>
          <strong>Empower Students:</strong> We aim to provide every student with the tools to confidently face interviews and secure their dream opportunities.
        </li>
        <li>
          <strong>Innovate Learning:</strong> By leveraging AI, we deliver an interactive, data-driven experience that helps you identify your strengths and work on your weaknesses.
        </li>
        <li>
          <strong>Foster Growth:</strong> We are committed to continuous improvement and innovation, making sure our platform evolves with the ever-changing demands of the industry.
        </li>
      </ul>
      
      <h2 className="text-white font-bold text-2xl mt-8">Get In Touch</h2>
      <p className="text-white text-lg mt-4">
        We value your feedback and are here to help you succeed. For any queries or suggestions, please contact us:
      </p>
      
      <div className="mt-4">
        <p className="text-white font-bold text-lg">Yash: +91-9876543210</p>
        <p className="text-white font-bold text-lg">Anirudh: +91-9123456789</p>
      </div>
      
      <p className="text-white text-lg mt-4">
        Thank you for choosing our platform. Let’s build your future together!
      </p>
    </motion.div>
  );
}
