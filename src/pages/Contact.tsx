import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="p-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>

      {/* Contact Image */}
      <motion.img
        src="/contact-image.png" // Make sure this file is in the public folder
        alt="Let's connect"
        className="rounded-xl shadow-md mx-auto mb-6 w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      <motion.div
        className="bg-white p-6 rounded-lg shadow-md space-y-4 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:jatinjot28@gmail.com"
            className="text-blue-600 hover:underline"
          >
            jatinjot28@gmail.com
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/JSingh1130"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            JSingh1130
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/jatinjot-singh-679802260/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Jatinjot Singh
          </a>
        </p>
      </motion.div>
    </motion.section>
  );
}
