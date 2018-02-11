// WATCH
$('.modalOpen').on('click', function(evt){
  if(evt.target.dataset.itemInfo){
    var data = JSON.parse(evt.target.dataset.itemInfo);
    $('.modal-title').text(data.title);
  }
});

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