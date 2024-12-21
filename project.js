// Define project data
const projects = [
    {
      title: "Image Caption Generator",
      description: "A deep learning-based project that generates captions for images.",
      link: "guessnumber.html"
    },
    {
      title: "Portfolio Website",
      description: "A responsive and modern portfolio website showcasing my skills and projects.",
      link: "guessnumber.html"
    },
    {
      title: "E-commerce Web Scraper",
      description: "A web scraper built to collect product data from e-commerce sites.",
      link: "guessnumber.html"
    },
    {
      title: "Customer Segmentation Tool",
      description: "A machine learning project for segmenting customers based on behavior.",
      link: "guessnumber.html"
    }
  ];
  
  // Populate projects dynamically
  const projectsContainer = document.getElementById("projectsContainer");
  
  projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
  
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
  
    projectsContainer.appendChild(projectCard);
  });
  
