
$(document).ready(function(){
$('#goods').click(function () {
  $.get('http://api.mipinr.com/items',function(data){
    var content='';
    for (var i = 0; i < data.length; i++)
    {
    content=content+'<li>'+
    '<a href=" '+data[i].itemUrl+' "><div class="show"><img src=" '+data[i].picUrl+'" alt=""/ style="top:0;"><div class="tit" style="top:100%;"><p>'+ data[i].title +'</p></div></div><div class="info"><strong>¥'+data[i].promoPrice+'</strong><del>¥'+data[i].originPrice+'</del><span id="discount">'+data[i].discount+'折</span></div></a>'+
    '</li>'
    }
    console.log(content);
    var ul = '<ul>'
      + content
      + '</ul>';
    $('#content').html(ul);
  });
});
	$('.show').mouseenter(function(){
		$('.show').animate({top:'-10px'});
		$('.tit').animate({
			top:'75%'
		});
	});
	$('.show').mouseleave(function(){
		$('.show').animate({top:'0px'});
		$('.tit').animate({
			top:'100%'
		});
	});
});
