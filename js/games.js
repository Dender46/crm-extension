$(document).ready(function() {
  // SEARCH TODAY BUTTON
  $("#w0 fieldset:nth-of-type(1) .row:nth-of-type(4)").after(
      "<button id='today-search' class='btn btn-primary'>Сегодня</button>");
  $("#today-search").css("padding", "5px 8px"); // styles for button
  $("#today-search").css("margin-bottom", "8px");
  $("#today-search").click(function(event) {
    event.preventDefault();
    let date = new Date();
    $("#w1").val(date.getDate() + "." + (date.getMonth()+1) + "." +
        date.getFullYear());
    $("#w2").val(date.getDate() + "." + (date.getMonth()+1) + "." +
        date.getFullYear());
  });

  // SELECT DEFAULT OPTIONS FOR GAMES STATUSES
  $("#gamesearch-game_status_id").attr("size", "5");
  $("#gamesearch-game_status_id option[value=3]").attr("selected", "true");
  $("#gamesearch-game_status_id option[value=5]").attr("selected", "true");

  // DEFAULT TODAYS DATE FOR search
  $("#w1").val(date.getDate() + "." + (date.getMonth()+1) + "." +
      date.getFullYear());
  $("#w2").val(date.getDate() + "." + (date.getMonth()+1) + "." +
      date.getFullYear());
})
