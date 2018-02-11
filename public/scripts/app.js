// WATCH
<<<<<<< HEAD
$('#watchList').on('click', function(evt){
  if(evt.target.dataset.itemInfo){
    var data = JSON.parse(evt.target.dataset.itemInfo);
    $('#watchModalTitle').text(data.title);
  }
=======
$(function(){
  $('#watchList').on('click', function(evt){
    if(evt.target.dataset.itemInfo){
      console.log('This is the EVT target stuff:', evt.target.dataset.itemInfo);
      var data = JSON.parse(evt.target.dataset.itemInfo);
      $('#watchModalTitle').text(data.title);
    }
  });
>>>>>>> master
});


// READ
$('#readList').on('click', function(evt){
  if(evt.target.dataset.itemInfo){
    var data = JSON.parse(evt.target.dataset.itemInfo);
    $('#readModalTitle').text(data.title);
  }
});

// EAT
$('#eatList').on('click', function(evt){
  if(evt.target.dataset.itemInfo){
    var data = JSON.parse(evt.target.dataset.itemInfo);
    $('#eatModalTitle').text(data.title);
  }
});

// BUY
$('#buyList').on('click', function(evt){
  if(evt.target.dataset.itemInfo){
    var data = JSON.parse(evt.target.dataset.itemInfo);
    $('#buyModalTitle').text(data.title);
  }
});

// OTHER
$('#otherList').on('click', function(evt){
  if(evt.target.dataset.itemInfo){
    var data = JSON.parse(evt.target.dataset.itemInfo);
    $('#otherModalTitle').text(data.title);
  }
});

<<<<<<< HEAD
// DELETE BUTTON - Function to delete list item


  // // Function to load and render tweets on the Tweet Newsfeed using AJAX
  // function loadAndRenderTweet() {
  //   var targetPath = '/tweets/' + this.target.parent.firstChild.itemInfo.id.id;
  //   $('#tweetFeed').empty();
  //   $.ajax({
  //     url: targetPath,
  //     method: 'GET'
  //   }).done(function (tweet) {
  //     console.log('Success :', tweet);
  //     renderTweets(tweet);
  //   });
  // }

  // // Function to load and render tweets on the Tweet Newsfeed using AJAX
  // function loadAndRenderTweet() {
  //   $('#tweetFeed').empty();
  //   $.ajax({
  //     url: '/tweets',
  //     method: 'GET',
  //     success: function(data) {
  //       // do stuff with the success data
  //     },
  //     error: function(data) {
      
  //     }

  //   }).done(function (tweet) {
  //     console.log('Success :', tweet);
  //     renderTweets(tweet);
  //   });
  // }
=======

$(document).ready(function() {
  let deleteButton = $('.btn-danger');
  // Function to delete items from database VIA modal using AJAX

    $(deleteButton).on('click', function(evt){
      let itemID = $('#watchModal').children().find('#watchModalTitle').text();
      console.log(itemID);
      evt.preventDefault();
      console.log("Deletebutton Clicked!");
      var targetPath = '/delete/' + itemID;
      console.log(targetPath);
      // $
      // $.post(targetPath, itemID).done(function() {
        // alert("Alert!");
      // });
      $.ajax({
        url: targetPath,
        method: 'POST',
        success: function(data) {

        console.log('AJAX request returned');

          // do stuff with the success data
        },
        error: function(err) {

        console.log('AJAX request failed');
        console.log(err);
        }
      });
      // }).done(function (tweet) {
      //   console.log('Success :', tweet);
      // });
    });
});


// $(document).ready(function() {
//   // let deleteButton = $('#watchModal').children().find('#deleteButton');
//   // Function to delete items from database VIA modal using AJAX

//     $(deleteButton).on('click', function(evt){
//       console.log("hello");
//       let itemID = $('#watchModal').children().find('#watchModalTitle').text();
//       console.log(itemID);
//       evt.preventDefault();
//       console.log("Deletebutton Clicked!");
//       var targetPath = '/delete/' + itemID;
//       console.log(targetPath);
//       // $
//       // $.post(targetPath, itemID).done(function() {
//         // alert("Alert!");
//       // });
//       $.ajax({
//         url: targetPath,
//         method: 'POST',
//         success: function(data) {

//         console.log('AJAX request returned');

//           // do stuff with the success data
//         },
//         error: function(err) {

//         console.log('AJAX request failed');
//         console.log(err);
//         }
//       });
//       // }).done(function (tweet) {
//       //   console.log('Success :', tweet);
//       // });
//     });
// });

// // Function to update items from database VIA modal using AJAX
// $(function(){
//   $('# MODAl save changes button').on('click', function(evt){
//     evt.preventDefault();
//     var targetPath = '/edit/' + this.target.parent.firstChild.itemInfo.id.id;
//     $.ajax({
//       url: targetPath,
//       method: 'POST',
//       success: function(data) {
//         // do stuff with the success data
//       },
//       error: function(data) {

//       }

//     }).done(function (tweet) {
//       console.log('Success :', tweet);
//     });
//   }
>>>>>>> master
