$(function(){

  function buildHTML(message){
    if (message.image){
      var html = `<div class="message" data-message-id=${message.id}>
                    <div class="main__contents__chat">
                      <div class="main__contents__chat__user">
                        ${message.user_name}
                      </div>
                      <div class= "main__contents__chat__date">
                        ${message.created_at}
                      </div>
                      <div class= "main__contents__chat__message">
                        ${message.text}
                      <img src=${message.image} >
                    </div>
                  </div>`
      return html;
    }else{
      var html = `<div class="message" data-message-id=${message.id}>
                    <div class="main__contents__chat">
                      <div class="main__contents__chat__user">
                        ${message.user_name}
                      </div>
                      <div class= "main__contents__chat__date">
                        ${message.created_at}
                      </div>
                    </div>
                      <div class= "main__contents__chat__message">
                        ${message.text}
                      </div>
                    </div>
                  </div>`
      return html;
    };
  }

  $(".new_message").on("submit", function(e){
    var reloadMessages = function(){
      var last_message_id = $(".message:last").data("message-id");
      $.ajax({
        url: "api/messages",
        type: "get",
        dataType: "json",
        data: {id: last_message_id}
      })
      .done(function(messages){
        if (messages.length !== 0){
          var insertHTML = "";
          $.each(messages, function(i, message){
            insertHTML += buildHTML(message)
          });
          $(".main__contents").append(insertHTML);
          $(".main__contents").animate({ scrollTop: $(".main__contents")[0].scrollHeight});
        }
      })
      .fail(function(){
        alert("error");
      });
    };
    if (document.location.href.match(/\/groups\/\d+\/messages/)){
      setInterval(reloadMessages, 7000);
    };
  })
});