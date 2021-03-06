$(document).ready(function ($) {

  var prevDocSize = 0;

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
      $('.' + side + '-pointer').css('top', relative - 133);
    }else {
      // minus 33 made the mouse position accurate for Y
      $('.' + side + '-pointer').css('left', relative - 3);
    }
  }

  function setRulerWidth() {
    var canvasWidth = parseInt($(document).width() - 22);
    console.log(canvasWidth)
    $('.top-ruler').width(canvasWidth);
  }

  function setRulerHeight() {
    var canvasHeight = parseInt($(document).height() - 21);
    $('.left-ruler').height(canvasHeight);
  }

  $(document).on("mousemove", function(event) {
    updateRulerPointer('left', event);
    updateRulerPointer('top', event);
  });

  $(window).resize(function() {
    setRulerWidth();
    setRulerHeight();
    createRuler('left');
    createRuler('top');
  });

  $(window).scroll(function() {
    var currDocSize = $(document).width();
    if(prevDocSize == 0) { prevDocSize = currDocSize; }
    if(currDocSize > prevDocSize) {
      var canvasWidth = parseInt($(document).width() - 22);
      $('.top-ruler').width(canvasWidth);
      var canvasHeight = parseInt($(document).height() - 21);
      $('.left-ruler').height(canvasHeight);
      console.log('scrolled')
      $('.top-ruler').empty();
      $('.left-ruler').empty();
      createRuler('left');
      createRuler('top');
    }else {
      console.log('equal')
    }
    prevDocSize = currDocSize;
  });

  $('#toggle-ruler').click(function() {
    $(this).html('Hide Rulers');
    if($('.top-ruler').is(":visible")) {
      $(this).html('Show Rulers (Ctrl + R)');
      $('.top-ruler').empty();
      $('.left-ruler').empty();
      $('.top-ruler').hide();
      $('.left-ruler').hide();
      $('.ruler-corner').hide();
    }else {
      $(this).html('Hide Rulers (Ctrl + R)');
      $('.top-ruler').show();
      createRuler('top');
      $('.left-ruler').show();
      createRuler('left');
      $('.ruler-corner').show();
    }
  });

  var topOffset = parseInt($(".top-ruler").css('top')); //Grab the left position left first
  var leftOffset = parseInt($(".left-ruler").css('left')); //Grab the left position left first
  $(window).scroll(function(){
    $('.top-ruler').css({
        'top': $(this).scrollTop() + topOffset
    });
    $('.left-ruler').css('left', $(this).scrollLeft() + leftOffset);
  });

  setRulerWidth();
  setRulerHeight();
  createRuler('left');
  createRuler('top');

});
