// WATCH
$('#watchList').on('click', function(evt){
  if(evt.target.dataset.itemInfo){
    var data = JSON.parse(evt.target.dataset.itemInfo);
    $('#watchModalTitle').text(data.title);
  }
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