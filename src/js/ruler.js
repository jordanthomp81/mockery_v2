$(document).ready(function ($) {

  function createRuler(side) {
    var currSet = 0;
    side = side == 'left' ? 'left' : 'top';
    var ruler = document.getElementById(side + '-ruler');
    ruler.innerHTML = "";
    ruler.innerHTML = ruler.innerHTML + '<div class="number">' + currSet + '</div>';
    ruler.innerHTML = ruler.innerHTML + '<div class="' + side + '-pointer"></div>';
    var size = side == 'left' ? ruler.clientHeight : ruler.clientWidth;
    var marks = Math.floor(size / 100);
    var decimal = (size / 100) % 1 != 0 ? parseInt(String(size / 100).split('.')[1].substring(0,1)) : 0;
    var currSet = 0;

    for (var i = 0; i < marks; i++) {
      currSet += 100;
      var setArray = ( "" + currSet).split("");

      if (side == 'left') {
        var tempRuler = '<div class="ruler-hundred"><h6 class="number">';
        for (var x = 0; x < setArray.length; x++) {
          tempRuler = tempRuler + '<span>' + setArray[x] + '</span>';
          var nextItem = x + 1;

          if(nextItem >= setArray.length) {
            tempRuler = tempRuler + '</h6></div>';
            ruler.innerHTML = ruler.innerHTML + tempRuler;
          }
        }
      }else {
        console.log(currSet)
        if(currSet == 100) {
          ruler.innerHTML = ruler.innerHTML + '<div class="ruler-hundred first"><div class="number">' + currSet + '</div></div>';
        }else {
          ruler.innerHTML = ruler.innerHTML + '<div class="ruler-hundred"><div class="number">' + currSet + '</div></div>';
        }
      }
    }
  }

  function updateRulerPointer(side, event) {
    var origin = side == 'left' ? event.pageY : event.pageX;
    var offset = $('#app').offset();
    var relative = (origin - offset.left);
    if(side == 'left') {
      // minus 197 made the mouse position accurate for X
      $('.' + side + '-pointer').css('top', relative - 153);
    }else {
      // minus 33 made the mouse position accurate for Y
      $('.' + side + '-pointer').css('left', relative - 23);
    }
  }

  $(document).on("mousemove", function(event) {
    updateRulerPointer('left', event);
    updateRulerPointer('top', event);
  });

  $(window).resize(function() {
    createRuler('left');
    createRuler('top');
  });

  $(".quick-panel").draggable({
    containment: "parent"
  });

  $('.nav-options li').on('click', '.sub-menu', function(event) {
      $('.nav-options li').off('hover');
      event.preventDefault();
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

  $(".edit-page-name").on("mouseover", function () {
      $(this).addClass('active');
  });

  $(".edit-page-name").on("mouseout", function () {
      $(this).removeClass('active');
  });
  // .off('hover');

  $('.nav-options li').click(function(){
     $(this).addClass('in-active');
  });

  $('.nav-options li').on('mouseleave', function(){
     $(this).removeClass('in-active');
  });

  $('#toggle-ruler').click(function() {
    $(this).html('Hide Rulers');
    if($('.top-ruler').is(":visible")) {
      $(this).html('Show Rulers (Ctrl + R)');
      $('.top-ruler').hide();
      $('.left-ruler').hide();
      $('.ruler-corner').hide();
    }else {
      $(this).html('Hide Rulers (Ctrl + R)');
      $('.top-ruler').show();
      $('.left-ruler').show();
      $('.ruler-corner').show();
    }
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

  createRuler('left');
  createRuler('top');
});
