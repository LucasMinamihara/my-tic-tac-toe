let eachTurn = 0;

const allSquares = document.querySelectorAll(".square");
allSquares.forEach((eachSquare) => {
  eachSquare.addEventListener("click", function () {
    if (eachTurn) {
      this.style.backgroundColor = "red";
      eachTurn = 0;
    } else {
      this.style.backgroundColor = "blue";
      eachTurn = 1;
    }
  });
});
