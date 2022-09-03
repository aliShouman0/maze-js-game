window.onload = run;

function run() {
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const status = document.getElementById("status");
  const game = document.getElementById("game");
  const boundary = document.getElementsByClassName("boundary");
  var score = 0;
  start.addEventListener("mouseenter", startGame);
  start.addEventListener("click", reset);
  function reset() {
    score = 0;
  }

  function startGame() {
    for (let index = 0; index < boundary.length; index++) {
      boundary[index].addEventListener("mouseenter", lose);
      boundary[index].style.backgroundColor = "#eeeeee";
    }
    game.addEventListener("mouseleave", cheat);
    end.addEventListener("mouseenter", win);
    status.innerText = "Good Luck your score: " + score;
  }

  function cheat() {
    for (let index = 0; index < boundary.length; index++) {
      boundary[index].style.backgroundColor = "red";
      boundary[index].removeEventListener("mouseenter", lose);
    }
    end.removeEventListener("mouseenter", win);
    status.innerText = "You lost your score: " + score;
  }

  function win() {
    score += 5;
    for (let index = 0; index < boundary.length; index++) {
      boundary[index].removeEventListener("mouseenter", lose);
    }
    status.innerText = "You Win your score: " + score;
    game.removeEventListener("mouseleave", cheat);
    end.removeEventListener("mouseenter", win);
  }

  function lose() {
    score -= 10;
    for (let index = 0; index < boundary.length; index++) {
      boundary[index].style.backgroundColor = "red";
      boundary[index].removeEventListener("mouseenter", lose);
    }
    end.removeEventListener("mouseenter", win);
    status.innerText = "You lost your score: " + score;
  }
}
