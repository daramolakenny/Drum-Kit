var clickIndex = document.querySelectorAll(".drum").length;

for (var i = 0; i<clickIndex; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    // console.log(this.style.color = "white");
    var buttonInnerHTML = this.innerHTML;
    
    switch (buttonInnerHTML) {
        case "w":
            var tom3 = new Audio("sound/tom-3.mp3");
            tom3.play();
            break;

        case "s":
            var snare = new Audio("sound/snare.mp3");
            snare.play();
            break;

        case "a":
            var tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
            break;

        case "j":
            var crash = new Audio("sound/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sound/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
            break;
    
        default: console.log(buttonInnerHTML);
    }
}
// var audio = new Audio("sound/tom-1.mp3");
// audio.play();

        // while loop
// var i;

// while(i<clickIndex){
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

//     i++;
// }

// function handleClick() {
//     alert("I got clicked");
// }
