export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Stats", href: "#stats" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Journey", href: "#timeline" },
  { label: "Achievements", href: "#achievements" },
  { label: "AI", href: "#ai-assistant" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Rajmohan Hazowary",
  role: "Computer Science Student | Machine Learning | Full Stack Development",
  focus: "Machine Learning, Full Stack Web Development, AI Research, and real-world project building",
  email: "rjmhhzry77@gmail.com",
  phone: "+91 6003638870",
  contactFormEmail: "rjmhhzry77@gmail.com",
  contactFormAction: "https://formspree.io/f/mykvglbz",
  location: "Goalpara, Assam, India",
  githubUsername: "USER-00001-IND",
  githubUrl: "https://github.com/USER-00001-IND",
  linkedInUrl: "",
  photoUrl: "/profile-photo.jpg",
  siteUrl: "https://USER-00001-IND.github.io",
  summary:
    "B.Sc Computer Science student building practical machine learning and full stack web projects. I work with Python, the MERN stack, and modern AI tools to turn coursework, research ideas, and real-world problems into usable software. My interests sit at the intersection of AI research, software engineering, and production-ready project development.",
};

export const analytics = {
  googleAnalyticsId: "",
  plausibleDomain: "",
};

export const projects = [
  {
    title: "College Exam System",
    description:
      "Developed a MERN based online examination platform supporting student, faculty, and admin workflows with JWT authentication, role based access control, online evaluation, OTP authentication, audit logging, and proctor monitoring.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    command: "npm run exam-system:start",
    accent: "violet",
    status: "Full Stack",
    categories: ["Full Stack", "Web Development"],
    features: [
      "Student, faculty, and admin workflows",
      "JWT authentication and role based access control",
      "Online evaluation and result publishing",
      "Audit logging, OTP authentication, and proctor monitoring",
    ],
    screenshots: [],
    outcomes: [
      "Designed secure role based flows for a college exam product.",
      "Practiced production oriented MERN architecture and UI states.",
    ],
    repoUrl: "https://github.com/USER-00001-IND/CollegeExamSystem.git",
  },
  {
    title: "Employee Salary Prediction System",
    description:
      "Built a regression based ML system using Linear Regression, Decision Tree, and Random Forest. Random Forest achieved R2 score of 0.714 and RMSE of 21.07.",
    tech: ["Python", "Pandas", "NumPy", "Scikit Learn"],
    command: "sklearn compare_models --metric rmse",
    accent: "aqua",
    status: "Machine Learning",
    categories: ["Machine Learning"],
    features: [
      "Data cleaning and preprocessing",
      "Feature engineering for salary prediction",
      "Regression model comparison",
      "Model evaluation with practical metrics",
    ],
    screenshots: [],
    outcomes: [
      "Compared Linear Regression, Decision Tree, and Random Forest models.",
      "Improved understanding of supervised regression workflows.",
    ],
    repoUrl: "https://github.com/USER-00001-IND/Employee-Salary-prediction-.git",
  },
  {
    title: "Assamese Number Recognition using ANN",
    description:
      "Built an ANN based image classification project for Assamese numerical character recognition with dataset preparation, model training, prediction, and evaluation.",
    tech: ["Python", "TensorFlow", "Keras", "Neural Networks"],
    command: "python train_ann.py --dataset assamese_digits",
    accent: "acid",
    status: "AI Research",
    categories: ["AI", "Research", "Machine Learning"],
    features: [
      "Assamese numerical character dataset preparation",
      "ANN model training and prediction",
      "Recognition result analysis",
      "Experiment documentation",
    ],
    screenshots: [],
    outcomes: [
      "Built a focused neural network workflow for regional digit recognition.",
      "Practiced dataset preparation and model analysis for visual patterns.",
    ],
    repoUrl: "https://github.com/USER-00001-IND/Assamese-Number-recognition-.git",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and built a responsive personal portfolio using React, Tailwind CSS, Vite, and modern UI patterns.",
    tech: ["React", "Tailwind CSS", "Vite"],
    command: "npm run build",
    accent: "acid",
    status: "Frontend",
    categories: ["Web Development"],
    features: [
      "Responsive React and Tailwind CSS UI",
      "Lazy loaded portfolio sections",
      "SEO, PWA, and accessibility improvements",
      "Contact, resume, and project presentation workflows",
    ],
    screenshots: [],
    outcomes: [
      "Built a professional static portfolio for GitHub Pages deployment.",
      "Practiced frontend performance, accessibility, and deployment hardening.",
    ],
    repoUrl: "https://github.com/USER-00001-IND/USER-00001-IND.github.io",
  },
];

export const projectFilters = ["All", "Machine Learning", "AI", "Web Development", "Full Stack", "Research"];

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "C", "C++"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Machine Learning",
    items: ["NumPy", "Pandas", "Scikit Learn", "TensorFlow", "Keras"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
  },
];

export const interests = [
  "Programming",
  "Machine Learning",
  "Web Development",
  "AI Research",
  "Software Engineering",
  "Real World Projects",
];

export const education = [
  {
    school: "Pandit Deendayal Upadhyaya Adarsha Mahavidyalaya, Amjonga",
    program: "Bachelor of Science, Computer Science",
    years: "2024 to 2027",
    status: "Pursuing",
  },
  {
    school: "Pandit Deendayal Upadhyaya Adarsha Mahavidyalaya, Amjonga",
    program: "Higher Secondary",
    years: "2021 to 2024",
    status: "Completed",
  },
];

export const achievements = [
  {
    title: "DevFusion 2.0 Developers Hackathon",
    organizer: "Enginow",
    team: "amitray.school",
    role: "Razorpay Integration and UI Design",
    details: [
      "Participated in DevFusion 2.0 Developers Hackathon.",
      "Contributed to secure payment workflow using Razorpay.",
      "Worked on responsive UI design and user experience improvements.",
      "Collaborated with team members on frontend and production ready interface design.",
    ],
  },
];

export const internships = [
  {
    title: "Summer Internship in Computer Vision",
    organization: "Department of Computer Science, Gauhati University",
    domain: "Computer Vision and AI",
    details: [
      "Computer Vision and AI",
      "Image Processing",
      "OpenCV",
      "Dataset Preparation",
      "Model Training and Evaluation",
      "Research Workflow",
    ],
    skills: [
      "Computer Vision",
      "OpenCV",
      "Image Processing",
      "Dataset Preparation",
      "Model Training and Evaluation",
      "Research Workflow",
    ],
  },
  {
    title: "Winter Internship in Machine Learning and ANN",
    organization: "Department of Computer Science, Gauhati University",
    domain: "Machine Learning",
    details: [
      "Artificial Neural Networks",
      "Machine Learning",
      "Data Preparation",
      "Model Training",
      "Prediction Analysis",
    ],
    skills: [
      "Artificial Neural Networks",
      "Machine Learning",
      "Data Preparation",
      "Model Training",
      "Prediction Analysis",
    ],
  },
];

export const stats = [
  { label: "Projects Completed", value: projects.length },
  { label: "Technologies Used", value: new Set(skillGroups.flatMap((group) => group.items)).size },
  { label: "Internship Experiences", value: internships.length },
  { label: "Hackathons Participated", value: 1 },
  { label: "GitHub Repositories", value: 0, source: "github" },
];

export const timeline = [
  {
    year: "2024",
    title: "Started B.Sc Computer Science",
    details: "Started B.Sc Computer Science and strengthened programming fundamentals.",
  },
  {
    year: "2025",
    title: "Built Assamese Number Recognition ANN project",
    details: "Worked on ANN based image classification for Assamese numerical character recognition.",
  },
  {
    year: "2025",
    title: "Completed Employee Salary Prediction ML project",
    details: "Built and evaluated regression models using Linear Regression, Decision Tree, and Random Forest.",
  },
  {
    year: "2026",
    title: "Winter Internship at Gauhati University",
    details: "Worked on ANN and Machine Learning research workflows at the Department of Computer Science.",
  },
  {
    year: "2026",
    title: "Summer Internship at Gauhati University",
    details: "Worked on Computer Vision and AI, including image processing, OpenCV, and model evaluation.",
  },
  {
    year: "2026",
    title: "Participated in DevFusion 2.0 Developers Hackathon",
    details: "Contributed to Razorpay integration, responsive UI design, and production ready UX improvements.",
  },
  {
    year: "2026",
    title: "Built College Exam System full stack project",
    details: "Developed a MERN based online examination platform with role based workflows and secure authentication.",
  },
];

export const certifications = [
  {
    title: "DevFusion 2.0 Participation Certificate",
    issuer: "Enginow",
    description: "Developers hackathon participation with Razorpay integration and responsive UI design contributions.",
    // Place the certificate at public/certificates/devfusion.pdf, then set available to true.
    fileUrl: "/certificates/devfusion.pdf",
    available: false,
  },
  {
    title: "Summer Internship Certificate",
    issuer: "Department of Computer Science, Gauhati University",
    description: "Computer Vision and Artificial Intelligence internship focused on image processing and AI research workflows.",
    // Place the certificate at public/certificates/summer-internship.pdf, then set available to true.
    fileUrl: "/certificates/summer-internship.pdf",
    available: false,
  },
  {
    title: "Winter Internship Certificate",
    issuer: "Department of Computer Science, Gauhati University",
    description: "ANN based machine learning research, dataset preparation, model training, prediction, and evaluation.",
    // Place the certificate at public/certificates/winter-internship.pdf, then set available to true.
    fileUrl: "/certificates/winter-internship.pdf",
    available: false,
  },
];

export const aiAssistantProfile = {
  skills: ["Machine Learning", "Computer Vision", "Deep Learning", "ANN", "Data Preprocessing", "Model Evaluation"],
  projects: ["Employee Salary Prediction System", "Assamese Number Recognition using ANN", "Computer Vision Internship Work"],
  researchInterests: ["AI based visual data analysis", "Regional language and digit recognition", "Applied ML for real-world workflows"],
  futureGoals: ["Build deployable AI products", "Strengthen software engineering fundamentals", "Contribute to research oriented AI systems"],
};
