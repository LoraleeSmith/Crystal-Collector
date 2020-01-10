var crystal = {
    blue: {
        name: "blue",
        value: 0,
    },
    pink: {
        name: "pink",
        value: 0,
    },
    yellow: {
        name: "yellow",
        value: 0,
    },
    red: {
        name: "red",
        value: 0,
    }
};

var luckyNumber = 0;
var total = 0;

var winCount = 0;
var lossCount = 0;

var currentScore = 0;
var targetScore = getRandom(19, 120);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

crystal.blue.value = getRandom(1, 12);
crystal.pink.value = getRandom(1, 12);
crystal.yellow.value = getRandom(1, 12);
crystal.red.value = getRandom(1, 12);


$("#luckyNumber").html(targetScore);

console.log(".......")
console.log("Target Score:" + targetScore);
console.log("Blue:" + crystal.blue.value + " | Pink:" + crystal.pink.value + " | Yellow:" + crystal.yellow.value + "| Red:" + crystal.red.value)
console.log("........")

var addValues = function (crystal) {
    currentScore = currentScore + crystal.value;

    checkWin();

    console.log("Your Score:" + currentScore);

    let scoreText = 'Total Score = '
    let completeScoreText = scoreText + currentScore
    $("#yourscore").html(completeScoreText);
}


function checkWin() {
    if (currentScore > targetScore) {
        alert("Not so lucky..");
        console.log("Not so lucky..");

        lossCount++;

        $("#loss").html(lossCount);

    }
    else if (currentScore == targetScore) {
        alert("A bright future for you!");
        console.log("A bright future for you!");

        winCount++;

        $("#win").html(winCount);

    }

}

$("#blue").click(function () {
    addValues(crystal.blue);
    console.log(crystal)
});

$("#pink").click(function () {
    addValues(crystal.pink);
});

$("#yellow").click(function () {
    addValues(crystal.yellow);
});

$("#red").click(function () {
    addValues(crystal.red);
});