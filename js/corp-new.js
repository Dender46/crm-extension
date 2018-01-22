// CORPACK INFO
$('#corppack-source').val(1);
$('#corppack-source_comment').val('default_text');
$('#corppack-mode_id').val(15);

//  DATE AND TIME
$('#corppack-time_start').val('23:00');
$('#corppack-time_end').val('23:00');
$('#corppack-prepare_start').val('23:00');

// PREPAYMANT DETAILS
// hiding corppack status unnecesary options
$('#corppack-status_id option:nth-of-type(1)').hide();
$('#corppack-status_id option[value=\'7\']').hide();
$('#corppack-status_id option[value=\'10\']').hide();

$('#corppack-percent').val(0);
const prepayment = $('#corppack-prepayment');
prepayment.val(0);
prepayment.on('focus', function() { prepayment.val('') });
prepayment.on('blur', function() {
  if (prepayment.val() > 0)
    $('#corppack-status_id').val(2);
});

// CORPPACK PRICES
const game = $('#corppack-game_price');
const hide_and_seek = $('#corppack-hide_and_seek_price');
const laser_tag = $('#corppack-laser_tag_price');
const vr = $('#corppack-vr_room_price');

game.val(0);
hide_and_seek.val(0);
laser_tag.val(0);
vr.val(0);

function handleInput(e) {
  if (e.type == 'focus' || e.type == 'focusin') {
    if ($(this).val() == 0)
      $(this).val('');
  }
  else {
    if ($(this).val() == '')
      $(this).val(0);
  }
}

game.focus(handleInput);
hide_and_seek.focus(handleInput);
laser_tag.focus(handleInput);
vr.focus(handleInput);

game.blur(handleInput);
hide_and_seek.blur(handleInput);
laser_tag.blur(handleInput);
vr.blur(handleInput);

// ADDITIONAL SERVICES PRICES
$(document).on('focus focusin', '.service-price', handleInput);
$(document).on('blur focusout', '.service-price', handleInput);

// Additional services notifier
$('table.services-table').after(
  `<div class='notify'>
    <span class='glyphicon glyphicon-warning-sign'></span><h3> Напоминание:</h3>
    <ul>
      <li class='vr'>Забронируйте VR если взяли холл</li>
      <li class='room'>Не забудьте проверить/поставить зал в календаре</li>
      <li class='admins'>Напишите кол-во доп. админов в комментарии</li>
    </ul>
  </div>`);
const notifyNote = $('div.notify');
notifyNote.children('ul').children('li').hide();
notifyNote.hide();

$(document).on('change', 'input.service-comment', function() {
  if (notifyNote.is(':hidden'))
    notifyNote.fadeIn(500);

  if ( /(холл)|(зал)/i.test($(this).val()) )
    $('li.room').fadeIn(500);
  if ( /(админ)|(доп)/i.test($(this).val()) )
    $('li.admins').fadeIn(500);
  if ( /(холл)/i.test($(this).val()) )
    $('li.vr').fadeIn(500);
});

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

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.farewell);
// });