var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    
    $(`.${randomChosenColour}`)
    .fadeOut(100)
    .fadeIn(100);
    
    playSound(randomChosenColour);
}

nextSequence();

$(".btn").on( "click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log(userChosenColour);
} );

function playSound(name) {
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    var colour = currentColour;
    $(`#${colour}`).addClass("pressed")
    .delay(100)
    .queue(function(){
        $(this).removeClass('pressed');
    })
}