//create on click event when img is clicked
$(".crystal-image").on("click", function () {
    
    alert("You clicked a crystal!");

});
console.log('TEST');

//create counter to track total
var counter = 0;
$(".crystal-image").on("click", function () {
    
    counter += 1;
    
    alert("This crystal has been clicked!" + counter + "times!");
});
console.log('TEST2');

var counter = 0;
$(".crystal-image").on("click", function () {
    
    counter += 10;
    
    alert("New score is: " + couner);
});

//set target number to guess 
var targetNumber = 45;
$("#numberToGuess").text(targetNumber);

var counter = 0;

$(".crystal-image".on("click", function () {
    
    counter += 10;
    
    alert("New score is: " + counter);

})); 