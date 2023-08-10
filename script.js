function alteraPosicao() {
  const randomX = Math.random() * (window.innerWidth - movingLink.offsetWidth);
  console.log("X = " + randomX);
  const randomY =
    Math.random() * (window.innerHeight - movingLink.offsetHeight);
  console.log("Y = " + randomY);

  movingLink.style.left = randomX > 700 ? randomX / 2 : randomX + "px";
  movingLink.style.top = randomY > 550 ? randomY / 2 : randomY + "px";
}
