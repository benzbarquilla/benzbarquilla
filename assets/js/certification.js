const certs = [
  {
    image: "assets/images/badges/1.png",
    title: "CCNA: Introduction to Networks",
    program: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/8892042d-008d-4cab-af19-feb07eee1ff7",
  },
  {
    image: "assets/images/badges/2.png",
    title: "CCNA Switching, Routing, and Wireless Essentials",
    program: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/64630541-5721-4b67-b557-b0620dd05dc1",
  },
  {
    image: "assets/images/badges/3.png",
    title: "Introduction to Cybersecurity",
    program: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/bfffb2f6-9bff-4c58-82b5-bbe2dc08c157",
  },
  {
    image: "assets/images/badges/4.png",
    title: "CCNA: Enterprise Networking, Security, and Automation",
    program: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/0856a5c5-4be6-4ed3-a4c0-09d4c47d2010",
  },
  {
    image: "assets/images/badges/5.png",
    title: "Employability Skills - JobReady",
    program: "Wadhwani Foundation",
    link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=69a291440a3fed6611f86469",
  },
];

const certCard = document.getElementById("cert-grid");

function renderCard() {
  certs.forEach((cert) => {
    const card = document.createElement("div");
    card.className = "cert-card";
    card.innerHTML = `
              <img
                class="badge"
                src="${cert.image}"
                alt="CCNA: Introduction to Networks"
              />
              <div class="cert">
                <p class="cert-title">${cert.title}</p>
                <p class="program">${cert.program}</p>
              </div>
              <a href="${cert.link}" target="_blank" rel="noopener" class="verify-btn">Verify</a>
            `;
    certCard.appendChild(card);
  });
}

renderCard();
