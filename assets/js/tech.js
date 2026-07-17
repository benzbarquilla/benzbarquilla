const techs = [
  { name: "React", icon: "react/react-original" },
  { name: "Next.js", icon: "nextjs/nextjs-original" },
  //   { name: "JavaScript", icon: "javascript/javascript-original" },
  { name: "HTML5", icon: "html5/html5-original" },
  { name: "CSS3", icon: "css3/css3-original" },
  { name: "Bootstrap", icon: "bootstrap/bootstrap-original" },
  { name: "Git", icon: "git/git-original" },
  { name: "Github", icon: "github/github-original" },
  { name: "Visual Studio Code", icon: "vscode/vscode-original" },
  { name: "Figma", icon: "figma/figma-original" },
  { name: "Claude", icon: "assets/icons/claude.svg", local: true },
  { name: "OpenAI", icon: "assets/icons/openai.svg", local: true },
];

const techPills = document.getElementById("tech-pills");

function renderPills() {
  techs.forEach((tech) => {
    const pill = document.createElement("span");
    pill.className = "pill";

    const iconSrc = tech.local
      ? tech.icon
      : `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${tech.icon}.svg`;
    pill.innerHTML = `<img src="${iconSrc}" alt="${tech.name}" title="${tech.name}" class="pill-icon" />
      ${tech.name}`;
    techPills.appendChild(pill);
  });
}

renderPills();
renderPills();
