var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "V":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "E":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "D":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "A":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "N":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "T":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case "🤞":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}