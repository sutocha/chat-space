$(function(){
  var search_list = $("#user-search-result")

  function appendUser(user){
    var html =`
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
      </div>
    `
    return html;
  }

  function appendNoUser(user){
    var html = `
      <div class="chat-group-user clearfix">
      </div>
    `
  }

  $("#user-search-field").on("keyup", function(){ //テキストフィールドのクラス名を""に
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/groups/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
       if (users.length !== 0) {
         search_list.find('div').remove();
         users.forEach(function(user){
           appendUser(user);
           search_list.append(appendUser(user))
         });
       }
       else {
         appendNoUser("一致するユーザがいません");
       }
    })
    .fail(function(){
      alert('user検索ができませんでした。');
    })
  });
});
