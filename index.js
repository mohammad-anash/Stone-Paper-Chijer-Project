const boxEl = document.querySelector(".box");
const boxEl1 = document.querySelector(".box1");
const boxEl2 = document.querySelector(".box2");
const btnEl = document.querySelector(".btn");

function RandomThings(arr) {
  let store = "";
  for (let i = 0; i < 1; i++) {
    const generat = Math.floor(Math.random() * arr.length);
    store += arr[generat];
  }
  return store;
}

function checkSameValue() {
  if (
    boxEl.textContent == boxEl2.textContent &&
    boxEl1.textContent == boxEl.textContent &&
    boxEl2.textContent == boxEl1.textContent
  ) {
    alert(`${boxEl.textContent} Winner`);
  }
}

btnEl.addEventListener("click", function () {
  boxEl.textContent = RandomThings(["Stone", "Paper", "Chijer"]);
  boxEl1.textContent = RandomThings(["Stone", "Paper", "Chijer"]);
  boxEl2.textContent = RandomThings(["Stone", "Paper", "Chijer"]);

  checkSameValue();
});
