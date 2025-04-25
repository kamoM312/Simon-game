var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
    console.log(randomNumber);
}

var randomChosenColour = buttonColours[nextSequence()];
console.log(randomChosenColour);
gamePattern.push(randomChosenColour);
console.log(gamePattern);

$(`.${randomChosenColour}`)
.fadeOut(100)
.fadeIn(100);

var audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
audio.play();

