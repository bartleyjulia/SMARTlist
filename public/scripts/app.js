// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$(document).ready(function() {
  
  $('#toWatch').click(function(){
    $('.watch .list-ai').slideToggle('fast');
    console.log('test');
  });

  $('#toRead').click(function(){
    $('.read .list-ai').slideToggle('fast');
  });

  $('#toEat').click(function(){
    $('.eat .list-ai').slideToggle('fast');
  });

  $('#toBuy').click(function(){
    $('.buy .list-ai').slideToggle('fast');
  });

  $('#toOther').click(function(){
    $('.other .list-ai').slideToggle('fast');
  });

  $('.listItem').click(function() {
    $('.modal, .modal-content').addClass('active');
  });

  $('.modal-close').click(function(e) {
    e.stopPropagation();
    $('.modal, .modal-content').removeClass('active');
  });


});

// var movieData ={
//   releaseDate: '...'
// }

// function renderMovieData(data) {
  
// }