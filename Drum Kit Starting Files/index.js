const drumBtn = document.querySelectorAll('.drum');

for (var i = 0; i < drumBtn.length; i++) {
    drumBtn[i].addEventListener('click', function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener('keypress', function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key) {

    switch (key) {
        case "w":
            var sound = new Audio('./sounds/tom-1.mp3');
            sound.play();
            break;
        case "a":
            var sound = new Audio('./sounds/tom-2.mp3');
            sound.play();
            break;
        case "s":
            var sound = new Audio('./sounds/tom-3.mp3');
            sound.play();
            break;
        case "d":
            var sound = new Audio('./sounds/tom-4.mp3');
            sound.play();
            break;

        case "j":
            var sound = new Audio('./sounds/snare.mp3');
            sound.play();
            break;
        case "k":
            var sound = new Audio('./sounds/crash.mp3');
            sound.play();
            break;
        case "l":
            var sound = new Audio('./sounds/kick-bass.mp3');
            sound.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(curKey) {
    var activeButton = document.querySelector("." + curKey);

    activeButton.classList.add('pressed');

    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 200);

}


// --------------------
/*
function ex(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2,
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
};

ex("keypress", function (e) {
    console.log(e);
})
*/