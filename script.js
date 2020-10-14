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

  if (test) { console.log(storedPlans); }

  if (storedPlans !== null) {
    planTextArr = storedPlans;
  } else {
    planTextArr = new Array(9);
    planTextArr[4] = "Lunch date!";
  }

  if (test) { console.log("full array of plan text",planTextArr); }

  let $plannerDiv = $('#plannerContainer');
  $plannerDiv.empty();

  if (test) { console.log("current time",nowHour12); }

  for (let hour = 9; hour <= 17; hour++) {

    let index = hour -9;

    let $rowDiv = $('<div>');
    $rowDiv.addClass('row');
    $rowDiv.addClass('plannerRow');
    $rowDiv.attr('hour-index',hour);

    let $col12TimeDiv = $('<div>');
    $col12TimeDiv.addClass('col-md-2');

    var $timeBoxSpn = $('<span>');
    $timeBoxSpn.attr('class','timeBox');

    let displayHour = 0;
    let ampm = "";
    if (hour > 12) {
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }

    $timeBoxSpn.text(`${displayHour} ${ampm}`);

    $rowDiv.append($col12TimeDiv);
    $col12TimeDiv.append($timeBoxSpn);

    let $dailyPlanSpn = $('<input>');

    $dailyPlanSpn.attr('id', `input-${index}`);
    $dailyPlanSpn.attr('hour-index',index);
    $dailyPlanSpn.attr('type','text');
    $dailyPlanSpn.attr('class','dailyPlan');
    
  }

})