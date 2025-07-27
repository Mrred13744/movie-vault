function filterMovies(category) {
  const cards = document.querySelectorAll(".movie-card");
  const buttons = document.querySelectorAll(".filters button");

  cards.forEach(card => {
    const match = category === "all" || card.dataset.category === category;
    card.style.display = match ? "block" : "none";
  });

  buttons.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.filters button[onclick*="${category}"]`).classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const videoFile = urlParams.get("video");

  if (videoFile) {
    const videoEl = document.getElementById("player");
    const sourceEl = document.getElementById("source");

    if (videoEl && sourceEl) {
      sourceEl.src = `videos/${videoFile}`;
      videoEl.load();
    }
  }
});
