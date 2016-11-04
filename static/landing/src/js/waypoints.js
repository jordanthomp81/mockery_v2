/*-------------------------------------
  EASY WAYPOINT FUNCTIONS
-------------------------------------*/
// Creates a standerd waypoint with the option of custom logic. To pass in
// the custom logic, just create a function with all the logic you would
// like to call when the waypoint is activated, then pass just the name of the
// function into this function without qoutes. Note that these waypoint functions are
// available to any js file in this project
// Example Single Waypoint: createWaypoint('.that', 'is-active', '35%', animateThat)
function createWaypoint(element, classToToggle, offset, cb) {
  return jQuery(element).waypoint(function(direction) {
    jQuery(element).toggleClass(classToToggle);
    if (typeof cb !== "undefined") {
      cb(element, classToToggle, offset, direction);
    }
  }, { offset: offset });
}

// A loop for standerd waypoint creation. Also has the ability to pass in custom
// logic, and classToToggle. Both are optional.
// Example Multiple Waypoints: waypointer(['.that', '#that', '#this'], 'resolved', '10%', animate);
function waypointer(elementArray, classToToggle, offset, cb) {
  for (var i=0; i < elementArray.length; i++) {
    createWaypoint(elementArray[i], classToToggle, offset, cb(elementArray[i]));
  }
  return true;
}

function benefitActive() {
  $('.benefit-item').toggleClass('active');
}

function footerActive() {
  $('.footer-copy-container').toggleClass('active');
  $('.logo-container').toggleClass('active');
  $('.navigation-container').toggleClass('active');
}

function featureActive() {
  $('.feature-one').toggleClass('active');
}

function featureTwo() {
  if($(window).width() < 1100) {
    $('.feature-two-mobile').toggleClass('active');
  }else {
    $('.feature-two').toggleClass('active');
  }
}

function featureThree() {
  $('.feature-three').toggleClass('active');
}

// This will be invoked when the page loads
;(function($){
  $(function() {

    if($(window).width() < 1100) {
      $('.feature-two-mobile').show();
      $('.feature-two-mobile').show();
      $('.feature-two').hide();
    }else {
      $('.feature-two-mobile').hide();
      $('.feature-two').show();
    }

    // place waypoints here
    createWaypoint('.benefit-items-container', '', '100%', benefitActive);
    // waypointer(['.feature-one', '.feature-two', '.feature-three'], 'active', '30%', featureActive);
    // createWaypoint('.features', 'active', '55%', featureActive);
    // createWaypoint('.feature-one', null, '-125%', featureTwo);
    // createWaypoint('.feature-two', null, '-225%', featureThree);
    // footer-copy-container
    // createWaypoint('.footer-form', 'active', '-200%', footerActive);
    // createWaypoint('.footer-form', 'active', '-150%', footerActive);
  });
}(jQuery));
