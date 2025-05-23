import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      className="min-h-screen bg-blue-100 flex flex-col md:flex-row items-center justify-center px-10 py-26 gap-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image section */}
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/myimage.png"
          alt="Sikh developer coding"
          className="rounded-xl shadow-2xl w-full h-auto object-contain"
        />
      </motion.div>

      {/* Text section */}
      <motion.div
        className="flex-1 md:pl-16 text-center md:text-left"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
          Hi, I'm Jatinjot Singh 👋
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Full Stack Developer | React, Node.js, TypeScript
        </p>
        <a
          href="/projects"
          className="text-white bg-blue-600 px-8 py-3 text-lg rounded hover:bg-blue-700 transition"
        >
          Check My Projects
        </a>
      </motion.div>
    </motion.section>
  );
}
