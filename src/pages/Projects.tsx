import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <motion.section
      className="p-8 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center text-blue-900 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              {proj.title}
            </h3>

            <p className="text-gray-700 mb-4 text-justify">{proj.description}</p>

            {/* Optional Future Scope */}
            {proj.futureScope && (
              <p className="text-sm text-blue-800 italic mb-4">
                <strong>Future Scope:</strong> {proj.futureScope}
              </p>
            )}

            <p className="text-sm text-gray-500 mb-4">
              <strong>Tech Stack:</strong> {proj.tech.join(", ")}
            </p>

            <div className="flex gap-6 text-blue-600 text-sm font-medium">
              {proj.demoLink && (
                <a
                  href={proj.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  🌐 Live Demo
                </a>
              )}
              <a
                href={proj.githubLink}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                📁 GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
