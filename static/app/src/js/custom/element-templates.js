// Template Structure
// div.element.draggable.resizable -->
//   div.circle -->
//   span x 6
//   div.controls
//

function circleTemplate() {
  var element = $('<div class="element-container shape draggable resizable"><div class="circle element"></div><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function circleInit(currEl) {

}

function rectangleTemplate() {
  var element = $(
  '<div class="element-container shape draggable resizable">' +
    '<div class="rectangle element"></div>' +
    '<span class="border-ball-one"></span><span class="border-ball-two"></span><span class="border-ball-three"></span><span class="border-ball-four"></span>' +
  '</div>');
  return element;
}

function rectangleInit(currEl) {

}

function textTemplate() {
  var element = $(
  '<div class="element-container content text-container draggable">' +
    '<p class="text element">Double Click to edit text</p>' +
    '<span class="border-ball-one"></span><span class="border-ball-two"></span><span class="border-ball-three"></span><span class="border-ball-four"></span>' +
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
      '<h6 class="element-settings-character-heading">Character</h6>' +
      '<select class="element-settings-character-dropdown">' +
        '<option value="beji">Source Sans Pro</option>' +
        '<option value="volvo">Pridi</option>' +
        '<option value="saab">Archivo Black</option>' +
        '<option value="mercedes">Bungee Shade</option>' +
        '<option value="audi">Chewy</option>' +
        '<option value="mercedes">Lobster Two</option>' +
        '<option value="mercedes">Comfortaa</option>' +
        '<option value="mercedes">Yellowtail</option>' +
        '<option value="mercedes">Dancing Script</option>' +
        '<option value="mercedes">Quicksand</option>' +
        '<option value="mercedes">Pacifico</option>' +
        '<option value="mercedes">Bree Serif</option>' +
        '<option value="mercedes">Noto Serif</option>' +
        '<option value="mercedes">PT Serif</option>' +
        '<option value="mercedes">Baloo Da</option>' +
        '<option value="mercedes">Lora</option>' +
        '<option value="mercedes">Oswald</option>' +
        '<option value="mercedes">Denk One</option>' +
        '<option value="mercedes">Open Sans</option>' +
        '<option value="mercedes">Roboto</option>' +
      '</select>' +
      '<svg class="element-settings-line-height-icon" xmlns="http://www.w3.org/2000/svg" width="13.48" height="20.4" viewBox="0 0 13.48 20.4"><g fill="#9B9A9A"><path d="M10.922 2.54h1.201v1.102h1.357V1.37H6.807v2.271h1.357V2.54h1.199v4.682h-.64v1.174h2.879V7.222h-.68V2.54zm0 0M10.922 13.175h1.201v1.104h1.357v-2.271H6.807v2.271h1.357v-1.104h1.199v4.683h-.64v1.174h2.879v-1.174h-.68v-4.683zm0 0"/><g><path d="M1.836 20.401L.918 19.23 0 18.06h3.672l-.918 1.17z"/><path d="M1.293 2.34h1.086v15.72H1.293zM1.838-.001l.916 1.17.918 1.171H0l.918-1.171z"/></g></g></svg>' +
      '<input class="element-settings-line-height-input" value="27" min="0" max="100">' +
      '<svg class="element-settings-letter-spacing-icon" xmlns="http://www.w3.org/2000/svg" width="22.1" height="14.81" viewBox="0 0 22.1 14.81"><g fill="#9B9A9A"><path d="M6.218 1.27h1.301v1.193H8.99V.002H1.76v2.461h1.471V1.27H4.53v5.072h-.695v1.271h3.119V6.342h-.736V1.27zm0 0M17.569 1.268h1.301v1.195h1.471V.002h-7.23v2.461h1.471V1.268h1.299V6.34h-.693v1.271h3.117V6.34h-.734V1.268zm0 0"/><g><path d="M22.101 12.818l-1.27.993-1.268.996v-3.979l1.268.994z"/><path d="M2.536 12.229h17.027v1.178H2.536zM-.001 12.816l1.268-.992 1.269-.996v3.979l-1.269-.994z"/></g></g></svg>' +
      '<input class="element-settings-letter-spacing-input" value="0" min="0" max="100">' +
      '<svg class="element-settings-font-size-icon" xmlns="http://www.w3.org/2000/svg" width="12.58" height="10.14" viewBox="0 0 12.58 10.14"><g fill="#9B9A9A"><path d="M5.944 1.689h1.731V3.28h1.959V-.002H.002V3.28h1.961V1.689h1.729V8.45h-.919v1.691h4.149V8.45h-.978V1.689zm0 0"/><path d="M6.808 4.124v2.089h1.388v-.896h.747v3.629h-.576v1.195h2.656V8.946h-.521V5.317h.69v.896h1.385V4.124H6.808zm0 0"/></g></svg>' +
      // '<svg class="element-settings-font-size-icon" xmlns="http://www.w3.org/2000/svg" width="13.48" height="20.4" viewBox="0 0 13.48 20.4"><g fill="#9B9A9A"><path d="M10.922 2.54h1.201v1.102h1.357V1.37H6.807v2.271h1.357V2.54h1.199v4.682h-.64v1.174h2.879V7.222h-.68V2.54zm0 0M10.922 13.175h1.201v1.104h1.357v-2.271H6.807v2.271h1.357v-1.104h1.199v4.683h-.64v1.174h2.879v-1.174h-.68v-4.683zm0 0"/><g><path d="M1.836 20.401L.918 19.23 0 18.06h3.672l-.918 1.17z"/><path d="M1.293 2.34h1.086v15.72H1.293zM1.838-.001l.916 1.17.918 1.171H0l.918-1.171z"/></g></g></svg>' +
      '<input class="element-settings-font-size-input" value="27" min="0" max="100">' +
    '</div>' +
  '</div>');
  return element;
}

function textInit(currEl) {
  var heightInput = $(currEl).find('.element-settings-line-height-input').lineheightspinner();
  var letterSpacingInput = $(currEl).find('.element-settings-letter-spacing-input').letterspacingspinner();
  var fontSizeInput = $(currEl).find('.element-settings-font-size-input').fontsizespinner();
  console.log('text element created');
}

function imageTemplate() {
  var element = $(
  '<div class="element-container shape image-container draggable resizable">' +
    '<div class="image element">' +
      '<svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#ecf0f1" d="M1 4.5h55v42H1z"/><path d="M57 47.5H0v-44h57v44zm-55-2h53v-40H2v40z" fill="#545e73"/><path fill="#545e73" d="M5 8.5h47v34H5z"/><path d="M53 43.5H4v-36h49v36zm-47-2h45v-32H6v32z" fill="#ecf0f1"/><circle cx="15" cy="17.069" r="4.569" fill="#f3d55a"/><path fill="#11a085" d="M51 32.611L50 31.5l-12-11L27.5 32l5.483 5.483L37 41.5h14z"/><path fill="#26b999" d="M6 41.5h31l-4.017-4.017-10.966-10.966L6 40.5z"/><circle cx="48" cy="44.5" r="12" fill="#71c386"/><path d="M54 43.5h-5v-5a1 1 0 0 0-2 0v5h-5a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z" fill="#fff"/></svg>' +
    '</div>' +
    '<span class="border-ball-one"></span><span class="border-ball-two"></span><span class="border-ball-three"></span><span class="border-ball-four"></span>' +
  '</div>');
  return element;
}

function imageInit() {

}

function linkTemplate() {
  // var element = $('<div class="element-container draggable"><h6 class="link element draggable">This is a link</h6><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  var element = $(
  '<div class="element-container content link-container draggable">' +
    '<p class="link element">This is a link</p>' +
    '<span class="border-ball-one"></span><span class="border-ball-two"></span><span class="border-ball-three"></span><span class="border-ball-four"></span>' +
    '<div class="animated fadeInUp sub-menu">' +
      '<svg class="element-settings-text-icon" xmlns="http://www.w3.org/2000/svg" width="20.12" height="17.19" viewBox="0 0 15.12 12.19"><g fill="#65BD61"><path d="M7.145 2.031h2.08v1.912h2.357V-.001H0v3.944h2.357V2.031h2.08v8.127H3.331v2.033h4.992v-2.033H7.145V2.031zm0 0"/><path d="M8.184 4.959V7.47H9.85V6.395h.9v4.361h-.693v1.436h3.191v-1.436h-.625V6.395h.832V7.47h1.664V4.959H8.184zm0 0"/></g></svg>' +
      '<h6 class="element-settings-headline">Link Controls</h6>' +
      '<hr class="element-settings-divider">' +
      '<div class="element-settings-container util-left-align">' +
        '<svg class="element-settings-left-align" xmlns="http://www.w3.org/2000/svg" width="16.02" height="12.63" viewBox="0 0 16.02 12.63"><g fill="#9B9A9A"><path d="M0 10.83h7.447v1.802H0zM0 7.215h12.41v1.808H0zM0 3.606h16.019v1.807H0zM0-.002h11.056v1.807H0z"/></g></svg>' +
      '</div>' +
      '<div class="element-settings-container util-center-align">' +
        '<svg class="element-settings-center-align" xmlns="http://www.w3.org/2000/svg" width="14.86" height="12.63" viewBox="0 0 14.86 12.63"><g fill="#9B9A9A"><path d="M.057 10.83h14.802v1.802H.057zM.057 7.215h14.802v1.808H.057zM.002 3.606h14.856v1.807H.002zM.057-.002h14.802v1.807H.057z"/></g></svg>' +
      '</div>' +
      '<div class="element-settings-container util-right-align">' +
        '<svg class="element-settings-right-align" xmlns="http://www.w3.org/2000/svg" width="16.02" height="12.63" viewBox="0 0 16.02 12.63"><g fill="#9B9A9A"><path d="M8.572 10.83h7.446v1.802H8.572zM3.611 7.215h12.407v1.808H3.611zM.001 3.606h16.018v1.807H.001zM4.964-.002h11.055v1.807H4.964z"/></g></svg>' +
      '</div>' +
      '<h6 class="element-settings-character-heading">Character</h6>' +
      '<select class="element-settings-character-dropdown">' +
        '<option value="beji">Source Sans Pro</option>' +
        '<option value="volvo">Pridi</option>' +
        '<option value="saab">Archivo Black</option>' +
        '<option value="mercedes">Bungee Shade</option>' +
        '<option value="audi">Chewy</option>' +
        '<option value="mercedes">Lobster Two</option>' +
        '<option value="mercedes">Comfortaa</option>' +
        '<option value="mercedes">Yellowtail</option>' +
        '<option value="mercedes">Dancing Script</option>' +
        '<option value="mercedes">Quicksand</option>' +
        '<option value="mercedes">Pacifico</option>' +
        '<option value="mercedes">Bree Serif</option>' +
        '<option value="mercedes">Noto Serif</option>' +
        '<option value="mercedes">PT Serif</option>' +
        '<option value="mercedes">Baloo Da</option>' +
        '<option value="mercedes">Lora</option>' +
        '<option value="mercedes">Oswald</option>' +
        '<option value="mercedes">Denk One</option>' +
        '<option value="mercedes">Open Sans</option>' +
        '<option value="mercedes">Roboto</option>' +
      '</select>' +
      '<svg class="element-settings-line-height-icon" xmlns="http://www.w3.org/2000/svg" width="13.48" height="20.4" viewBox="0 0 13.48 20.4"><g fill="#9B9A9A"><path d="M10.922 2.54h1.201v1.102h1.357V1.37H6.807v2.271h1.357V2.54h1.199v4.682h-.64v1.174h2.879V7.222h-.68V2.54zm0 0M10.922 13.175h1.201v1.104h1.357v-2.271H6.807v2.271h1.357v-1.104h1.199v4.683h-.64v1.174h2.879v-1.174h-.68v-4.683zm0 0"/><g><path d="M1.836 20.401L.918 19.23 0 18.06h3.672l-.918 1.17z"/><path d="M1.293 2.34h1.086v15.72H1.293zM1.838-.001l.916 1.17.918 1.171H0l.918-1.171z"/></g></g></svg>' +
      '<input class="element-settings-line-height-input" value="27" min="0" max="100">' +
      '<svg class="element-settings-letter-spacing-icon" xmlns="http://www.w3.org/2000/svg" width="22.1" height="14.81" viewBox="0 0 22.1 14.81"><g fill="#9B9A9A"><path d="M6.218 1.27h1.301v1.193H8.99V.002H1.76v2.461h1.471V1.27H4.53v5.072h-.695v1.271h3.119V6.342h-.736V1.27zm0 0M17.569 1.268h1.301v1.195h1.471V.002h-7.23v2.461h1.471V1.268h1.299V6.34h-.693v1.271h3.117V6.34h-.734V1.268zm0 0"/><g><path d="M22.101 12.818l-1.27.993-1.268.996v-3.979l1.268.994z"/><path d="M2.536 12.229h17.027v1.178H2.536zM-.001 12.816l1.268-.992 1.269-.996v3.979l-1.269-.994z"/></g></g></svg>' +
      '<input class="element-settings-letter-spacing-input" value="0" min="0" max="100">' +
      '<svg class="element-settings-font-size-icon" xmlns="http://www.w3.org/2000/svg" width="12.58" height="10.14" viewBox="0 0 12.58 10.14"><g fill="#9B9A9A"><path d="M5.944 1.689h1.731V3.28h1.959V-.002H.002V3.28h1.961V1.689h1.729V8.45h-.919v1.691h4.149V8.45h-.978V1.689zm0 0"/><path d="M6.808 4.124v2.089h1.388v-.896h.747v3.629h-.576v1.195h2.656V8.946h-.521V5.317h.69v.896h1.385V4.124H6.808zm0 0"/></g></svg>' +
      // '<svg class="element-settings-font-size-icon" xmlns="http://www.w3.org/2000/svg" width="13.48" height="20.4" viewBox="0 0 13.48 20.4"><g fill="#9B9A9A"><path d="M10.922 2.54h1.201v1.102h1.357V1.37H6.807v2.271h1.357V2.54h1.199v4.682h-.64v1.174h2.879V7.222h-.68V2.54zm0 0M10.922 13.175h1.201v1.104h1.357v-2.271H6.807v2.271h1.357v-1.104h1.199v4.683h-.64v1.174h2.879v-1.174h-.68v-4.683zm0 0"/><g><path d="M1.836 20.401L.918 19.23 0 18.06h3.672l-.918 1.17z"/><path d="M1.293 2.34h1.086v15.72H1.293zM1.838-.001l.916 1.17.918 1.171H0l.918-1.171z"/></g></g></svg>' +
      '<input class="element-settings-font-size-input" value="27" min="0" max="100">' +
    '</div>' +
  '</div>');
  return element;
}

function linkInit() {
  var heightInput = $('.element-settings-line-height-input').lineheightspinner();
  var letterSpacingInput = $('.element-settings-letter-spacing-input').letterspacingspinner();
  var fontSizeInput = $('.element-settings-font-size-input').fontsizespinner();
}

function checkboxTemplate() {
  var element = $(
  '<div class="element-container content checkbox-container draggable">' +
    '<label class="checkbox element"><input class="checkbox" type="checkbox" />This is a checkbox</label>' +
    '<span class="border-ball-one"></span><span class="border-ball-two"></span><span class="border-ball-three"></span><span class="border-ball-four"></span>' +
    '<div class="animated fadeInUp sub-menu">' +
      '<svg class="element-settings-text-icon" xmlns="http://www.w3.org/2000/svg" width="20.12" height="17.19" viewBox="0 0 15.12 12.19"><g fill="#65BD61"><path d="M7.145 2.031h2.08v1.912h2.357V-.001H0v3.944h2.357V2.031h2.08v8.127H3.331v2.033h4.992v-2.033H7.145V2.031zm0 0"/><path d="M8.184 4.959V7.47H9.85V6.395h.9v4.361h-.693v1.436h3.191v-1.436h-.625V6.395h.832V7.47h1.664V4.959H8.184zm0 0"/></g></svg>' +
      '<h6 class="element-settings-headline">Link Controls</h6>' +
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
      '<h6 class="element-settings-character-heading">Character</h6>' +
      '<select class="element-settings-character-dropdown">' +
        '<option value="beji">Source Sans Pro</option>' +
        '<option value="volvo">Pridi</option>' +
        '<option value="saab">Archivo Black</option>' +
        '<option value="mercedes">Bungee Shade</option>' +
        '<option value="audi">Chewy</option>' +
        '<option value="mercedes">Lobster Two</option>' +
        '<option value="mercedes">Comfortaa</option>' +
        '<option value="mercedes">Yellowtail</option>' +
        '<option value="mercedes">Dancing Script</option>' +
        '<option value="mercedes">Quicksand</option>' +
        '<option value="mercedes">Pacifico</option>' +
        '<option value="mercedes">Bree Serif</option>' +
        '<option value="mercedes">Noto Serif</option>' +
        '<option value="mercedes">PT Serif</option>' +
        '<option value="mercedes">Baloo Da</option>' +
        '<option value="mercedes">Lora</option>' +
        '<option value="mercedes">Oswald</option>' +
        '<option value="mercedes">Denk One</option>' +
        '<option value="mercedes">Open Sans</option>' +
        '<option value="mercedes">Roboto</option>' +
      '</select>' +
      '<svg class="element-settings-line-height-icon" xmlns="http://www.w3.org/2000/svg" width="13.48" height="20.4" viewBox="0 0 13.48 20.4"><g fill="#9B9A9A"><path d="M10.922 2.54h1.201v1.102h1.357V1.37H6.807v2.271h1.357V2.54h1.199v4.682h-.64v1.174h2.879V7.222h-.68V2.54zm0 0M10.922 13.175h1.201v1.104h1.357v-2.271H6.807v2.271h1.357v-1.104h1.199v4.683h-.64v1.174h2.879v-1.174h-.68v-4.683zm0 0"/><g><path d="M1.836 20.401L.918 19.23 0 18.06h3.672l-.918 1.17z"/><path d="M1.293 2.34h1.086v15.72H1.293zM1.838-.001l.916 1.17.918 1.171H0l.918-1.171z"/></g></g></svg>' +
      '<input class="element-settings-line-height-input" value="27" min="0" max="100">' +
      '<svg class="element-settings-letter-spacing-icon" xmlns="http://www.w3.org/2000/svg" width="22.1" height="14.81" viewBox="0 0 22.1 14.81"><g fill="#9B9A9A"><path d="M6.218 1.27h1.301v1.193H8.99V.002H1.76v2.461h1.471V1.27H4.53v5.072h-.695v1.271h3.119V6.342h-.736V1.27zm0 0M17.569 1.268h1.301v1.195h1.471V.002h-7.23v2.461h1.471V1.268h1.299V6.34h-.693v1.271h3.117V6.34h-.734V1.268zm0 0"/><g><path d="M22.101 12.818l-1.27.993-1.268.996v-3.979l1.268.994z"/><path d="M2.536 12.229h17.027v1.178H2.536zM-.001 12.816l1.268-.992 1.269-.996v3.979l-1.269-.994z"/></g></g></svg>' +
      '<input class="element-settings-letter-spacing-input" value="0" min="0" max="100">' +
      '<svg class="element-settings-font-size-icon" xmlns="http://www.w3.org/2000/svg" width="12.58" height="10.14" viewBox="0 0 12.58 10.14"><g fill="#9B9A9A"><path d="M5.944 1.689h1.731V3.28h1.959V-.002H.002V3.28h1.961V1.689h1.729V8.45h-.919v1.691h4.149V8.45h-.978V1.689zm0 0"/><path d="M6.808 4.124v2.089h1.388v-.896h.747v3.629h-.576v1.195h2.656V8.946h-.521V5.317h.69v.896h1.385V4.124H6.808zm0 0"/></g></svg>' +
      // '<svg class="element-settings-font-size-icon" xmlns="http://www.w3.org/2000/svg" width="13.48" height="20.4" viewBox="0 0 13.48 20.4"><g fill="#9B9A9A"><path d="M10.922 2.54h1.201v1.102h1.357V1.37H6.807v2.271h1.357V2.54h1.199v4.682h-.64v1.174h2.879V7.222h-.68V2.54zm0 0M10.922 13.175h1.201v1.104h1.357v-2.271H6.807v2.271h1.357v-1.104h1.199v4.683h-.64v1.174h2.879v-1.174h-.68v-4.683zm0 0"/><g><path d="M1.836 20.401L.918 19.23 0 18.06h3.672l-.918 1.17z"/><path d="M1.293 2.34h1.086v15.72H1.293zM1.838-.001l.916 1.17.918 1.171H0l.918-1.171z"/></g></g></svg>' +
      '<input class="element-settings-font-size-input" value="27" min="0" max="100">' +
    '</div>' +
  '</div>');
  return element;
}

function checkboxInit() {
  var heightInput = $('.element-settings-line-height-input').lineheightspinner();
  var letterSpacingInput = $('.element-settings-letter-spacing-input').letterspacingspinner();
  var fontSizeInput = $('.element-settings-font-size-input').fontsizespinner();
}

function tableTemplate() {
  var element = $('<div class="element-container shape draggable resizable"><table class="table element"><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>John</td><td>Doe</td><td>80</td></tr></table><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}

function horizontalListInit() {
  var heightInput = $('.element-settings-line-height-input').lineheightspinner();
  var letterSpacingInput = $('.element-settings-letter-spacing-input').letterspacingspinner();
  var fontSizeInput = $('.element-settings-font-size-input').fontsizespinner();
}

function horizontalListTemplate() {
  var element = $(
  '<div class="element-container content checkbox-container draggable">' +
    '<h6 class="horizontal-list element">One | Two | Three</h6>' +
    '<span class="border-ball-one"></span><span class="border-ball-two"></span><span class="border-ball-three"></span><span class="border-ball-four"></span>' +
    '<div class="animated fadeInUp sub-menu">' +
      '<svg class="element-settings-text-icon" xmlns="http://www.w3.org/2000/svg" width="20.12" height="17.19" viewBox="0 0 15.12 12.19"><g fill="#65BD61"><path d="M7.145 2.031h2.08v1.912h2.357V-.001H0v3.944h2.357V2.031h2.08v8.127H3.331v2.033h4.992v-2.033H7.145V2.031zm0 0"/><path d="M8.184 4.959V7.47H9.85V6.395h.9v4.361h-.693v1.436h3.191v-1.436h-.625V6.395h.832V7.47h1.664V4.959H8.184zm0 0"/></g></svg>' +
      '<h6 class="element-settings-headline">Link Controls</h6>' +
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
      '<h6 class="element-settings-character-heading">Character</h6>' +
      '<select class="element-settings-character-dropdown">' +
        '<option value="beji">Source Sans Pro</option>' +
        '<option value="volvo">Pridi</option>' +
        '<option value="saab">Archivo Black</option>' +
        '<option value="mercedes">Bungee Shade</option>' +
        '<option value="audi">Chewy</option>' +
        '<option value="mercedes">Lobster Two</option>' +
        '<option value="mercedes">Comfortaa</option>' +
        '<option value="mercedes">Yellowtail</option>' +
        '<option value="mercedes">Dancing Script</option>' +
        '<option value="mercedes">Quicksand</option>' +
        '<option value="mercedes">Pacifico</option>' +
        '<option value="mercedes">Bree Serif</option>' +
        '<option value="mercedes">Noto Serif</option>' +
        '<option value="mercedes">PT Serif</option>' +
        '<option value="mercedes">Baloo Da</option>' +
        '<option value="mercedes">Lora</option>' +
        '<option value="mercedes">Oswald</option>' +
        '<option value="mercedes">Denk One</option>' +
        '<option value="mercedes">Open Sans</option>' +
        '<option value="mercedes">Roboto</option>' +
      '</select>' +
      '<svg class="element-settings-line-height-icon" xmlns="http://www.w3.org/2000/svg" width="13.48" height="20.4" viewBox="0 0 13.48 20.4"><g fill="#9B9A9A"><path d="M10.922 2.54h1.201v1.102h1.357V1.37H6.807v2.271h1.357V2.54h1.199v4.682h-.64v1.174h2.879V7.222h-.68V2.54zm0 0M10.922 13.175h1.201v1.104h1.357v-2.271H6.807v2.271h1.357v-1.104h1.199v4.683h-.64v1.174h2.879v-1.174h-.68v-4.683zm0 0"/><g><path d="M1.836 20.401L.918 19.23 0 18.06h3.672l-.918 1.17z"/><path d="M1.293 2.34h1.086v15.72H1.293zM1.838-.001l.916 1.17.918 1.171H0l.918-1.171z"/></g></g></svg>' +
      '<input class="element-settings-line-height-input" value="27" min="0" max="100">' +
      '<svg class="element-settings-letter-spacing-icon" xmlns="http://www.w3.org/2000/svg" width="22.1" height="14.81" viewBox="0 0 22.1 14.81"><g fill="#9B9A9A"><path d="M6.218 1.27h1.301v1.193H8.99V.002H1.76v2.461h1.471V1.27H4.53v5.072h-.695v1.271h3.119V6.342h-.736V1.27zm0 0M17.569 1.268h1.301v1.195h1.471V.002h-7.23v2.461h1.471V1.268h1.299V6.34h-.693v1.271h3.117V6.34h-.734V1.268zm0 0"/><g><path d="M22.101 12.818l-1.27.993-1.268.996v-3.979l1.268.994z"/><path d="M2.536 12.229h17.027v1.178H2.536zM-.001 12.816l1.268-.992 1.269-.996v3.979l-1.269-.994z"/></g></g></svg>' +
      '<input class="element-settings-letter-spacing-input" value="0" min="0" max="100">' +
      '<svg class="element-settings-font-size-icon" xmlns="http://www.w3.org/2000/svg" width="12.58" height="10.14" viewBox="0 0 12.58 10.14"><g fill="#9B9A9A"><path d="M5.944 1.689h1.731V3.28h1.959V-.002H.002V3.28h1.961V1.689h1.729V8.45h-.919v1.691h4.149V8.45h-.978V1.689zm0 0"/><path d="M6.808 4.124v2.089h1.388v-.896h.747v3.629h-.576v1.195h2.656V8.946h-.521V5.317h.69v.896h1.385V4.124H6.808zm0 0"/></g></svg>' +
      '<input class="element-settings-font-size-input" value="27" min="0" max="100">' +
    '</div>' +
  '</div>');
  return element;
}

function buttonTemplate() {
  var element = $(
  '<div class="element-container content button-container draggable">' +
    '<div class="button element"><h6>Click Me!</h6></div>' +
    '<span class="border-ball-one"></span><span class="border-ball-two"></span><span class="border-ball-three"></span><span class="border-ball-four"></span>' +
    '<div class="animated fadeInUp sub-menu">' +
      '<svg class="element-settings-text-icon" xmlns="http://www.w3.org/2000/svg" width="20.12" height="17.19" viewBox="0 0 15.12 12.19"><g fill="#65BD61"><path d="M7.145 2.031h2.08v1.912h2.357V-.001H0v3.944h2.357V2.031h2.08v8.127H3.331v2.033h4.992v-2.033H7.145V2.031zm0 0"/><path d="M8.184 4.959V7.47H9.85V6.395h.9v4.361h-.693v1.436h3.191v-1.436h-.625V6.395h.832V7.47h1.664V4.959H8.184zm0 0"/></g></svg>' +
      '<h6 class="element-settings-headline">Link Controls</h6>' +
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
      '<h6 class="element-settings-character-heading">Character</h6>' +
      '<select class="element-settings-character-dropdown">' +
        '<option value="beji">Source Sans Pro</option>' +
        '<option value="volvo">Pridi</option>' +
        '<option value="saab">Archivo Black</option>' +
        '<option value="mercedes">Bungee Shade</option>' +
        '<option value="audi">Chewy</option>' +
        '<option value="mercedes">Lobster Two</option>' +
        '<option value="mercedes">Comfortaa</option>' +
        '<option value="mercedes">Yellowtail</option>' +
        '<option value="mercedes">Dancing Script</option>' +
        '<option value="mercedes">Quicksand</option>' +
        '<option value="mercedes">Pacifico</option>' +
        '<option value="mercedes">Bree Serif</option>' +
        '<option value="mercedes">Noto Serif</option>' +
        '<option value="mercedes">PT Serif</option>' +
        '<option value="mercedes">Baloo Da</option>' +
        '<option value="mercedes">Lora</option>' +
        '<option value="mercedes">Oswald</option>' +
        '<option value="mercedes">Denk One</option>' +
        '<option value="mercedes">Open Sans</option>' +
        '<option value="mercedes">Roboto</option>' +
      '</select>' +
      '<svg class="element-settings-line-height-icon" xmlns="http://www.w3.org/2000/svg" width="13.48" height="20.4" viewBox="0 0 13.48 20.4"><g fill="#9B9A9A"><path d="M10.922 2.54h1.201v1.102h1.357V1.37H6.807v2.271h1.357V2.54h1.199v4.682h-.64v1.174h2.879V7.222h-.68V2.54zm0 0M10.922 13.175h1.201v1.104h1.357v-2.271H6.807v2.271h1.357v-1.104h1.199v4.683h-.64v1.174h2.879v-1.174h-.68v-4.683zm0 0"/><g><path d="M1.836 20.401L.918 19.23 0 18.06h3.672l-.918 1.17z"/><path d="M1.293 2.34h1.086v15.72H1.293zM1.838-.001l.916 1.17.918 1.171H0l.918-1.171z"/></g></g></svg>' +
      '<input class="element-settings-line-height-input" value="27" min="0" max="100">' +
      '<svg class="element-settings-letter-spacing-icon" xmlns="http://www.w3.org/2000/svg" width="22.1" height="14.81" viewBox="0 0 22.1 14.81"><g fill="#9B9A9A"><path d="M6.218 1.27h1.301v1.193H8.99V.002H1.76v2.461h1.471V1.27H4.53v5.072h-.695v1.271h3.119V6.342h-.736V1.27zm0 0M17.569 1.268h1.301v1.195h1.471V.002h-7.23v2.461h1.471V1.268h1.299V6.34h-.693v1.271h3.117V6.34h-.734V1.268zm0 0"/><g><path d="M22.101 12.818l-1.27.993-1.268.996v-3.979l1.268.994z"/><path d="M2.536 12.229h17.027v1.178H2.536zM-.001 12.816l1.268-.992 1.269-.996v3.979l-1.269-.994z"/></g></g></svg>' +
      '<input class="element-settings-letter-spacing-input" value="0" min="0" max="100">' +
      '<svg class="element-settings-font-size-icon" xmlns="http://www.w3.org/2000/svg" width="12.58" height="10.14" viewBox="0 0 12.58 10.14"><g fill="#9B9A9A"><path d="M5.944 1.689h1.731V3.28h1.959V-.002H.002V3.28h1.961V1.689h1.729V8.45h-.919v1.691h4.149V8.45h-.978V1.689zm0 0"/><path d="M6.808 4.124v2.089h1.388v-.896h.747v3.629h-.576v1.195h2.656V8.946h-.521V5.317h.69v.896h1.385V4.124H6.808zm0 0"/></g></svg>' +
      // '<svg class="element-settings-font-size-icon" xmlns="http://www.w3.org/2000/svg" width="13.48" height="20.4" viewBox="0 0 13.48 20.4"><g fill="#9B9A9A"><path d="M10.922 2.54h1.201v1.102h1.357V1.37H6.807v2.271h1.357V2.54h1.199v4.682h-.64v1.174h2.879V7.222h-.68V2.54zm0 0M10.922 13.175h1.201v1.104h1.357v-2.271H6.807v2.271h1.357v-1.104h1.199v4.683h-.64v1.174h2.879v-1.174h-.68v-4.683zm0 0"/><g><path d="M1.836 20.401L.918 19.23 0 18.06h3.672l-.918 1.17z"/><path d="M1.293 2.34h1.086v15.72H1.293zM1.838-.001l.916 1.17.918 1.171H0l.918-1.171z"/></g></g></svg>' +
      '<input class="element-settings-font-size-input" value="27" min="0" max="100">' +
    '</div>' +
  '</div>');
  return element;
}

function buttonInit() {
  var heightInput = $('.element-settings-line-height-input').lineheightspinner();
  var letterSpacingInput = $('.element-settings-letter-spacing-input').letterspacingspinner();
  var fontSizeInput = $('.element-settings-font-size-input').fontsizespinner();
}

function bulletedListTemplate() {
  var element = $('<div class="element-container draggable"><ul class="bulleted-list element"><li>Coffee</li><li>Tea</li><li>Milk</li></ul><span></span><span></span><span></span><span></span><div class="animated fadeInUp sub-menu"></div></div>');
  return element;
}
