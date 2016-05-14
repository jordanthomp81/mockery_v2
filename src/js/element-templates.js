function circleTemplate() {
  var element = $('<div class="circle element draggable resizable"></div>');
  return element;
}

function rectangleTemplate() {
  var element = $('<div class="rectangle element draggable resizable"></div>');
  return element;
}

function textTemplate() {
  var element = $('<h6 class="text element draggable">Double Click to edit text</h6>');
  return element;
}
