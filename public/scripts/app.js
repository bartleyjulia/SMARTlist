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

});