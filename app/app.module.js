// new Vue({
//
//   // We want to target the div with an id of 'app'
//   el: '#app',
//
//   // Here we can register any values or collections that hold data
//   // for the application
//   data: {
//
//   },
//
//   // Anything within the ready function will run when the application loads
//   ready: function() {},
//
//   // Methods we want to use in our application are registered here
//   methods: {
//     // countTopRulerMarks : function (element) {
//     //   var elementName = element.charAt(0) == '#' || '.' ? document.getElementById('foo') : document.getElementsByClassName('foo')[0];
//     //   var elementInfo = element.getBoundingClientRect();
//     //   var elementheight = elementInfo.height;
//     //   var elementwidth = elementInfo.width;
//     //   return elementwidth;
//     // }
//
//     greet: function() {
//       // `this` inside methods point to the Vue instance
//       console.log('it worked');
//     }
//   }
// });



var vm = new Vue({
  el: '#app',

  // Here we can register any values or collections that hold data
  // for the application
  data: {
    name: 'as'
  },

  // Anything within the ready function will run when the application loads
  ready: function() {},

  // define methods under the `methods` object
  methods: {

  }
})
