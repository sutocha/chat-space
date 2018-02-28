$(function(){
  function buildHTML(message){
    if (message.content && message.image){
      var html = `
                  <div class="message">
                    <div class="message__top">
                      <div class="message__user">
                        ${message.user_name}
                      </div>
                      <div class="message__date">
                        ${message.created_at}
                      </div>
                      <div class="clear"></div>
                      <div class="message__comment">
                        ${message.content}
                        ${message.image}
                      </div>
                    </div>
                  </div>`
    }
    else if (message.content){
       var html = `
                  <div class="message">
                    <div class="message__top">
                      <div class="message__user">
                        ${message.user_name}
                      </div>
                      <div class="message__date">
                        ${message.created_at}
                      </div>
                      <div class="clear"></div>
                      <div class="message__comment">
                        ${message.content}
                      </div>
                    </div>
                  </div>`
    }
    else if (message.image){
       var html = `
                  <div class="message">
                    <div class="message__top">
                      <div class="message__user">
                        ${message.user_name}
                      </div>
                      <div class="message__date">
                        ${message.created_at}
                      </div>
                      <div class="clear"></div>
                      <div class="message__comment">
                        ${message.image}
                      </div>
                    </div>
                  </div>`
    };
    return html;
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    // console.log(this)
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: './messages',
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var insertHTML = buildHTML(data);
      $('.messages').append(insertHTML);
      $('.form__submit').prop("disabled", false);
      // $form[0].reset();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 2000);
    })
    .fail(function(){
      alert('error');
    })
  })
})
