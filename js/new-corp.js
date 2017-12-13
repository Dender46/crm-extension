// ---------- CORPACK INFO ----------
$('#corppack-source').val(1);
$('#corppack-source_comment').val('default_text');
$('#corppack-mode_id').val(15);

// ---------- DATE AND TIME ----------
$('#corppack-time_start').val('23:00');
$('#corppack-time_end').val('23:00');
$('#corppack-prepare_start').val('23:00');

// ---------- PREPAYMANT DETAILS ----------
$('#corppack-percent').val(0);
var prepayment = $('#corppack-prepayment');
prepayment.val(0);
// on hover
prepayment.on("hover", function() { prepayment.val('') });

var game = $('#corppack-game_price');
var hide_and_seek = $('#corppack-hide_and_seek_price');
var laser_tag = $('#corppack-laser_tag_price');
var vr = $('#corppack-vr_room_price');

game.val(0)
hide_and_seek.val(0)
laser_tag.val(0)
vr.val(0);

game.on("focus", function() { game.val('') })
hide_and_seek.on("focus", function() { hide_and_seek.val('') })
laser_tag.on("focus", function() { laser_tag.val('') })
vr.on("focus", function() { vr.val('') })
