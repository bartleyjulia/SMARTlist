$(document).ready(function() {

  // POPULATE MODAL HEADER WITH LIST ITEM
  $('.modalOpen').on('click', function(evt){
    if(evt.target.dataset.itemInfo){
      let data = JSON.parse(evt.target.dataset.itemInfo);
      console.log(data);
      $('.modal-title').text(data.title);
    }
  });

  // WATCH MODAL DELETE BUTTON 
  $('#watchDeleteButton').on('click', function(evt){
    let itemID = $('#watchModal').children().find('#watchModalTitle').text();

    // MENTOR HELP HERE! Why do I keep getting my title 5 times? Not having to repeat each modal would be 100x better
    // let itemID = $('.modal-title').text();

    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

  // READ MODAL DELETE BUTTON 
  $('#readDeleteButton').on('click', function(evt){
    let itemID = $('#readModal').children().find('#readModalTitle').text();
    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

  // eat MODAL DELETE BUTTON 
  $('#eatDeleteButton').on('click', function(evt){
    let itemID = $('#eatModal').children().find('#eatModalTitle').text();
    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

  // BUY MODAL DELETE BUTTON 
  $('#buyDeleteButton').on('click', function(evt){
    let itemID = $('#buyModal').children().find('#buyModalTitle').text();
    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

  // OTHER MODAL DELETE BUTTON 
  $('#otherDeleteButton').on('click', function(evt){
    let itemID = $('#otherModal').children().find('#otherModalTitle').text();
    console.log(itemID);
    console.log("Deletebutton Clicked!");
    var targetPath = '/delete/' + itemID;
    $.ajax({
      url: targetPath,
      method: 'POST',
      success: function(data) {
      console.log('AJAX request returned');
      },
      error: function(err) {
      console.log('AJAX request failed');
      console.log(err);
      }
    });
    location.reload();
  });

});



// $(document).ready(function() {
//   let deleteButton = $('.btn-danger');
//   // Function to delete items from database VIA modal using AJAX

//     $(deleteButton).on('click', function(evt){
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