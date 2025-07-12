window.addEventListener("DOMContentLoaded", () => {
  const animatorPaused = true;

  document.getElementById("startBtn").addEventListener("click", () => {
    console.log("Start animation triggered");
    // wire logic later
  });

  document.getElementById("pauseBtn").addEventListener("click", () => {
    console.log("Animation paused");
    // wire pause logic later
  });

  // Default setup: AU + today's date ±14d
  const today = new Date();
  const targetDate = today.toISOString().split("T")[0]; // e.g., "2025-07-13"

  console.log("Initializing with:", {
    country: "AU",
    date: targetDate,
    range: 29
  });

  // Future: load data + animate frames
});
