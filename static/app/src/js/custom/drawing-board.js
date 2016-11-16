$(document).ready(function ($) {
  $(document).on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var targetClasses;
    var target = $(e.target).parent();
    if(target.attr('class') == undefined || target.attr('class').split(' ')[0] != 'element-container') {
      var tempTarget = target.parent();
      for (var b = 0; b < 3; b++) {
        if(tempTarget.hasClass('element-container')) {
          target = tempTarget;
          break;
        }else {
          tempTarget = tempTarget.parent();
        }
      }
    }

    targetClasses = target.attr('class').split(' ');
    if(targetClasses[0] == 'element-container' && !target.hasClass('active')) {
      $('.element-container').removeClass('active');
      target.toggleClass('active');
      currSelectedItem = target;
      isItemSelected = true;
    }else {
      if($(e.target).parents('.sub-menu').length == 1 || $(e.target).hasClass('sub-menu')) {
        // Do Nothing
      }else {
        $('.element-container').removeClass('active');
        isItemSelected = false;
      }
    }
  });

  function setEffect(effectName, e) {
    e.stopPropagation();
    e.preventDefault();
    var curr = currSelectedItem.children()[0];
    effectName = 'effect-' + effectName;
    if($(curr).hasClass(effectName)) {
      $(curr).removeClass(effectName);
    }else {
      $(curr).addClass(effectName);
    }
  }

  function clearAllJustify() {
    var curr = currSelectedItem.children()[0];
    $(curr).removeClass('effect-justify-left');
    $(curr).removeClass('effect-justify-center');
    $(curr).removeClass('effect-justify-right');
  }

  $(document).on('click','.element-settings-container', function(e) {
    switch($(this).attr('class').split(' ')[1]) {
      case 'util-bold':
        setEffect('bold', e);
        break;
      case 'util-underline':
        setEffect('underline', e);
        break;
      case 'util-left-align':
        clearAllJustify();
        setEffect('justify-left', e);
        break;
      case 'util-center-align':
        clearAllJustify();
        setEffect('justify-center', e);
        break;
      case 'util-right-align':
        clearAllJustify();
        setEffect('justify-right', e);
        break;
      default:
        console.log('no matches');
    }
  });

  // $(".drawing_board").draggable({containment:  [-130, 0], snap: ".left-ruler, .top-ruler"});
  $(".inner-board").resizable();

  var docWidth = $(window).width();
  var docHeight = $(window).height();
  $(".quick-panel").draggable({
    containment: [22, 152]
  });
});
