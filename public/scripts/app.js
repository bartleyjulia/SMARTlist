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
    $('.watch .list').slideToggle('fast');
  });

  $('#toRead').click(function(){
    $('.read .list').slideToggle('fast');
  });

  $('#toEat').click(function(){
    $('.eat .list').slideToggle('fast');
  });

  $('#toBuy').click(function(){
    $('.buy .list').slideToggle('fast');
  });

  $('#toOther').click(function(){
    $('.other .list').slideToggle('fast');
  });

  $('.listItem').click(function() {
    $('.modal, .modal-content').addClass('active');
  });

  $('.modal button').click(function(e) {
    e.stopPropagation();
    $('.modal, .modal-content').removeClass('active');
    console.log('test');
  });


});

// var movieData ={
//   releaseDate: '...'
// }

// function renderMovieData(data) {
  
// }