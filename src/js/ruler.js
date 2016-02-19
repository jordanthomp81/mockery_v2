// ;(function($){
//
//   $(function(){
//
//     alert('ready')
//     //
//     // for (var i = 0; i <= ; i++) {
//     //
//     // }
//
//   });
//
// }(jQuery));

$(document).ready(function () {

  function buildTopRuler() {
    $('.top-ruler').append('<div class="top-pointer"></div>').css('left', '0');
    $('.left-ruler').append('<div class="left-pointer"></div>').css('top', '0');
    var width = $('.top-ruler').width();
    var numOfMarks = Math.round(width / 100);
    var decimal = parseInt(String(width / 100).split('.')[1]) + 1;
    var currSet = 0;

    for (var i = 0; i < numOfMarks; i++) {

      var sizeFlag = true;
      for (var x = 0; x <= 18; x++) {
        if(sizeFlag == true) {
          // create five
          $('.top-ruler').append('<div class="ruler-five"></div>');
          sizeFlag = false;
        }else {
          // create ten
          $('.top-ruler').append('<div class="ruler-ten"></div>');
          sizeFlag = true;
        }
      }

      currSet += 100;
      var next = i + 1;
      if(next < numOfMarks) {
        $('.top-ruler').append('<div class="ruler-hundred"><h6 class="number">' + currSet + '</h6></div>');
      }else {
        $('.top-ruler').append('<div class="ruler-hundred"></div>');
      }
    }

    var sizeFlag = true;
    for (var j = 0; j < decimal; j++) {
      if(sizeFlag == true) {
        // create five
        $('.top-ruler').append('<div class="ruler-five"></div>');
        sizeFlag = false;
      }else {
        // create ten
        // $('.top-ruler').append('<div class="ruler-ten"></div>');
        sizeFlag = true;
      }
    }
  }

  $(document).on("mousemove", function(event) {
    var offset = $('#app').offset();
    var relativeX = (event.pageX - offset.left);
    var relativeY = (event.pageY - offset.top);
    console.log('moved')
    $('.top-pointer').css('left', relativeX - 33);
    $('.left-pointer').css('top', relativeY - 33);
  });

  buildTopRuler()
});
