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
        ruler.innerHTML = ruler.innerHTML + '<div class="ruler-hundred"><div class="number">' + currSet + '</div></div>';
      }
    }
  }

  function updateRulerPointer(side, event) {
    var origin = side == 'left' ? event.pageY : event.pageX;
    var offset = $('#app').offset();
    var relative = (origin - offset.left);
    if(side == 'left') {
      // minus 197 made the mouse position accurate for X
      $('.' + side + '-pointer').css('top', relative - 197);
    }else {
      // minus 33 made the mouse position accurate for Y
      $('.' + side + '-pointer').css('left', relative - 33);
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

  var panelOpen = true;
  $('.quick-panel-close').click(function() {
    if(!panelOpen) {
      panelOpen = true;
      $(this).css("transform", "rotate(-45deg)");
      $('.quick-panel').animate({
        height: "60px"
      }, 250, function() {
        // Animation complete.
      });
    }else {
      panelOpen = false;
      $(this).css("transform", "rotate(0deg)");
      // $(this).removeClass('resolve');
      $('.quick-panel').animate({
        height: "300px"
      }, 250, function() {
        // Animation complete.
      });
    }
  });

  createRuler('left');
  createRuler('top');
});
