// Set the date for the countdown
var countdownDate = new Date("April 30, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
