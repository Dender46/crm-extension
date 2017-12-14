$(document).ready(function() {

  let date = new Date()
  // today date
  let todayDate = date.getDate() + "." + (date.getMonth()+1) + "." +
  date.getFullYear()
  // tomorrow date
  let tomorrowDate = (date.getDate()+1) + "." + (date.getMonth()+1) + "." +
  date.getFullYear()

  // SEARCH TODAY BUTTON
  $("#w0 fieldset:nth-of-type(1) .row:nth-of-type(4)").after(
      "<button id='today-search' class='btn btn-primary'>Сегодня</button>");
  $("#today-search").click(function(event) {
    event.preventDefault()
    $("#w1").val(todayDate)
    $("#w2").val(todayDate)
  });

  // SEARCH TOMORROW BUTTON
  $("#today-search").after("<button id='tmrw-search' class='btn btn-info'>Завтра</button>")
  $("#tmrw-search").click(function(event) {
    event.preventDefault()
    $("#w1").val(tomorrowDate)
    $("#w2").val(tomorrowDate)
  });

  $("#today-search, #tmrw-search").css("padding", "5px 8px"); // styles for button
  $("#today-search, #tmrw-search").css("margin", "0 8px 8px 0");

  // SELECT DEFAULT OPTIONS FOR GAMES STATUSES
  $("#gamesearch-game_status_id").attr("size", "5")
  $("#gamesearch-game_status_id option[value=3]").attr("selected", "true")
  $("#gamesearch-game_status_id option[value=5]").attr("selected", "true")

  // DEFAULT TODAYS DATE FOR search
  $("#w1").val(todayDate)
  $("#w2").val(todayDate)
})
