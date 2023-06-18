var hero = document.getElementById('hero');
let idleImageNumber = 0;
let runImageNumber = 0;
let attackImageNumber = 0;
let jumpImageNumber = 0;
let idleIntevalId;
let runIntevalId;
let jumpIntevalId;
let attackIntevalId;

// window.addEventListener("keydown",changeAction);
// IdleAnimationStart();
// runAnimationStart();
// jumpAnimationStart();
// attackAnimationStart();

function IdleAnimation(){
    idleImageNumber += 1;

    if(idleImageNumber >= 11){
        idleImageNumber = 1;
    }
    hero.src = "images/idle ("+idleImageNumber+").png";
};

function runAnimation(){
    runImageNumber += 1;

    if(runImageNumber >= 11){
        runImageNumber = 1;
    }
    hero.src = "images/Run ("+runImageNumber+").png";
};

function jumpAnimation(){
    jumpImageNumber += 1;

    if(jumpImageNumber >= 11){
        jumpImageNumber = 1;
    }
    hero.src = "images/Jump ("+jumpImageNumber+").png";
};

function attackAnimation(){
    attackImageNumber += 1;

    if(attackImageNumber >= 11){
        attackImageNumber = 1;
    }
    hero.src = "images/Attack ("+attackImageNumber+").png";
};

function runAnimationStart(){
    runIntevalId = setInterval(runAnimation,100);
};

function IdleAnimationStart(){
    idleIntevalId = setInterval(IdleAnimation,100);
};

function jumpAnimationStart(){
    jumpIntevalId = setInterval(jumpAnimation,100);
};

function attackAnimationStart(){
    attackIntevalId = setInterval(attackAnimation,100);
};


// function changeAction(event){
//      let keyPressed = event.keyCode;
     
//      console.log(keyPressed);
//      const forwardRun = 39;
//      const idlePosition = 38;

//      switch(keyPressed){
//         case forwardRun:{
//               IdleAnimationStart();
//               clearInterval(runIntevalId);
//             //   console.log("run");
//         }         
        
//         break;
//         case idlePosition:{

//             runAnimationStart();
//             clearInterval(idleIntevalId);

//             // console.log("idle");
//         }
//         break;
//      }
// }





