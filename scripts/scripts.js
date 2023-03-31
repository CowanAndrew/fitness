/* 
Student Name: Andrew Cowan
File Name: scripts.js
Date: 3/30/2023

*/

// Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionsource = document.getElementById("despsrc");


// Hamburger menu function

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");

    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

// Function is to display the burpees example video

function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionsource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

// Function to display the plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionsource.src = "media/plank-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

// Function to display the mountain climbers example video
function mountain() {
    videoSource.src = "media/mc.mp4";
    descriptionsource.src = "media/mountain-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

// Function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}