export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Rajmohan Hazowary",
  role: "Computer Science Student",
  focus: "Machine Learning and Web Development",
  email: "rjmhhzry77@gmail.com",
  phone: "+91 6003638870",
  location: "Goalpara, Assam, India",
  githubUsername: "USER-00001-IND",
  githubUrl: "https://github.com/USER-00001-IND",
  photoUrl: "/profile-photo.jpg",
  summary:
    "Computer Science student pursuing B.Sc with interests in machine learning, web development, and technology research. Passionate about learning new technologies, improving communication skills, and applying technical knowledge to real world problems.",
};

export const projects = [
  {
    title: "Artificial Neural Network ANN Project",
    description:
      "ANN based machine learning project focused on identification of Assamese numbers using neural network models. Included data preparation, model training, prediction, and analysis.",
    tech: ["Python", "TensorFlow/Keras", "Machine Learning", "Neural Networks"],
    command: "python train_ann.py --dataset assamese_digits",
    accent: "acid",
    status: "ML Research",
    repoUrl: "https://github.com/USER-00001-IND/Assamese-Number-recognition-.git",
  },
  {
    title: "Employee Salary Prediction ML Project",
    description:
      "Machine learning regression project that predicts average salary for data related job roles using cleaned and preprocessed real world data. Used Linear Regression, Decision Tree, and Random Forest. Random Forest gave the best result with R2 0.714 and RMSE 21.07.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    command: "sklearn compare_models --metric rmse",
    accent: "aqua",
    status: "Model Complete",
    repoUrl: "https://github.com/USER-00001-IND/Employee-Salary-prediction-.git",
  },
  {
    title: "College Exam System",
    description:
      "Secure MERN based online examination system for college use. Includes student, faculty, and admin workflows, exam creation, submissions, evaluation, proctor snapshots, audit logging, OTP auth, login cooldown, and result publishing.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind CSS"],
    command: "npm run exam-system:start",
    accent: "violet",
    status: "Full Stack",
    repoUrl: "https://github.com/USER-00001-IND/CollegeExamSystem.git",
  },
  {
    title: "Coursework Web Project",
    description:
      "Web project created using HTML, CSS, and JavaScript for Department of Computer Science coursework.",
    tech: ["HTML", "CSS", "JavaScript"],
    command: "open coursework/index.html",
    accent: "acid",
    status: "Coursework",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "JavaScript"],
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
    items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow/Keras"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const interests = [
  "Programming",
  "Machine Learning",
  "Web Development",
  "AI Research",
  "Travel",
  "Gaming",
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
