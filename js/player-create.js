$(document).ready(function() {
  $("#player-phone").focus()

  $("#player-phone").on("blur", function(){
    let phoneNumber = $("#player-phone").val()
    $("#w0 > fieldset > div:nth-child(7) > section input").val(phoneNumber)
  })
})
