//create on click event when img is clicked
$(".buttons").on("click", function () {

    alert("You clicked a crystal!");

});
console.log('TEST');

//create counter to track total
var counter = 0;
$(".buttons").on("click", function () {

    counter += 1;

    alert("This crystal has been clicked!");

});
console.log('TEST2');

var counter = 0;
$(".buttons").on("click", function () {

    counter += 10;

    alert("New score is: " + counter);
});

//set target number to guess 
var targetNumber = 66;
$("#numberToGuess").text(targetNumber);

var counter = 0;
var numOptions = [10, 6, 4, 11];
var increment = numOptions[Math.round(Math.random())];

$(".buttons").on("click", function () {

    counter += 10;

    alert("New score is: " + counter);

    //if statement to see if the counter is mathching the targetNumber. this is an event, with each click the numbers get compared against the targetNumber.
    if (counter === targetNumber) {
        alert("You win!");
    }

    //if the users clicks dont match the total they will get the loose alert
    else if (counter >= targetNumber) {
        alert("You lose!");
    }

});

for (var i = 0; i < numOptions.length; i++) {
    var image = $("<img>");
    image.addClass("buttons");
    image.attr("src", "assets/images/crystal.jpeg");
    image.attr("data-imagevalue", numOptions[i]);
    $(".buttons").append(image);
}

$(".buttons").on("click", function () {
    var imagevalue = ($(this).attr("data-imagevalue"));
    imagevalue = parseInt(imagevalue);
    counter += imagevalue;
    alert("New Score: " + counter);
    if (counter === targetNumber) {
        alert("You win!");
    }
    else if (counter >= targetNumber) {
        alert("You loose!");
    }
});

