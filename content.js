/* ============================================================
   EDIT YOUR PORTFOLIO HERE. Change the text between quotes,
   save, and redeploy. No other file needs to be touched.
   To add an item, copy a whole { ... }, block and paste it.
   To remove an item, delete its { ... }, block.
   ============================================================ */
const SITE = {
  name: "Fahima Akter Fariha",
  initials: "FAF",
  role: "CSE undergraduate, web developer and event host",
  intro: "I study Computer Science and Engineering at United International University. I build web apps and machine learning projects, and I host and organise events with the UIU Cultural Club.",
  photo: "assets/photo.jpg",
  resume: "assets/resume.pdf",
  openTo: "Open to internships and entry-level roles",

  about: [
    "I’m a fourth-year Computer Science and Engineering student at United International University. I learn best by building: a role-based restaurant system in Django, a heart disease prediction model in Python, and PHP and Figma projects along the way.",
    "Outside coursework, I work with the UIU Cultural Club on event management and PR, and I host club events as an anchor. That work has made me comfortable coordinating with a team and speaking in front of an audience."
  ],
  education: {
    degree: "BSc in Computer Science and Engineering",
    school: "United International University (UIU), Dhaka",
    years: "2023 – 2027 (expected)",
    status: "4th year, currently enrolled",
    cgpa: "3.77",
    cgpaNote: "Current CGPA"
  },

  /* "kind" groups the award: "Cultural" or "Academic". */
  achievements: [
    { title: "Champion, Decoration", detail: "Inter-University Competition", kind: "Cultural" },
    { title: "Decoration Champion", detail: "UIU Megahunt V-12 Intra University Cultural Competition, organised by UIU Cultural Club", kind: "Cultural" },
    { title: "2nd Runner-Up", detail: "Microprocessors and Micro-controllers Lab, CSE Project Show Spring 2026, Department of CSE, UIU", kind: "Academic" },
    { title: "3rd Runner-Up", detail: "System Analysis and Design Lab, CSE Project Show Fall 2025, Department of CSE, UIU", kind: "Academic" }
  ],

  experience: [
    {
      role: "Event Management & PR Team Member, Anchor",
      org: "UIU Cultural Club",
      when: "",
      points: [
        "Coordinated event management tasks with the organising team to deliver club activities.",
        "Supported outreach and promotion for club events as part of the PR team, helping reach and engage the student community.",
        "Hosted club-organised events as an anchor, communicating with and engaging live audiences."
      ]
    }
  ],

  /* PROJECTS
     tag:      a small label, e.g. "Team project", "Course project". Leave "" to hide.
     featured: true shows the project as a large card at the top (use for one project).
     features: optional list of key features.
     code:     GitHub link. Leave "" to hide.
     live:     live website link. Leave "" to hide. */
  projects: [
    {
      name: "Restaurant 360",
      tag: "Team project",
      featured: true,
      tech: ["Python", "Django", "SQLite", "HTML"],
      text: "A role-based restaurant management system built with Django. Admin, Owner, Manager, Waiter, Chef, Kitchen Manager and Bar Manager each get their own dashboard, and customers can order from their phone by scanning the QR code on their table.",
      features: ["Role-based access", "Kitchen dashboard", "Order management", "QR code ordering", "Inventory", "POS and finance"],
      code: "https://github.com/AtaImam/restaurant-360",
      live: ""
    },
    {
      name: "Heart Disease Detection System",
      tag: "",
      tech: ["Python", "Jupyter Notebook"],
      text: "A machine learning model that predicts heart disease risk from patient health data.",
      code: "",
      live: ""
    },
    {
      name: "Smart Restaurant UI/UX Design",
      tag: "",
      tech: ["Figma"],
      text: "A UI/UX concept for a smart restaurant ordering and management system, focused on user flow and interface layout.",
      code: "",
      live: ""
    },
    {
      name: "Nobo Daak System",
      tag: "",
      tech: ["PHP"],
      text: "A PHP-based system for managing and processing communication and mail records.",
      code: "",
      live: ""
    },
    {
      name: "Student Site",
      tag: "Practice project",
      tech: ["HTML5", "CSS3"],
      text: "A multi-page student website with Home and About pages, built with plain HTML and CSS.",
      code: "https://github.com/Fariha0770/student-site-test",
      live: ""
    }
  ],

  skills: [
    { group: "Languages", items: ["C", "C++", "Python", "JavaScript", "PHP", "SQL"] },
    { group: "Web development", items: ["HTML", "CSS", "JavaScript", "PHP", "Django", "Flask"] },
    { group: "Machine learning", items: ["Python", "Jupyter Notebook", "ML model development"] },
    { group: "Tools and design", items: ["Git and GitHub", "SQLite", "Figma (UI/UX)"] },
    { group: "People skills", items: ["Public speaking and hosting", "Event coordination", "PR and outreach", "Teamwork"] }
  ],

  contact: {
    text: "I’m open to internships and entry-level roles. Email is the quickest way to reach me.",
    email: "ffariha2330770@bscse.uiu.ac.bd",
    phone: "01629375060",
    location: "Mohammadpur, Dhaka, Bangladesh",
    linkedin: "https://linkedin.com/in/fahima-akter-fariha",
    github: "https://github.com/Fariha0770"
  }
};
