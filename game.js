var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var started = false;

function nextSequence() {
    level++;
    $("h1").text("Level "+level);

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

$(".btn").on( "click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log(userChosenColour);
    checkAnswer(userClickedPattern[userClickedPattern.length - 1]); 
}

);

function playSound(name) {
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    var colour = currentColour;
    $(`#${colour}`).addClass("pressed");
   
    setTimeout(function() {
        $(`#${colour}`).removeClass('pressed');
    }, 100);
}

$(document).on("keydown", function() {
    if(started === false) {
       $("h1").text("Level "+level);
        nextSequence(); 
        started = true; 
    }  
});

var level = 0;

function checkAnswer(currentLevel) {

    if (currentLevel === gamePattern[userClickedPattern.length - 1]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length) {
           
            
            setTimeout(function() {
                userClickedPattern = [];
                nextSequence();
            }, 1000);
    
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $(document.body).addClass("game-over");
        setTimeout(function() {
            $(document.body).removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }

    console.log("user: " + userClickedPattern);
    console.log("game: " + gamePattern);
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}
