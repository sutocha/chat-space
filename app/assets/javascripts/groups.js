$(function(){
  var search_list = $("#user-search-result")

  function appendUser(user){
    console.log(user);
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
        <p class="chat-group-user__name">${user}</p>
      </div>
    `
    return html;
  }

  $("#user-search-field").on("keyup", function(){ //テキストフィールドのクラス名を""に
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
       if (users.length !== 0) {
         search_list.find('div').remove();
         users.forEach(function(user){
           search_list.append(appendUser(user))
         });
       }
       else {
        search_list.find('div').remove();
        search_list.append(appendNoUser("一致するユーザがいません"));
       };
    })
    .fail(function(){
      alert('user検索ができませんでした。');
    })
  });

  function addUser(user){
    var html =`
        <input name='group[user_ids][]' type='hidden' value='${user.id}'>
    `
    return html;
  }

  $(document).on("click", ".chat-group-user__btn--add", function(){
    $('.chat-group-user').remove();
  });
});
