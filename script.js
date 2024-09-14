let scroollcontainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");

scroollcontainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scroollcontainer.scrollLeft += e.deltaY;
  scroollcontainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scroollcontainer.style.scrollBehavior = "smooth";
  scroollcontainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scroollcontainer.style.scrollBehavior = "smooth";
  scroollcontainer.scrollLeft -= 900;
});
