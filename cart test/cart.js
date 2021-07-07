function hide() {
  document.querySelector(".first-div").style.display = "none";
}
function rev() {
  document.querySelector(".first-div").style.display = "block";
  console.log(event.target.classList);
}
let Test = function (Name, modal, price) {
  this.Name = Name;
  this.modal = modal;
  this.price = price;
  Test.ArrayOfObjects.push(this);
};
Test.ArrayOfObjects = [];
new Test(`ahmad`, 6363, 200);
Test.prototype.gg = function () {
  localStorage.setItem(this.Name, JSON.stringify(Test.ArrayOfObjects));
  return console.log("ahmad");
};
console.log(Test.ArrayOfObjects);
console.log(Test.ArrayOfObjects[0].gg());
// function ahmad(hhh) {
//   this.ahmad = [1, 3];
//   this.hhh = hhh;
//   ahmad.aaa.push(this);
// }
// ahmad.aaa = [];
// new ahmad("gggg");
// console.log(ahmad);
// console.log(ahmad.aaa);
Test.prototype.clearMemory = function () {
  localStorage.clear();
};

const del = document.querySelector("body");
window.addEventListener("click", revel);
const div = document.querySelector(".first-div");
function revel(event) {
  console.log(event.currentTarget);

  if (event.target.classList.value === `cart`) {
    if (div.style.display === "block") {
      hide();
    } else {
      rev();
      console.log("hi");
      document.querySelector(".jj").textContent = `Hi ${getls()[0].Name}`;
      document.getElementsByTagName("span")[1].textContent = `Hi ${
        getls()[0].modal
      }`;
      document.getElementsByTagName("span")[2].textContent = `Hi ${
        getls()[0].price
      }`;
    }
  } else if (
    event.target.classList.value === `jj` ||
    event.target.classList.value === `first-div`
  ) {
    console.log(event.target.classList);
    rev();
  } else {
    hide();
  }
}
function getls() {
  return JSON.parse(localStorage.getItem(Test.ArrayOfObjects[0].Name));
}
console.log(getls()[0].Name);
