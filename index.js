const Value = document.querySelector("#value");
const btnDecrease = document.querySelector(".btn-DECREASE");
const btnReset = document.querySelector(".btn-RESET");
const btnIncrease = document.querySelector(".btn-INCREASE");

let count = 0;

function updateValue() {
    Value.textContent = count;
    if ( count > 0 ) {
        Value.style.color = "green";
    }
    if ( count < 0 ) {
        Value.style.color = "red";
    }
    if ( count === 0 ) {
        Value.style.color = "black";
    }
}
btnDecrease.addEventListener("click", () => {
  count--;
  updateValue();
});

btnIncrease.addEventListener("click", () => {
  count++;
  updateValue();
});

btnReset.addEventListener("click", () => {
count = 0;
updateValue();
});




// const value = document.querySelector("#value");
// const btnDecrease = document.querySelector(".btn-DECREASE");
// const btnReset = document.querySelector(".btn-RESET");
// const btnIncrease = document.querySelector(".btn-INCREASE");

// let count = 0;

// function updateValue() {
//     value.textContent = count;
// }

// btnDecrease.addEventListener("click", () => {
//     count--;
//     updateValue();
// });

// btnIncrease.addEventListener("click", () => {
//     count++;
//     updateValue();
// });

// btnReset.addEventListener("click", () => {
//     count = 0;
//     updateValue();
// });