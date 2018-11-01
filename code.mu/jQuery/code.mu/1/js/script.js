// $('h3').html('!!!');
// $(':empty').css('color', 'red');

// $(':header').css('color', 'red');

// $('h3').css({color: 'green', fontWeight: 'bold'});

// $('.zzz').css({color: 'red'});

// $(':headers').css('color', 'red');

// $('li').each(function (index) {
//     index = '1';
// 	$(this).html(index);
// });

// h2.test

// $('li.www').parent().css({color: 'green'});

// $('p').each(function(){
// 	alert($(this).html())
// });

$('li').each(function(index){
	$(this).html(index)
});

$('li').each(function(index){
	$(this).append(index)
});