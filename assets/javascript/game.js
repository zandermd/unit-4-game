//make document ready to run javascript 
$(document).ready(function () {

    // make varibles to set inital value
    var wins = 0;
    var losses = 0;

    // generate random number & set random values to each crystal 
    var targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    var totalNumber = 0;
    var gemOne = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    var gemTwo = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    var gemThree = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    var gemFour = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

    // set winning score as a var and then = to a function. make if else to display wins if user adds crystals correctly or displays losses if user does not. reset after win/loss
    var winningScore = function () {
        //if user wins display win from HTML and VAR 
        if (totalNumber === targetNumber) {
            wins++
            $('.Wins').text(wins); //.text to pull from HTML class and display on the page
            //console.log(wins);
            reset();
            // adds a loss
        } else if (totalNumber > targetNumber) {
            losses++
            $('.Losses').text(losses); //.text to pull from to HTML class and display on the page
            //console.log(losses);
            // call to reset function
            reset();
        }
    };

    // make reset a var, create the function and call the function to ensure reset of target number & crystal values once user wins or looses 
    var reset = function () {
        targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        totalNumber = 0;
        gemOne = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        gemTwo = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        gemThree = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        gemFour = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        $('.winningNumber').text(targetNumber); //.text to pull from HTML and display the target number on the page
        $('.totalNumber').text(""); // .text to display gems hidden value 
        //console.log("resetcalled")
    };


    // set winning number to random target number           
    $('.winningNumber').text(targetNumber);
    //console.log(targetNumber);

    //total number is set to 0, when user adds gemOne it will set a new value from above gemOne set to Math.random. set total number to .text to pull from HTML class so it will display
    $('#firstClick').click(function () {
        totalNumber = totalNumber + gemOne;
        $('.totalNumber').text(totalNumber);
        winningScore()
        //console.log("gemOne", gemOne)
    });

    $('#secondClick').click(function () {
        totalNumber = totalNumber + gemTwo;
        $('.totalNumber').text(totalNumber);
        winningScore()
        

    });

    $('#thirdClick').click(function () {
        totalNumber = totalNumber + gemThree;
        $('.totalNumber').text(totalNumber);
        winningScore()
        
    });

    $('#fourthClick').click(function () {
        totalNumber = totalNumber + gemFour;
        $('.totalNumber').text(totalNumber);
        winningScore()
       

    });
});

