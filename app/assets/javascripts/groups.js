$(function(){
  $("#user-search-field").on("keyup", function(){ //テキストフィールドのクラス名を""に
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: './groups/new', './groups/edit',
      data: { keyword: input },
      dataType: 'json'
    })
  });
});
