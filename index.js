// Select the dodger element
const dodger = document.querySelector("#dodger");

// Move the dodger left or right based on arrow key input
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    const leftPosition = parseInt(dodger.style.left);
    dodger.style.left = `${leftPosition - 5}px`;
  } else if (event.key === "ArrowRight") {
    const leftPosition = parseInt(dodger.style.left);
    dodger.style.left = `${leftPosition + 5}px`;
  }
});
