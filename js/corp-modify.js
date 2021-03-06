// PREPAYMANT DETAILS
// hiding corppack status unnecesary options
$('#corppack-status_id option:nth-of-type(1)').hide();
$('#corppack-status_id option[value=\'7\']').hide();
$('#corppack-status_id option[value=\'10\']').hide();

var prepayment = $('#corppack-prepayment');
var corppackStatus = $('#corppack-status_id');
prepayment.on('focus', handleInput);
prepayment.on('blur', function() {
  if ($(this).val() > 0 && corppackStatus.val() != 8)
    corppackStatus.val(2);
});

// CORPPACK PRICES
var game = $('#corppack-game_price');
var hide_and_seek = $('#corppack-hide_and_seek_price');
var laser_tag = $('#corppack-laser_tag_price');
var vr = $('#corppack-vr_room_price');

function handleInput(e) {
  if (e.type == 'focus') {
    if ($(this).val() == 0)
      $(this).val('');
  }
  else {
    if ($(this).val() == '')
      $(this).val(0);
  }
}

game.on('focus', handleInput);
hide_and_seek.on('focus', handleInput);
laser_tag.on('focus', handleInput);
vr.on('focus', handleInput);

game.on('blur', handleInput);
hide_and_seek.on('blur', handleInput);
laser_tag.on('blur', handleInput);
vr.on('blur', handleInput);

// some styling to pack prices on one Row and making it look pretty
$('div.form-group.field-corppack-game_price.required > section')
  .removeClass('col-4').addClass('col-3');
$('div.form-group.field-corppack-hide_and_seek_price.required > section')
  .removeClass('col-4').addClass('col-3');
$('div.form-group.field-corppack-laser_tag_price > section')
  .removeClass('col-4').addClass('col-3');
$('div.form-group.field-corppack-vr_room_price > section')
  .removeClass('col-4').addClass('col-3');
$('fieldset:nth-child(7) > div:nth-child(7) > fieldset').css('padding-bottom', '55px');

// Moving Date section to Player selection row to reduce space usage
const dateSection = $('fieldset:nth-child(5) > div > div.form-group.field-corppack-date.required > section');
const playerRow   = $('fieldset:nth-child(3) > div:nth-child(5)');
dateSection.prependTo(playerRow);

// removes autocomplete with bunch of dates
$(document).ready(function(){ 
  $("input").attr("autocomplete", "off");
});