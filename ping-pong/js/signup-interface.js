$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDeafault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to out list!</p>');
  });
});
