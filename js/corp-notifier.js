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
      <li class='room'>Ставьте тех. время! <b>Например: 14:50-16:10</b></li>
      <li class='admins'>Напишите кол-во доп. админов в комментарии</li>
      <li class='anim'>Запишите аниматоров в таблицу, и предупредите глав. администратора</li>
    </ul>
  </div>`);
const notifyNote = $('div.notify');
notifyNote.children('ul').children('li').hide();
notifyNote.hide();

$(document).on('change', 'input.service-comment', function() {
  if (notifyNote.is(':hidden'))
    notifyNote.fadeIn(500);

  let service = $(this).val();

  if ( /(холл)|(зал)|(кухня)|(малый)|(№)/i.test(service) )
    $('li.room').fadeIn(500);
  if ( /(админ)|(доп)/i.test(service) )
    $('li.admins').fadeIn(500);
  if ( /(холл)/i.test(service) )
    $('li.vr').fadeIn(500);
  if ( /(аним)|(бум)|(шоу)|(диск)/i.test(service))
    $('li.anim').fadeIn(500);
});