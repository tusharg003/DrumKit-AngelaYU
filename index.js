var noOfbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfbuttons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonN = this.innerHTML;
    console.log(buttonN);
    makeSound(buttonN);
 
  });
}

document.addEventListener("keydown", function (event) {

  makeSound(event.key);

});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("/sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("/sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("/sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("/sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("/sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("/sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("/sounds/tom-4.mp3");
      audio.play();
      break;
  }
}

//  var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // console.log(e.currentTarget);
//     const clicked = e.currentTarget.classList;
//     // console.log(clicked);
//     if (clicked.contains("w")) {
//       var audio = new Audio("sounds/crash.mp3");
//       audio.play();
//     }
//     if(clicked.contains("a")){
//         var audio = new Audio("sounds/kick-bass.mp3");
//         audio.play();
//     }
//     if(clicked.contains("s")){
//         var audio = new Audio("sounds/snare.mp3");
//         audio.play();
//     }
//     if(clicked.contains("d")){
//         var audio=new Audio("sounds/tom-1.mp3");
//         audio.play();
//     }
//     if(clicked.contains("j")){
//         var audio = new Audio("sounds/tom-2.mp3");
//         audio.play();
//     }
//     if(clicked.contains("k")){
//         var audio = new Audio("sounds/tom-3.mp3");
//         audio.play();
//     }
//     if(clicked.contains("l")){
//         var audio=new Audio("sounds/tom-4.mp3");
//         audio.play();
//     }
//   });
// });

// var arr = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];

// for (var i = 0; i < 7; i++) {
//     document.querySelector(arr[i]).addEventListener("click", function () {

//     this.style.color="white";

//     });
// }

// const btns = document.querySelectorAll(".drum");
