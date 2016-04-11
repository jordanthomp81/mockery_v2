$(document).ready(function ($) {

  $(".quick-panel").draggable({
    containment: "parent"
  });

  var panelOpen = true;
  $('.quick-panel-close').click(function() {
    if(!panelOpen) {
      panelOpen = true;
      $(this).css("transform", "rotate(-45deg)");
      $('.quick-panel-elements').removeClass('resolved');
      $('.quick-panel-layers').removeClass('resolved');
      $('.quick-panel-undo').removeClass('resolved');
      $('.quick-panel-redo').removeClass('resolved');
      $('.quick-panel').animate({
        height: "50px"
      }, 150, function() {
        // Animation complete.
      });
    }else {
      panelOpen = false;
      $(this).css("transform", "rotate(0deg)");
      // $(this).removeClass('resolve');
      $('.quick-panel-elements').addClass('resolved');
      $('.quick-panel-layers').addClass('resolved');
      $('.quick-panel-undo').addClass('resolved');
      $('.quick-panel-redo').addClass('resolved');
      $('.quick-panel').animate({
        height: "275px"
      }, 150, function() {
        // Animation complete.
      });
    }
  });

  // function contains(haystack, needles) {
  //   return needles.map(function (needle) {
  //       return haystack.indexOf(needle);
  //   }).indexOf(-1) == -1;
  // }

  var panActive = false;
  var keys = {};

  function checkPan() {
    if(panActive) {
      $(".drawing_board").draggable('destroy');
      $('#pan').html('Pan (Ctrl + Alt + P)')
      $('.inner-board').removeClass('panning');
      $('.current-function').removeClass('active');
      $('.current-function > h6').html('');
      panActive = false;
    }else {
      $(".drawing_board").draggable({containment:  [-130, 0], snap: ".left-ruler, .top-ruler"});
      $('#pan').html('Stop Pan (Ctrl + Alt + P)')
      $('.inner-board').addClass('panning');
      $('.current-function > h6').html('Pan Tool Active');
      $('.current-function').addClass('active');
      panActive = true;
    }
  }

  $('#pan').click(function() {
    checkPan();
  });

  // $(document).keyup(function (e) {
  //     delete keys[e.which];
  //     // printKeys();
  // });

  // function printKeys() {
  //     var html = '';
  //     for (var i in keys) {
  //         if (!keys.hasOwnProperty(i)) continue;
  //         html += '<p>' + i + '</p>';
  //     }
  //     $('#out').html(html);
  // }

  // $(".drawing_board").draggable({containment:  [-130, 0], snap: ".left-ruler, .top-ruler"});
  $(".inner-board").resizable();

  var docWidth = $(window).width();
  var docHeight = $(window).height();
  console.log("Width " + docWidth)
  console.log("Height " + docHeight)
  $(".quick-panel").draggable({
    containment: [22, 152]
  });

  $('.quick-panel-undo').click(function() {
    $('.quick-panel-undo').addClass('active');
    setTimeout(function(){
      console.log('timed');
      $('.quick-panel-undo').removeClass('active');
    }, .0100);
  });

  $('.quick-panel-redo').click(function() {
    console.log('Fired');
    $('.quick-panel-redo').addClass('active');
    setTimeout(function(){
      console.log('timed');
      $('.quick-panel-redo').removeClass('active');
    }, .0100);
  });

});
