function RGB2Color(r, g, b) {
  return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
}

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);
}

$(document).ready(function ($) {

  var currentColor = '';
  var currSelectedColor = '';
  var currSelectedFrontColor = 11;
  var currSelectedBackColor = 7;
  var forefrontColor = '#51CAF3';
  var backgroundColor = '#E11D3C';
  var forefrontActiveFlag = true;
  var currentFunctionActive = false;
  var linkWidthHeight = false;

  function setCurrentColor() {
    var currInputVal = $('.color-input').val();
    if(currInputVal.length >= 3) {
      console.log(currInputVal[0] + currInputVal[1])
      $('.color-options').children().removeClass('active');
      // currInputVal = currInputVal[0] + currInputVal[1] + currInputVal[1] + currInputVal[2] + currInputVal[2] + currInputVal[3] + currInputVal[3];
    }
    $('.current-color').html('Current Color: ' + currInputVal);
    $('.current-color').html('Current Color: ' + currInputVal);
    $('.current-color-preview').css('background-color', currInputVal);
    $('.color-input').attr('value', '');
    // last problem was trying to get the $('.color-input') to equal none after color change
  }

  $('.color-input').bind('paste', function() {
    console.log('pasted')

    setTimeout(function () {
        var currInputLength = $('.color-input').val().length;

        if(currInputLength >= 2) {
          // input length > 4
          console.log('valid paste')
          setCurrentColor();
        }
    }, 0.005);
  });

  $('.color-input').keypress(function(e) {
    var currInputLength = $(this).val().length;
    if(e.which == 13) {
      console.log('entered');
      // if length is too short show in ui: border red
      setCurrentColor();
    }else {
      console.log('not enter key')
      if(currInputLength >= 3) {
        // input length > 4
        console.log('fired')
        setTimeout(function () {
          setCurrentColor();
        }, 0.005);
      }
    }
  });

  $('.swatch').dblclick(function() {
    var swatches = $('.swatch');
    swatches.removeClass('active');
    $(this).addClass('active');
  });

  $('.origin-item').click(function() {
    $('.origin-item').removeClass('active');
    $(this).addClass('active');
  });

  $('.colours > .sub-menu').hover(function() {
    $('.current-color').toggleClass('active');
    if(forefrontActiveFlag) {
      if($('.forefront-color').hasClass('no-color-selected')) {
        // set forefrontColor
        $('.current-color').html('No Color Selected');
      }
    }else {
      if($('.background-color').hasClass('no-color-selected')) {
        // set backgroundColor
        $('.current-color').html('No Color Selected');
      }
    }
  });

  $('.forefront-color').dblclick(function() {
    currentColor = forefrontColor;
    $('.current-color').html('Current Color: ' + currentColor);
    $('.colours > .sub-menu > h5').html('Primary Color Options');
    $('.current-color-preview').css('background-color', currentColor);
    forefrontActiveFlag = true;
    console.log('Selected Color: ' + currSelectedFrontColor);
    $('.color-options').children().removeClass('active');
    if(currSelectedFrontColor != '') {
      $('.color-options').children().eq(currSelectedFrontColor - 1).addClass('active')
    }
  });

  $('.background-color').dblclick(function() {
    currentColor = backgroundColor;
    $('.current-color').html('Current Color: ' + currentColor);
    $('.colours > .sub-menu > h5').html('Secondary Color Options');
    $('.current-color-preview').css('background-color', currentColor);
    forefrontActiveFlag = false;
    $('.color-options').children().removeClass('active');
    if(currSelectedBackColor != '') {
      $('.color-options').children().eq(currSelectedBackColor - 1).addClass('active')
    }
  });

  function getSelectedColor(object) {
    var clickedColor = '';
    $this = $(object);

    if(!$this.hasClass('no-check')) {
      $('.current-color-preview').removeClass('none-selected');
      $this.addClass('active');
      clickedColor = $this.css('backgroundColor').split('(')[1].split(')')[0];
      clickedColor = RGB2Color(clickedColor.split(',')[0], clickedColor.split(',')[1], clickedColor.split(',')[2]);
      $('.current-color').html('Current Color: ' + clickedColor)
      $('.current-color-preview').css('background-color', clickedColor)
      currentColor = clickedColor;
      if(forefrontActiveFlag) {
        $('.forefront-color').removeClass('no-color-selected');
      }else {
        $('.background-color').removeClass('no-color-selected');
      }
      return clickedColor;
    }else {
      $('.current-color-preview').addClass('none-selected');
      $('.current-color').html('No Color Selected');
      currentColor = clickedColor;

      if(forefrontActiveFlag) {
        $('.forefront-color').addClass('no-color-selected');
      }else {
        $('.background-color').addClass('no-color-selected');
      }
      return '#FFF';
    }
  }

  $('.color-option').click(function() {
    $('.color-option').removeClass('active');

    if(forefrontActiveFlag == true) {
      forefrontColor = getSelectedColor(this);
      $('.forefront-color').css('background-color', forefrontColor);
      currSelectedFrontColor = parseInt($(this).attr('data-pos-in-colors'));
    }else {
      backgroundColor = getSelectedColor(this);
      $('.background-color').css('background-color', backgroundColor);
      currSelectedBackColor = parseInt($(this).attr('data-pos-in-colors'));
    }
  });

  $('.link-width-height').click(function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      linkWidthHeight = false;
    }else {
      if(currentFunctionActive) {
        var prevText = $('.current-function > h6').html();
        $('.current-function > h6').html('Width & Height Linked');
        linkWidthHeight = true;
        setTimeout(function() {
          $('.current-function > h6').html(prevText);
        }, 3000);
      }else {
        $('.current-function > h6').html('Width & Height Linked');
        linkWidthHeight = true;
        $(this).addClass('active');
        $('.current-function').addClass('active');
        currentFunctionActive = true;
        setTimeout(function() {
          if(!panActive) {
            $('.current-function').removeClass('active');
            currentFunctionActive = false;
          }
        }, 3000);
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
      currentFunctionActive = false;
    }else {
      $(".drawing_board").draggable({containment:  [-130, 0], snap: ".left-ruler, .top-ruler"});
      $('#pan').html('Stop Pan (Ctrl + Alt + P)')
      $('.inner-board').addClass('panning');
      $('.current-function > h6').html('Pan Tool Active');
      $('.current-function').addClass('active');
      panActive = true;
      currentFunctionActive = true;
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
  $(".quick-panel").draggable({
    containment: [22, 152]
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
