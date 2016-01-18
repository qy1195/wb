$(document).ready(function() {

  // $("#btn0").click(function() {
  //   $("#hhhh").prepend("<input type='text' name='article' value='' id='art'><input type='text' name='title' value='' id='art1'>");
  // });
  // $("#btn01").click(function() {
  //   $("#hhhh").empty()
  // });
  $("#btn02").click(function() {
    var str = location.href;

    $.post("/create-answer", {
        article: document.getElementById("art").value,
        // title: document.getElementById("art1").value,
        itemId: str.slice(29)

      })
      .done(function(msg) {
        window.location.assign(location.href);
      });
  });
  $(".close").click(function() {
    var str1 = $(this).text()
    var str = $(this).attr('class')
    console.log(str1.slice(1));
    console.log(location);
    console.log(1441);
    console.log($(this).attr('class'));
    console.log(str.slice(6));

    $.post("/delete-answer", {

        id: str.slice(6)
          // title: document.getElementById("art1").value,
          // itemId: str.slice(29)

      })
      .done(function(msg) {
        window.location.assign(location.href);
      });
  });

$http.get('/json').success(function(data){

})
});
