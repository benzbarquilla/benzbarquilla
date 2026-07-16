const projects = [
  {
    image: "assets/images/projects/idp/1.png",
    title: "ISAAC Internal Developer Platform",
    description:
      "Internal Developer Platform designed to streamline development workflows by providing a centralized interface for managing internal tools and services.",
    techStack: [
      { name: "Next.js", icon: "nextjs/nextjs-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "React", icon: "react/react-original" },
      { name: "CSS", icon: "css3/css3-original" },
    ],
  },
  {
    image: "assets/images/projects/ecosentry/1.png",
    title: "EcoSentry",
    description:
      "IoT-based environmental monitoring system that detects chainsaw sounds using machine learning and transmits alerts through LoRa to a web dashboard.",
    techStack: [
      { name: "MongoDB", icon: "mongodb/mongodb-original" },
      { name: "Express", icon: "express/express-original" },
      { name: "React", icon: "react/react-original" },
      { name: "Nodejs", icon: "nodejs/nodejs-original" },
      { name: "Python", icon: "python/python-original" },
      { name: "Arduino", icon: "arduino/arduino-original" },
    ],
  },
  {
    image: "assets/images/projects/gebms/1.png",
    title: "Gym Equipment Borrowing & Management",
    description:
      " Web application for managing equipment inventory, streamlining borrowing and returns. ",
    techStack: [
      { name: "MongoDB", icon: "mongodb/mongodb-original" },
      { name: "Express", icon: "express/express-original" },
      { name: "React", icon: "react/react-original" },
      { name: "Nodejs", icon: "nodejs/nodejs-original" },
      { name: "CSS", icon: "css3/css3-original" },
    ],
  },
  {
    image: "assets/images/projects/sis/1.png",
    title: "Student Information System",
    description: "Web application to manange and store student data",
    techStack: [{ name: "Laravel", icon: "laravel/laravel-original" }],
  },
];

const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card__shine"></div>
    <div class="card__glow"></div>
    <div class="card__content">
    <img src="${project.image}" alt="Screenshot of ${project.title}" class="card__image" />
      <div class="card__text">
        <p class="card__title">${project.title}</p>
        <p class="card__description">${project.description}</p>
      </div>
      <div class="card__footer">
        ${project.techStack
          .map(
            (tech) =>
              `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}.svg" alt="${tech.name}" title="${tech.name}" class="tech-icon" />`,
          )
          .join("")}
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
});
