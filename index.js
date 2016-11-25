
$(document).ready(function() {


  $.ajax ({
    url:"https://wind-bow.hyperdev.space/twitch-api/streams/freecodecamp",
    type: "GET",
    async: true,
    dataType: "jsonp",
    success: function(data) {
      if (data.stream === null) {
        $(".firstChannelStatus").append("<p>Offline</p>");
      } else {
        $(".firstChannelLogo").append("<img src="+ data.stream.channel.logo +">")
        $(".firstChannelName").append(data.stream.channel.display_name);
        $(".firstChannelStatus").append(data.stream.channel.status);
      }
    }
  })
  $.ajax ({
    url:"https://wind-bow.hyperdev.space/twitch-api/streams/scarra",
    type: "GET",
    async: true,
    dataType: "jsonp",
    success: function(data) {
      if (data.stream === null) {
        $(".secondChannelStatus").append("<p>Offline</p>")
      } else {
        $(".secondChannelLogo").append("<img src="+ data.stream.channel.logo +">")
        $(".secondChannelName").append(data.stream.channel.display_name);
        $(".secondChannelStatus").append(data.stream.channel.status);
      }
    }
  })
  $.ajax ({
    url:"https://wind-bow.hyperdev.space/twitch-api/streams/esl_sc2",
    type: "GET",
    async: true,
    dataType: "jsonp",
    success: function(data) {
      if (data.stream === null) {
        $(".thridChannelStatus").append("<p>Offline</p>")
      } else {
        $(".thirdChannelLogo").append("<img src="+ data.stream.channel.logo +">")
        $(".thirdChannelName").append(data.stream.channel.display_name);
        $(".thirdChannelStatus").append(data.stream.channel.status);
      }
    }
  })
  $.ajax ({
    url:"https://wind-bow.hyperdev.space/twitch-api/streams/dreamhackhs",
    type: "GET",
    async: true,
    dataType: "jsonp",
    success: function(data) {
      if (data.stream === null) {
        $(".fourthChannelStatus").append("<p>Offline</p>")
      } else {
        $(".fourthChannelLogo").append("<img src="+ data.stream.channel.logo +">")
        $(".fourthChannelName").append(data.stream.channel.display_name);
        $(".fourthChannelStatus").append(data.stream.channel.status);
      }
    }
  })


}); // ending
