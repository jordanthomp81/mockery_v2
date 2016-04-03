$(document).ready(function ($) {

  $('.nav-options li').on('click', '.sub-menu', function(event) {
      $('.nav-options li').off('hover');
      event.preventDefault();
  });

  $(".edit-page-name").on("mouseover", function () {
      $(this).addClass('active');
  });

  $(".edit-page-name").on("mouseout", function () {
      $(this).removeClass('active');
  });

  $(".quick-panel").draggable({
    containment: "parent"
  });

  $('.nav-options li').click(function(){
     $(this).addClass('in-active');
  });

  $('.nav-options li').on('mouseleave', function(){
     $(this).removeClass('in-active');
  });

});
