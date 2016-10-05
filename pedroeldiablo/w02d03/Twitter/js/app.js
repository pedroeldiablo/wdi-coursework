$(function(){
    var $ol= $('ol');
  $.each(tweets, function(i, tweet){
    $ol.prepend(
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
