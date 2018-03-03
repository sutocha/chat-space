$(function(){
  $("#user-search-field").on("keyup", function(){ //テキストフィールドのクラス名を""に
    var input = $("#user-search-field").val();
    console.log(input)
  });
});
