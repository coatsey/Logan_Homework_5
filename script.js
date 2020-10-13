$(document).ready(function() {
  
  var test = false;

  var now = moment().format('MMMM Do YYYY');

  let nowHour24 = moment().format('H');
  let nowHour12 = moment().format('h');

  if (test) {
    nowHour24 = 13;
    nowHour12 = 1;
  }

  let $dateHeading = $('#navbar-subtitle');
  $dateHeading.text(now);

  var saveIcon = "./images/save-regular.svg";

  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

})