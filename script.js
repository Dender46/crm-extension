// ---------- CORPACK INFO ----------
document.getElementById('corppack-source').value = 1;
document.getElementById('corppack-source_comment').value = 'default_text';
document.getElementById('corppack-mode_id').value = 15;

// ---------- DATE AND TIME ----------
document.getElementById('corppack-time_start').value = '23:00';
document.getElementById('corppack-time_end').value = '23:00';
document.getElementById('corppack-prepare_start').value = '23:00';

// ---------- PREPAYMANT DETAILS ----------
document.getElementById('corppack-percent').value = 0;
var prepayment = document.getElementById('corppack-prepayment');
prepayment.value = 0;
// on hover
prepayment.onfocus = function() { prepayment.value = '' };

var game = document.getElementById('corppack-game_price');
var hide_and_seek = document.getElementById('corppack-hide_and_seek_price');
var laser_tag = document.getElementById('corppack-laser_tag_price');
var vr = document.getElementById('corppack-vr_room_price');

game.value = hide_and_seek.value = laser_tag.value = vr.value = 0;

game.onfocus = function() { game.value = ''; };
hide_and_seek.onclick = function() { hide_and_seek.value = ''; };
laser_tag.onclick = function() { laser_tag.value = ''; };
vr.onclick = function() { vr.value = ''; };
