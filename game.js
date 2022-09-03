window.onload = run;

function run() {
  //get all tags
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const status = document.getElementById("status");
  const game = document.getElementById("game");
  const boundary = document.getElementsByClassName("boundary");
  var score = 0;
  var lost = false;
  var timeOut;

  //adding Event Listener
  start.addEventListener("mouseover", startGame);
  start.addEventListener("click", reset);

  //when start click
  function reset() {
    status.innerText =
      'Resetting Game... \n Begin by moving your mouse over the "S"';
    lost = false;
    score = 0;
    removeEvent();
    if (timeOut != undefined) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(startGame, 1500);
  }

  //after 1500ms from clicking start or when mouseover/touch on it
  function startGame() {
    lost = false;
    for (let index = 0; index < boundary.length; index++) {
      boundary[index].addEventListener("mouseenter", lose);
      boundary[index].style.backgroundColor = "#eeeeee";
    }
    game.addEventListener("mouseleave", lose);
    end.addEventListener("mouseenter", win);
    status.innerText = "Game Starded Good Luck your score: " + score;
  }

  //when mouse enter/touch end div/box
  function win() {
    score += 5;
    lost = false;
    removeEvent();
    status.innerText = "You Win your score: " + score;
  }

  //when mouse enter/touch boundary/wall
  function lose() {
    lost = true;
    score -= 10;
    removeEvent();
    status.innerText = "You lost your score: " + score;
  }

  //removeEvent when lose or win
  //to keep code DRY
  function removeEvent() {
    for (let index = 0; index < boundary.length; index++) {
      if (lost) {
        boundary[index].style.backgroundColor = "red";
      }
      boundary[index].removeEventListener("mouseenter", lose);
    }
    game.removeEventListener("mouseleave", lose);
    end.removeEventListener("mouseenter", win);
  }
}
