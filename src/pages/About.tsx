export default function About() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">About Me</h2>

      <p className="text-lg leading-relaxed text-gray-700 mb-8 text-justify">
        I’m an aspiring Software Development Engineer (SDE) with strong problem-solving skills and hands-on experience in building scalable web applications.
        I’m proficient in Python, Java, and JavaScript, with practical knowledge in both frontend and backend development. I am passionate about writing clean,
        efficient code and continuously learning new technologies to deliver impactful solutions.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Skills</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li><strong>Languages:</strong> TypeScript, JavaScript, Python, C++</li>
          <li><strong>Frameworks & Libraries:</strong> React, Node.js, Express.js</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL, SQL</li>
          <li><strong>Tools & Platforms:</strong> Git, VS Code, AWS (EC2)</li>
        </ul>
      </div>
    </section>
  );
}
