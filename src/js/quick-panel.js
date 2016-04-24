function RGB2Color(r, g, b) {
  return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
}

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}

$(document).ready(function ($) {

  // var currentColor = '';
  var forefrontColor = '';
  var backgroundColor = '';
  var forefrontActiveFlag = true;

  $('.swatch').dblclick(function() {
    var swatches = $('.swatch');
    swatches.removeClass('active');
    $(this).addClass('active');
  });

  $('.colours > .sub-menu').hover(function() {
    $('.current-color').toggleClass('active');
  });

  $('.forefront-color').dblclick(function() {
    $('.colours > .sub-menu > h5').html('Primary Color Options');
    forefrontActiveFlag = true;
  });

  $('.background-color').dblclick(function() {
    $('.colours > .sub-menu > h5').html('Secondary Color Options')
    forefrontActiveFlag = false;
  });

  function getSelectedColor(object) {
    var clickedColor;
    $this = $(object);

    if(!$this.hasClass('no-check')) {
      $('.current-color-preview').removeClass('none-selected');
      $this.addClass('active');
      clickedColor = $this.css('backgroundColor').split('(')[1].split(')')[0];
      clickedColor = RGB2Color(clickedColor.split(',')[0], clickedColor.split(',')[1], clickedColor.split(',')[2]);
      $('.current-color').html('Current Color: ' + clickedColor)
      $('.current-color-preview').css('background-color', clickedColor)
      return clickedColor;
    }else {
      $('.current-color-preview').toggleClass('none-selected');
      $('.current-color').html('No Color Selected');
      return '#FFF';
    }
  }

  $('.color-option').click(function() {
    $('.color-option').removeClass('active');

    if(forefrontActiveFlag == true) {
      forefrontColor = getSelectedColor(this);
      console.log("Forefront: " + forefrontColor);
    }else {
      backgroundColor = getSelectedColor(this);
      console.log("Background: " + backgroundColor);
    }
    // if(!$(this).hasClass('no-check')) {
    //   $('.current-color-preview').removeClass('none-selected');
    //   $(this).addClass('active');
    //   currentColor = $(this).css('backgroundColor').split('(')[1].split(')')[0];
    //   currentColor = RGB2Color(currentColor.split(',')[0], currentColor.split(',')[1], currentColor.split(',')[2]);
    //   console.log(currentColor)
    //   $('.current-color').html('Current Color: ' + currentColor)
    //   $('.current-color-preview').css('background-color', currentColor)
    //   debugger
    //   // setCurrentColor();
    // }else {
    //   $('.current-color-preview').toggleClass('none-selected');
    //   $('.current-color').html('No Color Selected');
    // }
  });

  $('.link-width-height').click(function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.current-function').removeClass('active');
    }else {
      $(this).addClass('active');
      $('.current-function > h6').html('Width & Height Linked');

      if(!$('.current-function').hasClass('active')) {
        $('.current-function').addClass('active');
      }
    }
  });

  $(".quick-panel").draggable({
    containment: "parent"
  });

  $.widget("ui.actionSpinner", $.ui.spinner, {
      _format: function (value) {
          return value + 'px';
      },
      _parse: function (value) {
          return parseInt(value);
      }
  });

  $.widget("ui.actionSpinnerPercent", $.ui.spinner, {
      _format: function (value) {
          return value + '%';
      },
      _parse: function (value) {
          return parseInt(value);
      }
  });

  var xInput = $('.action-input').actionSpinner();
  // debugger
  var percentInput = $('.action-input-percent').actionSpinnerPercent();
  // percentInput.actionSpinnerPercent("disable");

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
