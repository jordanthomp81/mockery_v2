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
      // var sizeFlag = true;
      // for (var x = 0; x <= 18; x++) {
      //   if(sizeFlag == true) {
      //     // create five
      //     ruler.innerHTML = ruler.innerHTML + '<div class="ruler-five"></div>';
      //     sizeFlag = false;
      //   }else {
      //     // create ten
      //     ruler.innerHTML = ruler.innerHTML + '<div class="ruler-ten"></div>';
      //     sizeFlag = true;
      //   }
      // }

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
      // for (var i = 0; i < setArray.length; i++) {
      //   // ruler.innerHTML = ruler.innerHTML + '<span><h6 class="number">' + setArray[i] + '</h6></span>';
      //   // console.log(i)
      // }
      // ruler.innerHTML = ruler.innerHTML + '</div>';
    }
    //
    // var sizeFlag = true;
    // for (var j = 0; j < decimal * 2; j++) {
    //   if(sizeFlag == true) {
    //     // create five
    //     ruler.innerHTML = ruler.innerHTML + '<div class="ruler-five"></div>';
    //     sizeFlag = false;
    //   }else {
    //     // create ten
    //     ruler.innerHTML = ruler.innerHTML + '<div class="ruler-ten"></div>';
    //     sizeFlag = true;
    //   }
    // }
  }

  $(document).on("mousemove", function(event) {
    var leftCeiling = $('.left-ruler').offset().top;
    var offset = $('#app').offset();
    var relativeX = (event.pageX - offset.left);
    var relativeY = (event.pageY - offset.top);
    $('.top-pointer').css('left', relativeX - 33);
    $('.left-pointer').css('top', relativeY - 33);
  });

  $(window).resize(function() {
    createRuler('left');
    createRuler('top');
  });

  createRuler('left');
  createRuler('top');
});
