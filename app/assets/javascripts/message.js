$(function(){

  function buildHTML(message){
    if (message.image){
      var html = `<div class="main__contents__chat">
                    <div class="main__contents__chat__user">
                      ${message.user_name}
                    </div>
                    <div class= "main__contents__chat__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class= "main__contents__chat__message">
                    ${message.text}
                    <img src=${message.image} >
                  </div>`
    }else{
      var html = `<div class="main__contents__chat">
                    <div class="main__contents__chat__user">
                      ${message.user_name}
                    </div>
                    <div class= "main__contents__chat__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class= "main__contents__chat__message">
                    ${message.text}
                  </div>`
    }
    return html
  }

  $(".new_message").on("submit", function(e){
    e.preventDefault();
    $(".send__btn").removeAttr("data-disable-with");
    var formData = new FormData(this);
    var url = $(this).attr("action");

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".main__contents").append(html);
      $(".main__contents").animate({scrollTop: $(".main__contents")[0].scrollHeight});
      $("form")[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  })
  if (document.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessage, 7000);
  }
});
