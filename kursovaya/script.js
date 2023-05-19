$(document).ready(function(){
  $('.header_burger,.header_link').click(function(event){
    $('.header_burger,.header_menu').toggleClass('active');
    $('.body').toggleClass('lock');
  });
});


