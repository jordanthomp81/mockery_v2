// Template Structure
// div.element.draggable.resizable -->
//   div.circle -->
//   span x 6
//   div.controls
//

function circleTemplate() {
  var element = $('<div class="element-container draggable resizable"><div class="circle element"></div><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function rectangleTemplate() {
  var element = $('<div class="element-container draggable resizable"><div class="rectangle element"></div><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function textTemplate() {
  var element = $(
  '<div class="element-container draggable">' +
    '<p class="text element">Double Click to edi t text</p>' +
    '<span></span><span></span><span></span><span></span>' +
    '<div class="animated fadeInUp sub-menu">' +
      '<svg class="element-settings-text-icon" xmlns="http://www.w3.org/2000/svg" width="20.12" height="17.19" viewBox="0 0 15.12 12.19"><g fill="#65BD61"><path d="M7.145 2.031h2.08v1.912h2.357V-.001H0v3.944h2.357V2.031h2.08v8.127H3.331v2.033h4.992v-2.033H7.145V2.031zm0 0"/><path d="M8.184 4.959V7.47H9.85V6.395h.9v4.361h-.693v1.436h3.191v-1.436h-.625V6.395h.832V7.47h1.664V4.959H8.184zm0 0"/></g></svg>' +
      '<h6 class="element-settings-headline">Text Controls</h6>' +
      '<hr class="element-settings-divider">' +
      '<div class="element-settings-container util-bold">' +
        '<svg class="element-settings-bold" xmlns="http://www.w3.org/2000/svg" width="11.56" height="13.7" viewBox="0 0 10.56 12.7"><path fill="#9B9A9A" d="M8.234 5.961c1.15-.511 1.803-1.468 1.803-2.688 0-1.085-.438-1.961-1.266-2.535C8.086.265 7.129.002 6.08.002H-.002v2.137h1.067v8.422H-.002v2.138h5.713c.931 0 2.261-.142 3.312-.814 1.02-.652 1.537-1.645 1.537-2.945.001-1.502-.876-2.605-2.326-2.979zm-2.82-.932H3.581v-2.89h1.641c1.632 0 2.294.398 2.294 1.376 0 1.252-1.145 1.514-2.102 1.514zm-1.833 2.2h1.938c1.794 0 2.527.467 2.527 1.613 0 1.141-.879 1.718-2.615 1.718h-1.85V7.229zm0 0"/></svg>' +
      '</div>' +
      '<div class="element-settings-container util-underline">' +
        '<svg class="element-settings-underline" xmlns="http://www.w3.org/2000/svg" width="10.3" height="14" viewBox="0 0 9 12.7"><g fill="#9B9A9A"><path d="M6.671.002v5.012c0 .745-.17 1.292-.512 1.641-.34.35-.889.521-1.646.521-.779 0-1.339-.172-1.679-.518-.338-.346-.508-.89-.508-1.632V.002H.022v6.192c0 1.1.388 1.967 1.163 2.6.777.634 1.867.949 3.27.949.931 0 1.735-.143 2.418-.426.682-.285 1.203-.696 1.563-1.23.36-.535.541-1.157.541-1.868V.002H6.671zm0 0M.022 10.733h8.955v1.965H.022z"/></g></svg>' +
      '</div>' +
      '<div class="element-settings-container util-left-align">' +
        '<svg class="element-settings-left-align" xmlns="http://www.w3.org/2000/svg" width="16.02" height="12.63" viewBox="0 0 16.02 12.63"><g fill="#9B9A9A"><path d="M0 10.83h7.447v1.802H0zM0 7.215h12.41v1.808H0zM0 3.606h16.019v1.807H0zM0-.002h11.056v1.807H0z"/></g></svg>' +
      '</div>' +
      '<div class="element-settings-container util-center-align">' +
        '<svg class="element-settings-center-align" xmlns="http://www.w3.org/2000/svg" width="14.86" height="12.63" viewBox="0 0 14.86 12.63"><g fill="#9B9A9A"><path d="M.057 10.83h14.802v1.802H.057zM.057 7.215h14.802v1.808H.057zM.002 3.606h14.856v1.807H.002zM.057-.002h14.802v1.807H.057z"/></g></svg>' +
      '</div>' +
      '<div class="element-settings-container util-right-align">' +
        '<svg class="element-settings-right-align" xmlns="http://www.w3.org/2000/svg" width="16.02" height="12.63" viewBox="0 0 16.02 12.63"><g fill="#9B9A9A"><path d="M8.572 10.83h7.446v1.802H8.572zM3.611 7.215h12.407v1.808H3.611zM.001 3.606h16.018v1.807H.001zM4.964-.002h11.055v1.807H4.964z"/></g></svg>' +
      '</div>' +
      '<div class="element-settings-container util-superscript">' +
        '<svg class="element-settings-superscript" xmlns="http://www.w3.org/2000/svg" width="17.93" height="16.7" viewBox="0 0 16.93 15.7"><g fill="#9B9A9A"><path d="M6.295 6.747h1.834v1.687h2.076V4.958H0v3.476h2.077V6.747H3.91v7.164h-.978v1.791h4.402V13.91H6.295V6.747zm0 0"/><text transform="translate(12.201 6.79)" font-family="SourceSansPro-Bold" font-size="8.18">1</text></g></svg>' +
      '</div>' +
      '<div class="element-settings-container util-subscript">' +
        '<svg class="element-settings-subscript" xmlns="http://www.w3.org/2000/svg" width="16.77" height="16.4" viewBox="0 0 15.77 15.4"><g fill="#9B9A9A"><path d="M6.296 1.788h1.832v1.687h2.079V-.001H.001v3.476h2.075V1.788h1.836V8.95h-.979v1.791h4.401V8.95H6.296V1.788zm0 0"/><text transform="translate(11.04 12.27)" font-family="SourceSansPro-Bold" font-size="8.18">2</text></g></svg>' +
      '</div>' +
    '</div>' +
  '</div>');
  return element;
}

function imageTemplate() {
  var element = $('<div class="element-container draggable resizable"><div class="image element"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#ecf0f1" d="M1 4.5h55v42H1z"/><path d="M57 47.5H0v-44h57v44zm-55-2h53v-40H2v40z" fill="#545e73"/><path fill="#545e73" d="M5 8.5h47v34H5z"/><path d="M53 43.5H4v-36h49v36zm-47-2h45v-32H6v32z" fill="#ecf0f1"/><circle cx="15" cy="17.069" r="4.569" fill="#f3d55a"/><path fill="#11a085" d="M51 32.611L50 31.5l-12-11L27.5 32l5.483 5.483L37 41.5h14z"/><path fill="#26b999" d="M6 41.5h31l-4.017-4.017-10.966-10.966L6 40.5z"/><circle cx="48" cy="44.5" r="12" fill="#71c386"/><path d="M54 43.5h-5v-5a1 1 0 0 0-2 0v5h-5a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z" fill="#fff"/></svg></div><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function linkTemplate() {
  var element = $('<div class="element-container draggable"><h6 class="link element draggable">This is a link</h6><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function checkboxTemplate() {
  var element = $('<div class="element-container draggable"><label class="checkbox element"><input class="checkbox" type="checkbox" />This is a checkbox</label><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function tableTemplate() {
  var element = $('<div class="element-container draggable resizable"><table class="table element"><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>John</td><td>Doe</td><td>80</td></tr></table><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function horizontalListTemplate() {
  var element = $('<div class="element-container draggable"><h6 class="horizontal-list element">One | Two | Three</h6><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function buttonTemplate() {
  var element = $('<div class="element-container draggable"><div class="button element"><h6>Click Me!</h6></div><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function bulletedListTemplate() {
  var element = $('<div class="element-container draggable"><ul class="bulleted-list element"><li>Coffee</li><li>Tea</li><li>Milk</li></ul><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}
