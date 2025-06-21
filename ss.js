function isOverlapping(elem1, elem2) {
  const rect1 = elem1.getBoundingClientRect();
  const rect2 = elem2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();

  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  let randomX, randomY;
  let attempts = 0;

  do {
    randomX = Math.random() * maxX;
    randomY = Math.random() * maxY;
    // Geçici pozisyon ver:
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    attempts++;
    if (attempts > 100) break; // Sonsuz döngüye girmesin
  } while (isOverlapping(noBtn, yesBtn));

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  noScale *= 0.9;
  yesScale *= 1.1;

  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;

  escapeCount++;
  if (escapeCount >= 8) {
    noBtn.innerText = "Artık kaçamam 😢";
    noBtn.disabled = true;
    noBtn.style.position = "relative";
    noBtn.style.left = "auto";
    noBtn.style.top = "auto";
  }
}
