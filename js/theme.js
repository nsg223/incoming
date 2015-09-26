//Code for showing the form & adding animation
$(document).ready(function () {
  $('[data-toggle="contact-form"]').click(function () {
    $('.contact-form').toggleClass('inactive')
    $('.contact-form').toggleClass('animated bounceInLeft')
  });
});
//Enabling Bootstrap Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//Countdown
// Set the date you need to count down to here
var target_date = new Date("Dec 25, 2015").getTime();


// variables for time units
var days, hours, minutes, seconds;
// get tag element
var cddays = document.getElementById("cddays");
var cdhours = document.getElementById('cdhours');
var cddminutes = document.getElementById('cdminutes');
var cdseconds = document.getElementById('cdseconds');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
// Seconds between current time and target time
var current_date = new Date().getTime();
var seconds_left = (target_date - current_date) / 1000;

// Calculate Time
days = parseInt(seconds_left / 86400);
seconds_left = seconds_left % 86400;
 
hours = parseInt(seconds_left / 3600);
seconds_left = seconds_left % 3600;
 
minutes = parseInt(seconds_left / 60);

seconds = parseInt(seconds_left % 60);
 
//Format the countdown
cddays.innerHTML = days;
cdhours.innerHTML = hours;
cdminutes.innerHTML = minutes;
cdseconds.innerHTML = seconds;
   
}, 1000);