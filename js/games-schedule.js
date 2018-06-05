// This code is from file 'game-search.js' and basically inherites search buttons
// system, but because of lazines I just copy-pasted it and corrected to work with
// current link. It also depends on jQuery 

// Sorry future me

let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

// to correct dates
// ex. != 1.1.1970 but rather == 01.01.1970
function setCorrectDate(day, month, year) {
  let date;
  if (day < 10)
    day = "0" + day;
  if (month < 10)
    month = "0" + month;
  date = day + "." + month + "." + year;
  return date;
}

// SEARCH TODAY BUTTON
$(".input-group.date").after(
    "<button id='today-search' class='btn btn-primary'>Сегодня</button>");
$("#today-search").click(function(event) {
  event.preventDefault();
  $("#choose-date").val(setCorrectDate(day, month, year));
});

// SEARCH DAY BEFORE
// variables for day before
let beforeDay, beforeMonth, beforeYear;
$("#today-search").before(
  "<button id='before-day-search' class='btn btn-info'>-</button>");
$("#before-day-search").click(function(event) {
  event.preventDefault();
  if ($("#choose-date").val() == '')
    return;
  beforeDay = parseInt($("#choose-date").val().slice(0,2));
  beforeMonth = parseInt($("#choose-date").val().slice(3,5));
  beforeYear = parseInt($("#choose-date").val().slice(6,10));
  if (beforeDay > 1) {
    beforeDay--;
  } else {
    beforeDay = 31;
    if (beforeMonth > 1) {
      beforeMonth--;
    } else {
      beforeMonth = 12;
      beforeYear--;
    }
  }
  $("#choose-date").val(setCorrectDate(beforeDay, beforeMonth, beforeYear));
});

// SEARCH NEXT DAY BUTTON
// variables for the next date
let nextDay, nextMonth, nextYear;

$("#today-search").after("<button id='next-day-search' class='btn btn-info'>+</button>");
$("#next-day-search").click(function(event) {
  event.preventDefault();
  if ($("#choose-date").val() == '')
    return;
  nextDay = parseInt($("#choose-date").val().slice(0,2));
  nextMonth = parseInt($("#choose-date").val().slice(3,5));
  nextYear = parseInt($("#choose-date").val().slice(6,10));
  if (nextDay < 31) {
    nextDay++;
  } else {
    nextDay = 1;
    if (nextMonth < 12) {
      nextMonth++;
    } else {
      nextMonth = 1;
      nextYear++;
    }
  }
  $("#choose-date").val(setCorrectDate(nextDay, nextMonth, nextYear));
});

// styles for button
$("#today-search").css("padding", "5px 8px");
$("#next-day-search, #before-day-search").css("padding", "0px 20px");
$("#next-day-search, #before-day-search").css("font-size", "1.85rem");
$("#today-search, #next-day-search, #before-day-search").css("margin", "12px 2px");

// SELECT DEFAULT OPTIONS FOR GAMES STATUSES
$("#gamesearch-game_status_id").attr("size", "6");
$("#gamesearch-game_status_id option[value=3]").attr("selected", "true");
$("#gamesearch-game_status_id option[value=5]").attr("selected", "true");

// removes autocomplete with bunch of dates
$(document).ready(function(){ 
  $("input").attr("autocomplete", "off");
});