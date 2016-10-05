$(function(){
  var $user = {
    user_thumbnail: "http://facehoff.herokuapp.com/50/50",
    screen_name: "The Hoff",
    name: "Name Name",
    text: "",
    created_at: ""
  };

  var $form =$('form');

  $('form').submit(function(e){
    e.preventDefault();
    console.log("clicked");
    $user.text = $("#new-tweet-input").val();
    $user.created_at = $.now();
    // $("#new-tweet-input").val = ;
    console.log($user);
    tweets.push($user);
    console.log(tweets);
    $('form').trigger("reset");
    $ol.prepend(
      '<li class="stream-item">\
        <div class="tweet">\
          <a href="#">\
            <img src='+$user.thumbnail+' alt="User image goes here.">\
          </a>\
          <div class="content">\
            <strong class="fullname">'+$user.screen_name + '</strong>\
            <span>&rlm;</span>\
            <span>@</span><b>'+$user.name+'</b>\
            &nbsp;&middot;&nbsp;\
            <small class="time">' + $user.created_at + '</small>\
            <p>'+$user.text+'</p>\
          </div>\
        </div>\
      </li>');
  });
    // $user.tweet.created_at = Date();
    // tweets.push($user);


  var $ol= $('ol');
  $.each(tweets, function(i, tweet){
  $ol.append(
    '<li class="stream-item">\
      <div class="tweet">\
        <a href="#">\
          <img src="'+tweet.user_thumbnail+'" alt="User image goes here.">\
        </a>\
        <div class="content">\
          <strong class="fullname">'+tweet.screen_name + '</strong>\
          <span>&rlm;</span>\
          <span>@</span><b>'+tweet.name+'</b>\
          &nbsp;&middot;&nbsp;\
          <small class="time">' +tweet.created_at+ '</small>\
          <p>'+tweet.text+'</p>\
        </div>\
      </div>\
    </li>');
    });
  });








// e.preventDefault();
// $user.text = form.textarea.val();
//   var newtext =$(#new-tweet-input).val();
