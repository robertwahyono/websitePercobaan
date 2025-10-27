function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  statusText.textContent = "Terima kasih, pesan Anda telah terkirim!";
  form.reset();
});

// 📊 Data contoh untuk dashboard
const ctxBar = document.getElementById("chartBar");
const ctxDonut = document.getElementById("chartDonut");
const ctxLine = document.getElementById("chartLine");

// Grafik batang - Jumlah jamaah tiap bulan
new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [{
      label: "Jumlah Jamaah",
      data: [120, 150, 180, 160, 210, 230],
      backgroundColor: "#2e8b57"
    }]
  },
  options: { responsive: true, plugins: { legend: { display: false } } }
});

// Grafik donat - Persentase kegiatan
new Chart(ctxDonut, {
  type: "doughnut",
  data: {
    labels: ["Kajian", "Bakti Sosial", "Pengajian Anak", "Santunan"],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ["#2e8b57", "#45a36c", "#76c893", "#b5e48c"]
    }]
  },
  options: { responsive: true }
});

// Grafik garis - Tren kehadiran
new Chart(ctxLine, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [{
      label: "Kehadiran Jamaah",
      data: [110, 130, 180, 170, 210, 250],
      borderColor: "#2e8b57",
      backgroundColor: "rgba(46,139,87,0.2)",
      fill: true,
      tension: 0.3
    }]
  },
  options: { responsive: true }
});