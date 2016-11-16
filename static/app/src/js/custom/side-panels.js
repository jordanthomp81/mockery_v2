$(document).ready(function ($) {
  var currentColor = '';
  var currSelectedColor = '';
  var currSelectedFrontColor = 11;
  var currSelectedBackColor = 7;
  var forefrontColor = '#51CAF3';
  var backgroundColor = '#E11D3C';
  var forefrontActiveFlag = true;
  var linkWidthHeight = false;
  var selectedElements = [];
  var currId = $(".drawing_board").find("div").length + 1;
  var currDraggedElement;
  var isItemSelected = false;
  var currSelectedItem = '';

  $(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
      if($('.search-icon-container').hasClass('active')) {
        $('.search-category-dropdown').toggle();
        $('.search-icon-container').toggleClass('active');
      }
    }
  });

  $('.search-icon-alt').click(function() {
    $('.element-search').toggle();
    $('.element-search').addClass('fadeInUp');
    $('.element-search-alt').removeClass('fadeInUp');
    $('.element-search-alt').addClass('fadeInDown');
    $('.element-search-alt').toggle();
  });

  $('.search-icon').click(function() {
    $('.element-search').toggle();
    $('.element-search-alt').addClass('fadeInUp');
    $('.element-search').removeClass('fadeInUp');
    $('.element-search').addClass('fadeInDown');
    $('.element-search-alt').toggle();
  });

  function checkMultiple() {
    if(selectedElements.length >= 1) {
      $('.multiple-selected').addClass('active');
    }else {
      $('.multiple-selected').toggleClass('active');
    }
  }

  $('.selected-cancel-btn').click(function() {
    $('.multiple-selected').removeClass('active');
    $('.element-icon').removeClass('active');
    selectedElements = [];
  });

  $('.selected-create-btn').click(function() {
    for(var x=0; x < selectedElements.length; x++) {
      var currElement = selectedElements[x];
      currElement = currElement + "Template";
      createElement(window[currElement](), null, false);
    }
    $('.multiple-selected').removeClass('active');
    $('.element-icon').removeClass('active');
    selectedElements = [];
  });

  function createElement(element, mousePos, multi, dragOptions, resizeOptions) {
    var el = element;

    if(el.hasClass('draggable')) {
      if(dragOptions) {
        el = el.draggable(dragOptions);
      }else {
        el = el.draggable();
      }
    }

    if(el.hasClass('resizable')) {
      if(resizeOptions) {
        $(el.children()[0]).resizable(resizeOptions);
      }else {
        $(el.children()[0]).resizable();
      }
    }

    if(multi) {
      mousePos.top = parseInt(mousePos.top) - 198;
      mousePos.left = parseInt(mousePos.left) - 110;
      el.css('top', mousePos.top) // 198 is a random offset fix later
      el.css('left', mousePos.left) // 110 is a random offset fix later
    }
    $(".drawing_board").append(el);
    currId++;
  }

  var isDragging = false;
  var dragPos = { top: -1, left: -1 };
  $('.element-icon').mousedown(function() {
    currDraggedElement = $(this);
    isDragging = false;
  }).mousemove(function() {
    isDragging = true;
  }).on("dragend", function(event){
    dragPos.left = event.pageX;
    dragPos.top = event.pageY;
    var wasDragging = isDragging;
    isDragging = false;
    if (!wasDragging) {
      // console.log('not dragged')
    }else {
      var currElement = currDraggedElement.attr('data-element');
      var elementInitFunction = currElement + 'Init';
      currElement = currElement + "Template";
      createElement(window[currElement](), dragPos, true);
      window[elementInitFunction]();
    }
  });

  $('.element-icon').click(function() {
    if($(this).hasClass('active')) {
      var currArray = $(this).find('svg').attr('class').split('-');
      currArray.shift();
      currArray.pop();
      var tempArray = '';
      if(currArray.length >= 2) {
        for(var b=0; b < currArray.length; b++) {
          if(b>0) {
            var firstLetter = currArray[b][0].toUpperCase();
            var remainingText = currArray[b].substring(1, currArray[b].length)
            currArray[b] = firstLetter + remainingText;
          }
          tempArray += currArray[b];
        }
        currArray = [tempArray];
      }else {
        tempArray = currArray[0].toString();
        currArray = [tempArray];
      }
      for(var x=0; x <= selectedElements.length; x++) {
        if(currArray[0].toString() == selectedElements[x]) {
          delete selectedElements[x];
          selectedElements = jQuery.grep(selectedElements, function(n){ return (n); });
          break;
        }
      }
      $(this).removeClass('active');
      checkMultiple();
    }else {
      var currArray = $(this).find('svg').attr('class').split('-');
      var currArrayString = '';
      currArray.shift();
      currArray.pop();
      if(currArray.length >= 2) {
        for(var j=0; j < currArray.length; j++) {
          if(j>0) {
            var firstLetter = currArray[j][0].toUpperCase();
            var remainingText = currArray[j].substring(1, currArray[j].length)
            currArray[j] = firstLetter + remainingText;
          }
          currArrayString += currArray[j];
        }
      }else {
        currArrayString = currArray[0].toString();
      }
      $(this).addClass('active');
      selectedElements.push(currArrayString);
      checkMultiple();
    }
  });

  $('.element-panel-close-btn').click(function() {
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

  // Utility Bar

  function setCurrentColor() {
    var currInputVal = $('.color-input').val();
    if(currInputVal.length >= 3) {
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
    setTimeout(function () {
        var currInputLength = $('.color-input').val().length;

        if(currInputLength >= 2) {
          // input length > 4
          setCurrentColor();
        }
    }, 0.005);
  });

  $('.color-input').keypress(function(e) {
    var currInputLength = $(this).val().length;
    if(e.which == 13) {
      // if length is too short show in ui: border red
      setCurrentColor();
    }else {
      if(currInputLength >= 3) {
        // input length > 4
        setTimeout(function () {
          setCurrentColor();
        }, 0.005);
      }
    }
  });

  $("#eye-dropper").spectrum({
    localStorageKey: "spectrum.homepage",
    preferredFormat: "hex"
  });

  $("#eye-dropper").on('hide.spectrum', function(e, tinycolor) {
    var r = parseInt(tinycolor['_r']);
    var g = parseInt(tinycolor['_g']);
    var b = parseInt(tinycolor['_b']);
    var colorPickerHex = RGB2Color(r, g, b);

    if(forefrontActiveFlag) {
      currentColor = colorPickerHex.toString();
      forefrontColor = colorPickerHex.toString();
      $('.forefront-color').css('background-color', forefrontColor);
      $('.color-option').removeClass('active');
      $('.swatch').removeClass('no-color-selected');
      currSelectedFrontColor = '';
    }else {
      currentColor = colorPickerHex.toString();
      backgroundColor = colorPickerHex.toString();
      $('.background-color').css('background-color', backgroundColor);
      $('.color-option').removeClass('active');
      $('.swatch').removeClass('no-color-selected');
      currSelectedBackColor = '';
    }

    $('.current-color').html('Current Color: ' + colorPickerHex);
    $('.current-color-preview').css('background-color', colorPickerHex);
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

  $.widget("ui.actionSpinner", $.ui.spinner, {
      _format: function (value) {
          return value + 'px';
      },
      _parse: function (value) {
          return parseInt(value);
      }
  });

  $.widget("ui.heightSpinner", $.ui.spinner, {
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

  var percentInput = $('.action-input-percent').actionSpinnerPercent();
  var currVal = 0;

  function setLineHeight(el, lineHeight) {
    el.css('line-height', lineHeight);
  }

  function setLetterSpacing(el, letterSpacing) {
    el.css('letter-spacing', letterSpacing);
  }

  function setFontSize(el, fontSize) {
    el.css('font-size', fontSize);
  }

  $.widget("ui.lineheightspinner", $.ui.spinner, {
      _format: function (value) {
        setLineHeight($($(currSelectedItem).children()[0]), value + 'px');
        return value + 'px';
      },
      _parse: function (value) {
        return parseInt(value);
      }
  });

  $.widget("ui.letterspacingspinner", $.ui.spinner, {
      _format: function (value) {
        setLetterSpacing($($(currSelectedItem).children()[0]), value + 'px');
        return value + 'px';
      },
      _parse: function (value) {
        return parseInt(value);
      }
  });

  $.widget("ui.fontsizespinner", $.ui.spinner, {
      _format: function (value) {
        setFontSize($($(currSelectedItem).children()[0]), value + 'px');
        return value + 'px';
      },
      _parse: function (value) {
        return parseInt(value);
      }
  });

  $(document).on('change','.element-settings-character-dropdown', function(e) {
    $(currSelectedItem[0].firstChild).css('font-family', $($(currSelectedItem).children()[5]).find('.element-settings-character-dropdown option:selected').html())
  });
});
