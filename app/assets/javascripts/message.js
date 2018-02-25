$(function(){
  function buildHTML(message){
    var html =  '<div class="message">'
                  '<div class="message__top">'
                    '<div class="message__user">'
                      message.user.name
                    '</div>'
                    '<div class="message__date">'
                      message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')
                    '</div>'
                  '</div>'
                  '<div class="message__comment">'
                    '<p>'message.content'</p>'
                    '<p>'<img src="' + message.image.url + '" class="lower-message__image" >'</p>'
                  '</div>'
                '</div>'
    return html;
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    console.log(this)
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
      $('messages').append(insertHTML);
    })
  })
})
