var hero = document.getElementById("hero");
var background = document.getElementById("background");
let idleImageNumber = 0;
let runImageNumber = 0;
let attackImageNumber = 0;
let jumpImageNumber = 0;
let idleIntevalId;
let runIntevalId;
let jumpIntevalId;
let attackIntevalId;
let run = false;
var backgroundImagePosition = 0;

window.addEventListener("keydown", changeAction);
// IdleAnimationStart();
// runAnimationStart();
// jumpAnimationStart();
// attackAnimationStart();

// gameStart();

// function gameStart(){
//     setInterval(moveBackground,100);
// }

function IdleAnimation() {
  idleImageNumber += 1;

  if (idleImageNumber >= 11) {
    idleImageNumber = 1;
  }
  hero.src = "images/idle (" + idleImageNumber + ").png";
}

function runAnimation() {
  runImageNumber += 1;
  run = true;

  if (runImageNumber >= 11) {
    runImageNumber = 1;
  }    
  if (run) {
    hero.src = "images/Run (" + runImageNumber + ").png";
  }
}

function jumpAnimation() {
  jumpImageNumber += 1;

  if (jumpImageNumber >= 11) {
    jumpImageNumber = 1;
  }
  hero.src = "images/Jump (" + jumpImageNumber + ").png";
}

function attackAnimation() {
  attackImageNumber += 1;

  if (attackImageNumber >= 11) {
    attackImageNumber = 1;
  }
  hero.src = "images/Attack (" + attackImageNumber + ").png";
}

function runAnimationStart() {
  runIntevalId = setInterval(runAnimation, 100);
}

function IdleAnimationStart() {
  idleIntevalId = setInterval(IdleAnimation, 100);
}

function jumpAnimationStart() {
  jumpIntevalId = setInterval(jumpAnimation, 100);
}

function attackAnimationStart() {
  attackIntevalId = setInterval(attackAnimation, 100);
}

function changeAction(event) {
  let keyPressed = event.keyCode;

  console.log(keyPressed);
  const forwardRun = 39;
  const idlePosition = 37;
  const jumpPosition = 38;
  const attackPosition = 40;

  switch (keyPressed) {
    case forwardRun:
      {
        clearInterval(runIntevalId);
        runAnimationStart();
        clearInterval(idleIntevalId);
        clearInterval(jumpIntevalId);
        clearInterval(attackIntevalId);
        console.log("run");
      }

      break;
    case idlePosition:
      {
        clearInterval(idleIntevalId);
        IdleAnimationStart();
        clearInterval(runIntevalId);
        clearInterval(jumpIntevalId);
        clearInterval(attackIntevalId);

        console.log("idle");
      }
      break;
    case jumpPosition:
      {
        clearInterval(jumpIntevalId);
        jumpAnimationStart();
        clearInterval(idleIntevalId);
        clearInterval(runIntevalId);
        clearInterval(attackIntevalId);

        console.log("jump");
      }
      break;
    case attackPosition:
      {
        clearInterval(attackIntevalId);
        attackAnimationStart();
        clearInterval(idleIntevalId);
        clearInterval(runIntevalId);
        clearInterval(jumpIntevalId);

        console.log("attack");
      }
      break;
  }
}

function moveBackground(){
    backgroundImagePosition -= 20;
    background.style.backgroundPositionX = backgroundImagePosition + "px";
}
