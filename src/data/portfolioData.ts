/**
 * Portfolio Configuration & Centralized Data
 * 
 * Update this file to modify any text, personal info, education, skills,
 * projects, or social links across the entire website.
 */

export interface EducationItem {
  id: string;
  institution: string;
  degreeOrCertificate: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Programming' | 'Cybersecurity' | 'Tools & Productivity';
  level: 'Beginner' | 'Foundational' | 'Developing';
  description: string;
  keyTopics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  status: 'Completed' | 'Educational Example' | 'In Progress';
  iconName: 'Calculator' | 'Globe' | 'BookOpen' | 'ShieldCheck' | 'Terminal';
  githubUrl?: string;
  liveDemoId?: string; // id of built-in interactive demo component
  keyFeatures: string[];
  securityLesson: string;
}

export interface LearningTopic {
  id: string;
  title: string;
  stage: 'Beginner' | 'Developing Skills' | 'Future Goals';
  progress: number; // 0 - 100
  status: 'In Progress' | 'Planned' | 'Foundations Built';
  description: string;
  topicsCovered: string[];
}

export interface StudyMilestone {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  notes: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Akok Mayol Akok",
    initials: "AMA",
    title: "Cybersecurity Student | Aspiring Security Analyst",
    university: "University of Juba",
    department: "Cybersecurity",
    location: "Juba, South Sudan",
    email: "cosmiqakok@gmail.com",
    headline: "Securing the Digital World, One Step at a Time.",
    intro:
      "Hello, I'm Akok Mayol Akok, a cybersecurity student at the University of Juba, passionate about technology, digital security, ethical hacking, and protecting information in an increasingly connected world.",
    bioParagraphs: [
      "My passion for cybersecurity began with a fundamental curiosity: understanding how digital networks operate, why systems fail, and how thoughtful defenses can protect critical data. Growing up with an eagerness to understand technology from the ground up, I chose to dedicate my academic studies to Cybersecurity at the University of Juba.",
      "As an aspiring security analyst, I focus on building strong core fundamentals in computer networks, Linux systems, Python scripting, and ethical defense principles. I believe that safeguarding information infrastructure starts with disciplined security hygiene, solid foundational concepts, and a commitment to responsible, authorized security practices.",
      "In an increasingly interconnected world—and particularly within emerging digital environments across East Africa and globally—there is a vital need for dedicated, ethical security practitioners. I aim to grow into a skilled defender who helps organizations, universities, and communities protect their digital integrity."
    ],
    mission:
      "To develop the knowledge and practical skills needed to protect digital systems, identify security weaknesses responsibly, and contribute to a safer digital environment.",
    vision:
      "To become a skilled cybersecurity professional who contributes to building secure, reliable, and trustworthy technology systems.",
    avatarImage: "/src/assets/images/student_avatar_1791882347992.jpg",
    heroMeshImage: "/src/assets/images/cyber_hero_mesh_1791882348097.jpg",
    labWorkspaceImage: "/src/assets/images/security_lab_workspace_1791882348790.jpg",
    socialLinks: {
      github: "https://github.com/cosmiqakok",
      linkedin: "https://linkedin.com/in/cosmiqakok",
      email: "mailto:cosmiqakok@gmail.com",
      twitter: "https://x.com/cosmiqakok",
    },
  },

  personalQualities: [
    {
      title: "Willingness to Learn",
      description: "Constantly absorbing new security concepts, networking standards, and modern programming practices through academic courses and independent labs.",
    },
    {
      title: "Problem-Solving",
      description: "Analytical mindset that breaks down complex system errors, logic bugs, and network configurations step by step.",
    },
    {
      title: "Communication",
      description: "Ability to articulate technical security concepts clearly in speech and documentation for diverse audiences.",
    },
    {
      title: "Teamwork",
      description: "Collaborative approach to group academic assignments, peer code reviews, and student study initiatives.",
    },
    {
      title: "Curiosity About Technology",
      description: "Relentless curiosity about packet flows, hardware architecture, operating system internals, and threat methodologies.",
    },
  ],

  education: [
    {
      id: "univ-juba",
      institution: "University of Juba",
      degreeOrCertificate: "Bachelor's Degree in Cybersecurity",
      period: "Current Student (Undergraduate)",
      location: "Juba, South Sudan",
      description: "Focusing on core computer science foundations, information assurance, telecommunications, networking, and digital defensive concepts.",
      highlights: [
        "Network fundamentals and protocol architecture",
        "Python and C programming fundamentals",
        "Information security governance and CIA triad principles",
        "Operating systems architecture and command-line interfaces"
      ]
    },
    {
      id: "juba-diplo",
      institution: "Juba Diplomatic Secondary School",
      degreeOrCertificate: "South Sudan Secondary School Certificate",
      period: "2022 – 2023",
      location: "Juba, South Sudan",
      description: "Successfully completed secondary education with emphasis on sciences, mathematics, and technological literacy.",
      highlights: [
        "Advanced mathematics and analytical problem solving",
        "Introduction to computer applications and scientific methodology",
        "Active student leadership and peer collaborative study"
      ]
    }
  ] as EducationItem[],

  skills: [
    // Programming
    {
      id: "py-fund",
      name: "Python Fundamentals",
      category: "Programming",
      level: "Foundational",
      description: "Writing scripts for automation, data calculations, file input/output, and basic security utility tools.",
      keyTopics: ["Control Flow & Loops", "Functions & Modules", "String Manipulation", "File I/O", "Basic Regex"]
    },
    {
      id: "c-fund",
      name: "C Programming Fundamentals",
      category: "Programming",
      level: "Beginner",
      description: "Understanding low-level memory concepts, data types, pointers, and foundational computer architecture.",
      keyTopics: ["Syntax & Standard I/O", "Variables & Data Types", "Arrays & Strings", "Basic Pointers & Memory"]
    },
    {
      id: "logic-prob",
      name: "Basic Programming Logic & Problem-Solving",
      category: "Programming",
      level: "Foundational",
      description: "Designing structured algorithms, handling edge conditions, and tracing program states step-by-step.",
      keyTopics: ["Flowcharting & Pseudocode", "Conditional Logic", "Boundary Condition Testing", "Clean Code Formatting"]
    },

    // Cybersecurity
    {
      id: "sec-fund",
      name: "Cybersecurity Fundamentals",
      category: "Cybersecurity",
      level: "Foundational",
      description: "Understanding the core tenets of information security: confidentiality, integrity, availability, and threat modeling.",
      keyTopics: ["CIA Triad", "Defense in Depth", "Threat Vectors & Attack Surfaces", "Security Policies & Risk"]
    },
    {
      id: "net-sec",
      name: "Network Security Concepts",
      category: "Cybersecurity",
      level: "Foundational",
      description: "Understanding network architecture, the OSI and TCP/IP models, port numbers, firewalls, and data packets.",
      keyTopics: ["OSI 7-Layer Model", "TCP vs UDP & Common Ports", "Subnetting Basics", "Firewalls & NAT", "Packet Inspection"]
    },
    {
      id: "info-sec",
      name: "Information Security Principles",
      category: "Cybersecurity",
      level: "Foundational",
      description: "Exploring access control mechanisms, user authentication standards, password policies, and data classification.",
      keyTopics: ["Least Privilege", "Authentication vs Authorization", "Symmetric vs Asymmetric Hashing", "Identity Management"]
    },
    {
      id: "eth-hack",
      name: "Ethical Hacking Concepts",
      category: "Cybersecurity",
      level: "Beginner",
      description: "Learning the methodology of authorized penetration testing, vulnerability identification, and legal frameworks.",
      keyTopics: ["Reconnaissance & Footprinting", "Vulnerability Scanning", "Reporting & Responsible Disclosure", "Legal & Ethical Boundaries"]
    },
    {
      id: "sec-aware",
      name: "Security Awareness & Cyber Hygiene",
      category: "Cybersecurity",
      level: "Foundational",
      description: "Identifying human factor vulnerabilities such as social engineering, phishing techniques, and safe user practices.",
      keyTopics: ["Phishing Recognition", "Multi-Factor Authentication", "Safe Web Browsing", "Credential Protection"]
    },

    // Tools & Productivity
    {
      id: "vscode",
      name: "Visual Studio Code",
      category: "Tools & Productivity",
      level: "Foundational",
      description: "Primary development environment for writing Python, C, markdown study notes, and web projects with syntax extensions.",
      keyTopics: ["Workspace Setup", "Debugger Usage", "Terminal Integration", "Extensions & Git Source Control"]
    },
    {
      id: "cli-fund",
      name: "Command-Line Fundamentals",
      category: "Tools & Productivity",
      level: "Foundational",
      description: "Navigating Linux and Windows shells, managing files, viewing system processes, and inspecting network interfaces.",
      keyTopics: ["File Navigation (cd, ls, mkdir)", "Permissions (chmod)", "Process Monitoring", "Network Commands (ping, ipconfig, traceroute)"]
    },
    {
      id: "ms-office",
      name: "Microsoft Office Suite",
      category: "Tools & Productivity",
      level: "Foundational",
      description: "Creating structured technical documentation, project presentations, and data organization spreadsheets.",
      keyTopics: ["Technical Report Writing in Word", "Data Tables in Excel", "Academic Presentations in PowerPoint"]
    }
  ] as SkillItem[],

  projects: [
    {
      id: "python-calc",
      title: "Python Calculator",
      shortDescription: "A beginner-friendly calculator that performs basic arithmetic operations with input validation and error handling.",
      fullDescription: "Built as an introductory software development project to master Python control structures, functions, and defensive error handling (such as catching ZeroDivisionError and non-numeric inputs). Features both a clean CLI interface and an interactive browser-based simulation.",
      technologies: ["Python 3", "Defensive Input Validation", "Functions & Unit Testing"],
      status: "Educational Example",
      iconName: "Calculator",
      githubUrl: "https://github.com/cosmiqakok/python-calculator",
      liveDemoId: "calculator",
      keyFeatures: [
        "Four basic arithmetic operators (+, -, *, /) plus exponentiation and modulo",
        "Graceful handling of division-by-zero errors without crashing",
        "Calculation history log recording user operations",
        "Clear console feedback and input re-prompting"
      ],
      securityLesson: "Taught fundamental validation principles: never trust raw user input, and always catch exceptions gracefully before they trigger unhandled system states."
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      shortDescription: "A responsive website presenting my background, skills, educational journey, and interactive cybersecurity tools.",
      fullDescription: "Engineered to establish a professional digital presence for academic review and future internship applications. Built with modern, accessible web standards, a refined deep navy and blue theme, responsive navigation, dark/light mode toggles, and zero mock dependencies.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Semantic HTML5", "Responsive UI"],
      status: "Completed",
      iconName: "Globe",
      githubUrl: "https://github.com/cosmiqakok/cybersecurity-portfolio",
      liveDemoId: "portfolio",
      keyFeatures: [
        "Multi-page architecture with deep linking and smooth page transitions",
        "Dedicated sections for Home, About, Skills, Projects, Roadmap, and Contact",
        "Subtle cybersecurity network canvas visualization",
        "Built-in interactive educational security demos and customizer"
      ],
      securityLesson: "Client-side security and privacy: zero third-party tracking scripts, sanitization of form submissions, and accessible semantic markup."
    },
    {
      id: "cyber-notes",
      title: "Cybersecurity Learning Notes",
      shortDescription: "Organized educational notes covering cybersecurity fundamentals, network protocols, and safe digital practices.",
      fullDescription: "A structured, searchable knowledge repository compiling core notes from university lectures, textbooks, and online security research. Organized into structured modules including the CIA Triad, OSI layer security, common web vulnerabilities (OWASP), and basic cryptography concepts.",
      technologies: ["Markdown", "Information Security Principles", "Documentation Architecture"],
      status: "Educational Example",
      iconName: "BookOpen",
      githubUrl: "https://github.com/cosmiqakok/cybersecurity-learning-notes",
      liveDemoId: "notes",
      keyFeatures: [
        "Curated breakdowns of foundational cybersecurity concepts",
        "OSI Model Layer-by-Layer security considerations table",
        "Glossary of common threat terms: Phishing, Malware, Spoofing, Brute Force",
        "Practical defensive recommendations for individual and academic devices"
      ],
      securityLesson: "Clear documentation is the backbone of incident response and security auditing. Solid conceptual understanding prevents costly misconfigurations."
    },
    {
      id: "password-checker",
      title: "Password Strength Checker",
      shortDescription: "An educational Python project that checks password characteristics locally and provides suggestions for creating stronger passwords.",
      fullDescription: "Developed to demonstrate how entropy, character variety, dictionary words, and password length affect credential resilience. The tool evaluates candidate passwords purely locally in the user's browser (or locally via Python CLI) with zero network transmission, providing immediate feedback based on modern NIST SP 800-63B guidelines.",
      technologies: ["Python", "NIST SP 800-63B Standards", "Entropy Calculation", "RegEx"],
      status: "Educational Example",
      iconName: "ShieldCheck",
      githubUrl: "https://github.com/cosmiqakok/password-strength-checker",
      liveDemoId: "password-checker",
      keyFeatures: [
        "Real-time evaluation of length, uppercase, lowercase, numbers, and symbols",
        "Mathematical entropy score estimation (bits of entropy)",
        "Approximate brute-force crack time estimates based on offline hash rate models",
        "Actionable tips to create memorable, high-entropy passphrases",
        "Strict client-side privacy guarantee: passwords are never stored or transmitted"
      ],
      securityLesson: "Demonstrates practical defense against brute-force attacks and password spraying, emphasizing that length and passphrase unpredictability outperform complex yet short patterns."
    }
  ] as ProjectItem[],

  learningTopics: [
    {
      id: "t-python",
      title: "Python Programming",
      stage: "Developing Skills",
      progress: 55,
      status: "In Progress",
      description: "Mastering scripting, socket programming basics, and string/data analysis for cybersecurity tasks.",
      topicsCovered: ["Syntax & data structures", "File processing & JSON", "Subprocess execution", "Basic socket connections"]
    },
    {
      id: "t-networks",
      title: "Computer Networks",
      stage: "Developing Skills",
      progress: 60,
      status: "In Progress",
      description: "Deep dive into TCP/IP protocols, packet routing, DNS resolution, and network diagnostics.",
      topicsCovered: ["IPv4/IPv6 addressing", "TCP 3-way handshake", "DNS, DHCP & HTTP/HTTPS", "Traceroute & ICMP diagnostics"]
    },
    {
      id: "t-os",
      title: "Operating Systems",
      stage: "Developing Skills",
      progress: 45,
      status: "In Progress",
      description: "Understanding operating system kernels, process lifecycle, filesystem permissions, and virtualization.",
      topicsCovered: ["Linux filesystem hierarchy", "User & group permissions (UGO)", "Process management", "Virtual machines (VirtualBox)"]
    },
    {
      id: "t-dsa",
      title: "Data Structures and Algorithms",
      stage: "Developing Skills",
      progress: 35,
      status: "In Progress",
      description: "Studying fundamental arrays, linked lists, stacks, queues, and search algorithms for structured problem solving.",
      topicsCovered: ["Linear data structures", "Binary search", "Algorithm time complexity (Big-O)", "Hash tables basics"]
    },
    {
      id: "t-web",
      title: "Web Development Fundamentals",
      stage: "Developing Skills",
      progress: 50,
      status: "In Progress",
      description: "Understanding how the web functions: client-server architecture, HTTP requests, cookies, and DOM basics.",
      topicsCovered: ["HTML5 & semantic markup", "CSS & responsive layouts", "HTTP methods (GET, POST, PUT, DELETE)", "Browser developer tools"]
    },
    {
      id: "t-sec-principles",
      title: "Cybersecurity Principles",
      stage: "Beginner",
      progress: 70,
      status: "Foundations Built",
      description: "Foundational security frameworks, risk mitigation, confidentiality controls, and cryptographic basics.",
      topicsCovered: ["CIA Triad & Parkerian Hexad", "Defense in depth", "Symmetric vs Asymmetric encryption", "Hashing functions (SHA-256)"]
    },
    {
      id: "t-ethical-hacking",
      title: "Ethical Hacking in Authorized Environments",
      stage: "Future Goals",
      progress: 20,
      status: "Planned",
      description: "Future roadmap focus: learning disciplined penetration testing methodologies within authorized sandbox labs.",
      topicsCovered: ["Ethics & legal boundaries (CFAA / local laws)", "Reconnaissance & port scanning basics", "OWASP Web Security Testing", "Vulnerability documentation"]
    }
  ] as LearningTopic[],

  roadmapStages: [
    {
      stage: "Beginner",
      badge: "Foundations",
      summary: "Mastering foundational computer architecture, mathematics, basic programming syntax, and security vocabulary.",
      focusAreas: [
        "Secondary school completion & university enrolment",
        "C programming & memory basics",
        "Command line navigation (Linux & Windows)",
        "Core cybersecurity definitions & CIA triad"
      ],
      current: false,
      completed: true
    },
    {
      stage: "Developing Skills",
      badge: "Current Stage",
      summary: "Building practical technical competencies through university coursework, lab exercises, and Python automation scripts.",
      focusAreas: [
        "Network protocol analysis & packet inspection",
        "Python scripting for security automation",
        "Operating system permissions & system hardening",
        "Developing hands-on projects (Calculator, Password Checker, Notes)"
      ],
      current: true,
      completed: false
    },
    {
      stage: "Future Goals",
      badge: "Aspirations",
      summary: "Advancing toward professional security certifications, defense operations, and industry internships.",
      focusAreas: [
        "CompTIA Security+ or similar foundational certification prep",
        "Participating in student Capture The Flag (CTF) challenges",
        "Security Operations Center (SOC) tier-1 analyst skill development",
        "Internship placement at a telecommunications or IT enterprise"
      ],
      current: false,
      completed: false
    }
  ],

  defaultMilestones: [
    { id: "m1", title: "Complete Python fundamentals and build a functional calculator", category: "Programming", completed: true, notes: "Mastered functions, loops, and division error handling" },
    { id: "m2", title: "Study OSI 7-Layer model and map security controls to each layer", category: "Networking", completed: true, notes: "Focused on Layer 3 (IP), Layer 4 (TCP/UDP), and Layer 7 (Application)" },
    { id: "m3", title: "Build and deploy personal cybersecurity portfolio website", category: "Web & Career", completed: true, notes: "Multi-page responsive design showcasing skills and projects" },
    { id: "m4", title: "Write Password Strength Checker with NIST SP 800-63B guidelines", category: "Security Scripting", completed: true, notes: "Calculates entropy and gives clear recommendations" },
    { id: "m5", title: "Configure a Linux virtual machine and practice basic CLI commands", category: "Systems", completed: true, notes: "Ubuntu / Debian environment on VirtualBox" },
    { id: "m6", title: "Complete introductory study of hashing algorithms (MD5, SHA-256)", category: "Cryptography", completed: false, notes: "Understanding cryptographic hashes and salt concepts" },
    { id: "m7", title: "Conduct Wireshark packet capture analysis in an isolated lab", category: "Networking", completed: false, notes: "Inspect HTTP vs HTTPS traffic in controlled sandbox" },
    { id: "m8", title: "Solve first 5 beginner challenges on OverTheWire Bandit", category: "Hands-on Practice", completed: false, notes: "Linux terminal gamified learning" },
  ] as StudyMilestone[]
};
