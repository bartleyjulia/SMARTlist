// CHECKBOX


// WATCH
$(function(){
  $('#watchList').on('click', function(evt){
    if(evt.target.dataset.itemInfo){
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

// Can't be empty
$('#addButton').on('submit', function() {
  // Prevent the default behaviour of new page refresh
  // e.preventDefault();
  // Get data of form
  // var data = $('.form-group').serialize();
  window.alert('test');
  // Condition for text between char count 0 - 140
  // if ($('textarea').val() === "") {
  //   window.alert("You need to add something first!");
  // } else {
  //   $.post('/tweets', data)
  // }
  });




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