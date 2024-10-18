const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const submit = document.getElementById("submit");
const btns = document.querySelectorAll(".btns button");
const selected = document.getElementById("selected");
const rating = document.getElementById("rating");
let ratings = "";
console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("error").style.display = "none";
    btns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    ratings = btn.innerHTML;
  });
});

submit.addEventListener("click", () => {
  if (ratings === "") {
    document.getElementById("error").style.display = "block";
  } else {
    box1.style.display = "none";
    box2.style.display = "flex";
    selected.innerText = `You selected ${ratings} out of 5`;
  }
});
