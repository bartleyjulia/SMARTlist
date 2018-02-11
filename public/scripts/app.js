// WATCH
$(function(){
  $('#watchList').on('click', function(evt){
    if(evt.target.dataset.itemInfo){
      console.log('This is the EVT target stuff:', evt.target.dataset.itemInfo);
      var data = JSON.parse(evt.target.dataset.itemInfo);
      $('#watchModalTitle').text(data.title);
    }
  });
});


// READ
$(function(){
  $('#readList').on('click', function(evt){
    if(evt.target.dataset.itemInfo){
      var data = JSON.parse(evt.target.dataset.itemInfo);
      $('#readModalTitle').text(data.title);
    }
  });
});

// EAT
$(function(){
  $('#eatList').on('click', function(evt){
    if(evt.target.dataset.itemInfo){
      var data = JSON.parse(evt.target.dataset.itemInfo);
      $('#eatModalTitle').text(data.title);
    }
  });
});

// BUY
$(function(){
  $('#buyList').on('click', function(evt){
    if(evt.target.dataset.itemInfo){
      var data = JSON.parse(evt.target.dataset.itemInfo);
      $('#buyModalTitle').text(data.title);
    }
  });
});

// OTHER
$(function(){
  $('#otherList').on('click', function(evt){
    if(evt.target.dataset.itemInfo){
      var data = JSON.parse(evt.target.dataset.itemInfo);
      $('#otherModalTitle').text(data.title);
    }
  });
});


  // Function to delete items from database VIA modal using AJAX
$(document).ready(function() {
  let deleteButton = $('.btn-danger');
    $(deleteButton).on('click', function(evt){
      let itemID = $('#watchModal').children().find('#watchModalTitle').text();
      console.log(itemID);
      evt.preventDefault();
      console.log("Deletebutton Clicked!");
      var targetPath = '/delete/' + itemID;
      console.log(targetPath);
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
    });
});
// Function to update items from database VIA modal using AJAX

$(document).ready(function(){
  const saveButton = $('#watchModal').children().find('#saveButton');
  $(saveButton).on('click', function(evt){
  const selectButton = $('#selOtherCategory').val();
  console.log('selectbuttonoption', selectButton);
    let itemID = $('#watchModal').children().find('#watchModalTitle').text();
  const datum = {
      category_id: selectButton,
      itemID: itemID
  };
    evt.preventDefault();
    var targetPath = '/edit/' + itemID;
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
    // .done(function (tweet) {
    //   console.log('Success :', tweet);
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