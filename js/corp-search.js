// corp status input
const corpStatus = document.querySelector("#corppacksearch-status_id");
// corp status input section
const corpStatusSection = document.querySelector("#w0 .row:nth-of-type(2) .field-corppacksearch-status_id");
corpStatus.setAttribute('size', 5);

// row where booked player should be
const searchRow = document.querySelector("#w0 .row:nth-of-type(2)");

const playerBooked = document.querySelector(".field-corppacksearch-player_booked_id");
searchRow.insertBefore(playerBooked, corpStatusSection);

// removes autocomplete with bunch of dates
$(document).ready(function(){ 
  $("input").attr("autocomplete", "off");
});