$(document).ready(function ($) {
  var panActive = false;
  var keys = {};

  function checkPan() {
    console.log('pan tool')
    if(panActive) {
      $(".drawing_board").draggable('destroy');
      $('#pan').html('Pan (Ctrl + Alt + P)')
      $('.inner-board').removeClass('panning');
      $('.current-function').removeClass('active');
      $('.current-function > h6').html('');
      panActive = false;
      currentFunctionActive = false;
    }else {
      $(".drawing_board").draggable({containment:  [-130, 0], snap: ".left-ruler, .top-ruler"});
      $('#pan').html('Stop Pan (Ctrl + Alt + P)')
      $('.inner-board').addClass('panning');
      $('.current-function > h6').html('Pan Tool Active');
      $('.current-function').addClass('active');
      panActive = true;
      currentFunctionActive = true;
    }
  }

  $('#pan').click(function() {
    checkPan();
  });
});
