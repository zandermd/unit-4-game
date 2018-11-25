//create on click event when img is clicked
$(".crystal-image").on("click", function () {
    alert("You clicked a crystal!");
});

//create counbter to track total
var counter = 0;
$(".crystal-image").on("click", function () {
    counter += 1;
    alert("This crystal has been clicked!" + counter + "times!");
})