$(function(){
  function appendUser(user){
    console.log(user)
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
      url: '/groups/new',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
       if (users.length !== 0) {
         users.forEach(function(user){
           appendUser(user);
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
