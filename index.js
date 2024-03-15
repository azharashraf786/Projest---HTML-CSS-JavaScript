function changeColor() {
  // document.getElementById("heading1").style.color = "red";
  document.getElementById("anchorTag").style.color = "red";
}

function restoreColor(){
  // document.getElementById("heading1").style.color = "black";
  document.getElementById("anchorTag").style.color = "#33FF33";
}

function hover(){
  document.getElementById("heading1").style.color = "aqua";
  document.getElementById("heading1").style.fontSize = "4rem";
  document.getElementById("heading1").textContent = "Thank You For Comming Here"
}

function resetHover(){
  document.getElementById("heading1").style.color = "orchid";
  document.getElementById("heading1").style.fontSize = "3rem";
  document.getElementById("heading1").textContent = "Hy, I am Syed Azhar Ashraf"
}


let button = document.getElementById("btn");
button.addEventListener("click", btnColor);

// function btnColor(){
//   document.getElementById("btn");
//   button.style.backgroundColor = "red";
// }

