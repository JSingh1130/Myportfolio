export const projects = [
  {
    title: "Text Translation Tool",
    tech: ["React", "Node.js", "MongoDB", "RapidAPI"],
    description:
      "A full-stack multilingual document translation tool that allows users to upload PDF and TXT files and translate them into Indian languages including Hindi, Punjabi, and Gujarati. Features JWT-based user authentication, file parsing via Multer and pdf-parse, and seamless integration with RapidAPI for translation. Output is downloadable in both .txt and .pdf formats with accurate font rendering.",
    futureScope:
      "Preserve original PDF formatting post-translation using structured templates or OCR-based layout reconstruction.",
    demoLink: "https://text-translation-nu.vercel.app/login",
    githubLink: "https://github.com/JSingh1130/text-translation",
  },
  {
    title: "User Access Management System",
    tech: ["TypeScript", "PostgreSQL", "Ant Design"],
    description:
      "A robust Role-Based Access Control (RBAC) system developed using React, TypeScript, and PostgreSQL. Allows Admins to register software, Managers to review and approve/reject access requests, and Employees to submit requests. Built with secure JWT authentication, protected route middleware, and modular Ant Design dashboards tailored to each role. Database schema managed with TypeORM.",
      demoLink: "https://user-access-project.vercel.app/signup",
    githubLink: "https://github.com/JSingh1130/user-access-project",
  },
  {
    title: "Expense Tracker",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    description:
      "A modern personal finance tracker that enables users to log daily expenses, visualize spending habits via Chart.js pie charts, and maintain a secure record of financial data. Includes JWT-based login/signup, MongoDB for persistent storage, and interactive UI feedback using SweetAlert2. Designed to work seamlessly across devices with responsive layout and real-time data updates.",
    demoLink: "https://expense-tracker-mu-sooty.vercel.app/",
    githubLink: "https://github.com/JSingh1130/expense-tracker",
  },
];
