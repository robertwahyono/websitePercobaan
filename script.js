// Sticky header
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Dark mode toggle
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll animation
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add("show");
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting FutureTech! We'll get back to you soon.");
  this.reset();
});

// Language toggle
const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", () => {
  const elements = document.querySelectorAll("[data-en]");
  const isEnglish = langToggle.textContent === "🇮🇩";
  elements.forEach(el => {
    el.textContent = isEnglish ? el.dataset.id : el.dataset.en;
  });
  langToggle.textContent = isEnglish ? "🇬🇧" : "🇮🇩";
});

// ====== DASHBOARD CHARTS ======
document.addEventListener("DOMContentLoaded", () => {
  // Bar Chart (Sales per Quarter)
  const barCtx = document.getElementById("barChart").getContext("2d");
  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [{
        label: "Revenue (in million USD)",
        data: [12, 19, 14, 23],
        backgroundColor: ["#00bcd4", "#4dd0e1", "#26c6da", "#0097a7"],
        borderRadius: 8,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Quarterly Revenue", color: "#333" }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Pie Chart (Market Share)
  const pieCtx = document.getElementById("pieChart").getContext("2d");
  new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: ["Asia", "Europe", "America", "Africa"],
      datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: ["#00bcd4", "#26a69a", "#8e24aa", "#ffa726"],
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "Market Share by Region", color: "#333" },
        legend: { position: "bottom" }
      }
    }
  });

  // Line Chart (Growth)
  const lineCtx = document.getElementById("lineChart").getContext("2d");
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "User Growth (in thousands)",
        data: [5, 9, 14, 20, 26, 35],
        fill: true,
        borderColor: "#00bcd4",
        backgroundColor: "rgba(0,188,212,0.2)",
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: "#0097a7"
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: "User Growth Trend", color: "#333" },
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});