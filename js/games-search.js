$(document).ready(function() {
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
  $("#w0 fieldset:nth-of-type(1) .row:nth-of-type(4)").after(
      "<button id='today-search' class='btn btn-primary'>Сегодня</button>");
  $("#today-search").click(function(event) {
    event.preventDefault();
    $("#w1").val(setCorrectDate(day, month, year));
    $("#w2").val(setCorrectDate(day, month, year));
  });

  // SEARCH DAY BEFORE
  // variables for day before
  let beforeDay, beforeMonth, beforeYear;
  $("#today-search").before(
    "<button id='before-day-search' class='btn btn-info'>-</button>");
  $("#before-day-search").click(function(event) {
    event.preventDefault();
    if ($("#w1").val() == '')
      return;
    beforeDay = parseInt($("#w1").val().slice(0,2));
    beforeMonth = parseInt($("#w1").val().slice(3,5));
    beforeYear = parseInt($("#w1").val().slice(6,10));
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
    $("#w1").val(setCorrectDate(beforeDay, beforeMonth, beforeYear));
    $("#w2").val(setCorrectDate(beforeDay, beforeMonth, beforeYear));
  });

  // SEARCH NEXT DAY BUTTON
  // variables for the next date
  let nextDay, nextMonth, nextYear;

  $("#today-search").after("<button id='next-day-search' class='btn btn-info'>+</button>");
  $("#next-day-search").click(function(event) {
    event.preventDefault();
    if ($("#w1").val() == '')
      return;
    nextDay = parseInt($("#w1").val().slice(0,2));
    nextMonth = parseInt($("#w1").val().slice(3,5));
    nextYear = parseInt($("#w1").val().slice(6,10));
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
    $("#w1").val(setCorrectDate(nextDay, nextMonth, nextYear));
    $("#w2").val(setCorrectDate(nextDay, nextMonth, nextYear));
  });

  // styles for button
  $("#today-search").css("padding", "5px 8px");
  $("#next-day-search, #before-day-search").css("padding", "0px 20px");
  $("#next-day-search, #before-day-search").css("font-size", "1.85rem");
  $("#today-search, #next-day-search, #before-day-search").css("margin", "0 8px 8px 0");

  // SELECT DEFAULT OPTIONS FOR GAMES STATUSES
  $("#gamesearch-game_status_id").attr("size", "6");
  $("#gamesearch-game_status_id option[value=3]").attr("selected", "true");
  $("#gamesearch-game_status_id option[value=5]").attr("selected", "true");

});
