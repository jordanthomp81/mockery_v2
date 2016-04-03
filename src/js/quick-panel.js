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

  $(".drawing_board").draggable({containment:  [-130, 0], snap: "body, header"});
  $(".inner-board").resizable();

  $(".quick-panel").draggable({
    containment: "parent"
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
