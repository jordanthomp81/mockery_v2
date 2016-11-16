$(document).ready(function ($) {

  $('.quick-panel-elements').click(function() {
    if($('.elements-panel').hasClass('active')) {
      $('.elements-panel').addClass('fadeOutRight');
      $('.elements-panel').removeClass('fadeInRight');
      setTimeout(function() {
        $('.elements-panel').removeClass('active');
      }, 200);
    }else {
      $('.elements-panel').removeClass('fadeOutRight');
      $('.elements-panel').addClass('fadeInRight');
      $('.elements-panel').addClass('active');
    }
  });

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

  $('.quick-panel-undo').click(function() {
    $('.quick-panel-undo').addClass('active');
    setTimeout(function(){
      $('.quick-panel-undo').removeClass('active');
    }, .0100);
  });

  $('.quick-panel-redo').click(function() {
    $('.quick-panel-redo').addClass('active');
    setTimeout(function(){
      $('.quick-panel-redo').removeClass('active');
    }, .0100);
  });

});
