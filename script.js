// countdown_banner.js

document.addEventListener("DOMContentLoaded", function() {
    var countdownDate = new Date("June 15, 2024 00:00:00").getTime();

    // Update the countdown every second
    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown in the boxes
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerText = "EXPIRED";
        }
    }, 1000);

    window.addEventListener('scroll', function() {
        var body = document.body;
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var documentHeight = document.body.scrollHeight;

        // Calculate the distance from the bottom of the page
        var bottomDistance = documentHeight - (scrollPosition + windowHeight);

        // If the bottom distance is less than a certain threshold (e.g., 200 pixels), add the scrolled-white class
        if (bottomDistance < 200) {
            body.classList.add('scrolled-white');
        } else {
            body.classList.remove('scrolled-white');
        }
    });

    // Get the pathname of the current URL
    var pathname = window.location.pathname;

    // Check if the pathname corresponds to the third page
    if (pathname === "/path/to/your/third/page") {
        // Add a class to the body indicating that it's the third page
        document.body.classList.add("third-page");
    }
});

function redirectToNewPage() {
    window.location.href = "gallery.html";
}
