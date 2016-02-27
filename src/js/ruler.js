$(document).ready(function () {

  function createRuler(side) {
    var currSet = 0;
    side = side == 'left' ? 'left' : 'top';
    var ruler = document.getElementById(side + '-ruler');
    // $ruler = $('#' + side + '-ruler');
    ruler.innerHTML = "";
    ruler.innerHTML = ruler.innerHTML + '<div class="number">' + currSet + '</div>';
    // $ruler.append('<div class="' + side + '-pointer"></div>').css(side, '0');
    ruler.innerHTML = ruler.innerHTML + '<div class="' + side + '-pointer"></div>';
    var size = side == 'left' ? ruler.clientHeight : ruler.clientWidth;
    var marks = Math.floor(size / 100);
    var decimal = (size / 100) % 1 != 0 ? parseInt(String(size / 100).split('.')[1].substring(0,1)) : 0;
    var currSet = 0;
    //
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
      // 197 made the position accurate
      $('.' + side + '-pointer').css('top', relative - 197);
    }else {
      // 33 made the position accurate
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

  createRuler('left');
  createRuler('top');
});
