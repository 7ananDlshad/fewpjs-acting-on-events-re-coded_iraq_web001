// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
  
<<<<<<< HEAD
  if(left>360){
    dodger.style.left = `${left - 1}px`;
  }
   if(left<360){
    dodger.style.left = `${left + 1}px`;
  }
  
}
=======
}


>>>>>>> 68e3100b3ca18c38ce844527ada0602c58f6b71e
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
<<<<<<< HEAD
   if (e.key === "ArrowRight") {
=======
   if (e.key === "ArrowLeft") {
>>>>>>> 68e3100b3ca18c38ce844527ada0602c58f6b71e
    moveDodgerRight();
  }
});

