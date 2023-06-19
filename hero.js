var hero = document.getElementById("hero");
var background = document.getElementById("background");
let idleImageNumber = 0;
let runImageNumber = 0;
let attackImageNumber = 0;
let jumpImageNumber = 0;
let jumpAttackImageNumber = 0;
let walkImageNumber = 0;
let idleIntevalId;
let runIntevalId;
let jumpIntevalId;
let attackIntevalId;
let jumpAttackIntevalId;
let walkIntevalId;
let run = false;
var backgroundImagePosition = 0;
let moveBackgroundX;

window.addEventListener("keydown", changeAction);

// gameStart();
walkAnimationStart();
function gameStart(){
  // IdleAnimationStart();
  walkAnimationStart();
};
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

let jumpPositionY = 500;
let jumpY;

function jumpAnimation() {
  jumpImageNumber += 1;

  if (jumpImageNumber >= 11) {
    jumpImageNumber = 1;

    if(jumpImageNumber == 1){
      jumpPositionY = 500;
    jumpY = hero.style.marginTop = jumpPositionY + "px";

    clearInterval(jumpIntevalId);
    runAnimationStart();
    }

    
  }

  if (jumpImageNumber <= 6 && jumpImageNumber >= 2) {
     jumpPositionY = jumpPositionY - 30;
    jumpY = hero.style.marginTop = jumpPositionY + "px";
  }
  if (jumpImageNumber > 6) {
    jumpPositionY = jumpPositionY + 30;

    jumpY = hero.style.marginTop = jumpPositionY + "px";
  }

  hero.src = "images/Jump (" + jumpImageNumber + ").png";
}

function attackAnimation() {
  attackImageNumber += 1;

  if (attackImageNumber >= 11) {
    attackImageNumber = 1;
    clearInterval(attackIntevalId);
    IdleAnimationStart();
  }
  hero.src = "images/Attack (" + attackImageNumber + ").png";
}

function jumpAttackAnimation() {
  jumpAttackImageNumber += 1;

  if (jumpAttackImageNumber >= 11) {
    
    jumpAttackImageNumber = 1;

    if( jumpAttackImageNumber == 1){
      jumpPositionY = 500;
      hero.style.marginTop = jumpPositionY + "px";
      clearInterval(jumpAttackIntevalId);
      runAnimationStart();
    }
  }

  if (jumpAttackImageNumber <= 6 && jumpAttackImageNumber >= 2) {
    jumpPositionY -= 30;
    jumpY = hero.style.marginTop = jumpPositionY + "px";
  }
  if (jumpAttackImageNumber > 6) {
    jumpPositionY += 30;
    jumpY = hero.style.marginTop = jumpPositionY + "px";
  }
  hero.src = "images/JumpAttack (" + jumpAttackImageNumber + ").png";
}

function walkAnimation() {
  walkImageNumber += 1;

  if (walkImageNumber >= 11) {
    walkImageNumber = 1;
  }
  hero.src = "images/Walk (" + walkImageNumber + ").png";
}
// function heroDefaultPosition(){

//     jumpPositionY = 500;
    
//     hero.style.marginTop = jumpPositionY + "px";
// };

// function checkHeroPosition(){
//     setInterval(() => {
//         heroDefaultPosition();
//         console.log('hello');
//     }, 2000);
// };

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

function jumpAttackAnimationStart() {
  jumpAttackIntevalId = setInterval(jumpAttackAnimation, 75);
}

function walkAnimationStart() {
  walkIntevalId = setInterval(walkAnimation, 105);
}


function stopAttack() {
  let stopAttackHero = clearInterval(attackIntevalId);

  return stopAttackHero;
}

function changeAction(event) {
  let keyPressed = event.keyCode;

  console.log(keyPressed);
  const forwardRun = 39;
  const idlePosition = 37;
  const jumpPosition = 38;
  const attackPosition = 40;
  const attackStop = 71;
  const jumpAttackPosition = 86;
  const walkPosition = 13;

  switch (keyPressed) {
    case forwardRun:
      {
        clearInterval(runIntevalId);
        runAnimationStart();
        clearInterval(idleIntevalId);
        clearInterval(jumpIntevalId);
        clearInterval(attackIntevalId);
        clearInterval(walkIntevalId);
        clearInterval(moveBackgroundX);
        moveBackground();
        console.log("run");
      }

      break;
    case idlePosition:
      {
        clearInterval(idleIntevalId);
        IdleAnimationStart();
        clearInterval(runIntevalId);
        clearInterval(jumpIntevalId);
        clearInterval(walkIntevalId);
        clearInterval(attackIntevalId);
        clearInterval(moveBackgroundX);
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
        clearInterval(jumpAttackIntevalId);
        clearInterval(walkIntevalId);
        clearInterval(moveBackgroundX);
        moveBackground();
        console.log("jump");
        // checkHeroPosition();
        console.log(jumpY);
      }
      break;
    case attackPosition:
      {
        clearInterval(attackIntevalId);
        attackAnimationStart();
        attackAnimation();
        clearInterval(idleIntevalId);
        clearInterval(runIntevalId);
        clearInterval(jumpIntevalId);
        clearInterval(walkIntevalId);
        clearInterval(moveBackgroundX);
        console.log("attack");
      }
      break;
    case attackStop:
      {
        clearInterval(runIntevalId);
        clearInterval(attackIntevalId);
        clearInterval(idleIntevalId);
        clearInterval(walkIntevalId);
        clearInterval(moveBackgroundX);
        stopAttack();
        IdleAnimationStart();
      }
      break;
    case jumpAttackPosition:
      {
        clearInterval(jumpAttackIntevalId);
        clearInterval(idleIntevalId);
        clearInterval(runIntevalId);
        clearInterval(jumpIntevalId);
        clearInterval(walkIntevalId);
        clearInterval(moveBackgroundX);
        moveBackground();
        jumpAttackAnimationStart();
        // heroDefaultPosition();
        console.log("attackjump");
        console.log(jumpY);
        
      }
      break;
      case walkPosition:
        {
          clearInterval(jumpAttackIntevalId);
          clearInterval(idleIntevalId);
          clearInterval(runIntevalId);
          clearInterval(jumpIntevalId);
          clearInterval(moveBackgroundX);
          moveBackground();
          clearInterval(walkIntevalId);
          walkAnimationStart();
          console.log("walk");
          console.log(jumpY);
          
        }
        break;
  }
}

function changeBackground() {
  backgroundImagePosition -= 20;
  background.style.backgroundPositionX = backgroundImagePosition + "px";
}

function moveBackground() {
  moveBackgroundX = setInterval(changeBackground, 50);
}

function pauseBackground() {
  clearInterval(moveBackgroundX);
}
