const skills = [
    "HTML, CSS, JavaScript",
    "React.js & Node.js",
    "Data Structures & Algorithms",
    "RESTful APIs",
    "Version Control (Git)",
    "Problem Solving",
    "Database Management",
    "Machine Learning Basics"
  ];
  
  const skillsContainer = document.getElementById("skills-container");
  
  skills.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.textContent = skill;
    skillsContainer.appendChild(skillCard);
  });
  