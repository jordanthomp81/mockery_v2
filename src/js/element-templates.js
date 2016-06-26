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

function imageTemplate() {
  var element = $('<div class="image element draggable resizable"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#ecf0f1" d="M1 4.5h55v42H1z"/><path d="M57 47.5H0v-44h57v44zm-55-2h53v-40H2v40z" fill="#545e73"/><path fill="#545e73" d="M5 8.5h47v34H5z"/><path d="M53 43.5H4v-36h49v36zm-47-2h45v-32H6v32z" fill="#ecf0f1"/><circle cx="15" cy="17.069" r="4.569" fill="#f3d55a"/><path fill="#11a085" d="M51 32.611L50 31.5l-12-11L27.5 32l5.483 5.483L37 41.5h14z"/><path fill="#26b999" d="M6 41.5h31l-4.017-4.017-10.966-10.966L6 40.5z"/><circle cx="48" cy="44.5" r="12" fill="#71c386"/><path d="M54 43.5h-5v-5a1 1 0 0 0-2 0v5h-5a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z" fill="#fff"/></svg></div>');
  return element;
}

function linkTemplate() {
  var element = $('<h6 class="link element draggable">This is a link</h6>');
  return element;
}

function checkboxTemplate() {
  var element = $('<label class="checkbox element draggable"><input class="checkbox" type="checkbox" />This is a checkbox</label>');
  return element;
}

function tableTemplate() {
  var element = $('<table class="table element draggable resizable"><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>John</td><td>Doe</td><td>80</td></tr></table>');
  return element;
}

function horizontalListTemplate() {
  var element = $('<h6 class="horizontal-list element draggable">One | Two | Three</h6>');
  return element;
}

function buttonTemplate() {
  var element = $('<div class="button element draggable"><h6>Click Me!</h6></div>');
  return element;
}

function bulletedListTemplate() {
  var element = $('<ul class="bulleted-list element draggable"><li>Coffee</li><li>Tea</li><li>Milk</li></ul>');
  return element;
}
