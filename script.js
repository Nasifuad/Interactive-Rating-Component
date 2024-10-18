const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const submit = document.getElementById("submit");
const btns = document.querySelectorAll(".btns button");
const selected = document.getElementById("selected");
const rating = document.getElementById("rating");

console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    const rating = btn.innerHTML;
    selected.innerText = `You selected ${rating} out of 5`;
  });
});

submit.addEventListener("click", () => {
  box1.style.display = "none";
  box2.style.display = "flex";
});
