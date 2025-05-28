let testText = "The quick brown fox jumps over the lazy dog."
let startTime;
let endTime;

function startTest(){
    // setting text for test
    document.getElementById("inputText").value = testText;

    // resetting results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // changing button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest(){
    endTime = new Date().getTime();

    // Disabling user input
    document.getElementById("userInput").readOnly = true;

    // Calculating time elapsed to get words per minute
    var timeElapsed = (endTime - startTime) / 1000; // to show seconds
    var userTypedText = document.getElementById("userInput").value;

    // Splitting text using regex top count words
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Displaying
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Total Length: " + testText.length + "</p>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Resetting the Button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;    
}