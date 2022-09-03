window.onload = run;

function run() {
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const status = document.getElementById("status");
  const boundary = document.getElementsByClassName("boundary");

  start.addEventListener("mouseenter", startGame);


  function startGame() {
    for (let index = 0; index < boundary.length; index++) {
      boundary[index].addEventListener("mouseenter", lose);
      boundary[index].style.backgroundColor ='#eeeeee'
    }
    end.addEventListener("mouseenter", win);
    status.innerText = "Good Luck";

  }

 
  function win() {

    for (let index = 0; index < boundary.length; index++) {
      boundary[index].removeEventListener("mouseenter", lose,false);
    }
    status.innerText = "You Win";

  }

  function lose() {
    for (let index = 0; index < boundary.length; index++) {
      boundary[index].style.backgroundColor = "red";
    }
    end.removeEventListener("mouseenter", win,false);
    status.innerText = "You lost";
  }


}
