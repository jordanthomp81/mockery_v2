// Template Structure
// div.element.draggable.resizable -->
//   div.circle -->
//   span x 6
//   div.controls
//

function circleTemplate() {
  var element = $('<div class="element-container draggable resizable"><div class="circle"></div><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function rectangleTemplate() {
  var element = $('<div class="element-container draggable resizable"><div class="rectangle"></div><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function textTemplate() {
  var element = $(
  '<div class="element-container draggable">' +
    '<h6 class="text">Double Click to edit text</h6>' +
    '<span></span><span></span><span></span><span></span>' +
    '<div class="animated fadeInUp sub-menu">' +
      '<svg class="element-settings-text-icon" xmlns="http://www.w3.org/2000/svg" width="20.12" height="17.19" viewBox="0 0 15.12 12.19"><g fill="#65BD61"><path d="M7.145 2.031h2.08v1.912h2.357V-.001H0v3.944h2.357V2.031h2.08v8.127H3.331v2.033h4.992v-2.033H7.145V2.031zm0 0"/><path d="M8.184 4.959V7.47H9.85V6.395h.9v4.361h-.693v1.436h3.191v-1.436h-.625V6.395h.832V7.47h1.664V4.959H8.184zm0 0"/></g></svg>' +
      '<h6 class="element-settings-headline">Text Controls</h6>' +
      '<hr class="element-settings-divider">' + 
    '</div>' +
  '</div>');
  return element;
}

function imageTemplate() {
  var element = $('<div class="element-container draggable resizable"><div class="image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#ecf0f1" d="M1 4.5h55v42H1z"/><path d="M57 47.5H0v-44h57v44zm-55-2h53v-40H2v40z" fill="#545e73"/><path fill="#545e73" d="M5 8.5h47v34H5z"/><path d="M53 43.5H4v-36h49v36zm-47-2h45v-32H6v32z" fill="#ecf0f1"/><circle cx="15" cy="17.069" r="4.569" fill="#f3d55a"/><path fill="#11a085" d="M51 32.611L50 31.5l-12-11L27.5 32l5.483 5.483L37 41.5h14z"/><path fill="#26b999" d="M6 41.5h31l-4.017-4.017-10.966-10.966L6 40.5z"/><circle cx="48" cy="44.5" r="12" fill="#71c386"/><path d="M54 43.5h-5v-5a1 1 0 0 0-2 0v5h-5a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z" fill="#fff"/></svg></div><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function linkTemplate() {
  var element = $('<div class="element-container draggable"><h6 class="link element draggable">This is a link</h6><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function checkboxTemplate() {
  var element = $('<div class="element-container draggable"><label class="checkbox"><input class="checkbox" type="checkbox" />This is a checkbox</label><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function tableTemplate() {
  var element = $('<div class="element-container draggable resizable"><table class="table"><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>John</td><td>Doe</td><td>80</td></tr></table><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function horizontalListTemplate() {
  var element = $('<div class="element-container draggable"><h6 class="horizontal-list">One | Two | Three</h6><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function buttonTemplate() {
  var element = $('<div class="element-container draggable"><div class="button"><h6>Click Me!</h6></div><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function bulletedListTemplate() {
  var element = $('<div class="element-container draggable"><ul class="bulleted-list"><li>Coffee</li><li>Tea</li><li>Milk</li></ul><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}
