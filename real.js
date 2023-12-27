const imgContainerE1 = document.querySelector(".img-container");

const btnE1 = document.querySelector(".btn");

let imageNum = 10;

btnE1.addEventListener("click", () => {
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
  const newImg = document.createElement("img");
  newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;

  imgContainerE1.appendChild(newImg);
  }
}