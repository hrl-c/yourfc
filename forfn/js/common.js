$(function(){

    var num = 0;
    $('#news_tag>ul>li').on('click', function() {
        var nth = $(this).index();
        $('.main_news>ul').eq(num).css('display', 'none');
        $('#news_tag>ul>li').eq(num).removeClass('uk-active');
        $('.main_news>ul').eq(nth).css('display', 'block');
        $('#news_tag>ul>li').eq(nth).addClass('uk-active');
        num = nth;
    })
    console.log(6);
    
    var num2 = 0;
    $('#cp_tag>ul>li').on('click', function() {
        var nth2 = $(this).index();
        $('.cps>ul').eq(num2).css('display', 'none');
        $('#cp_tag>ul>li').eq(num2).removeClass('uk-active');
        $('.cps>ul').eq(nth2).css('display', 'block');
        $('#cp_tag>ul>li').eq(nth2).addClass('uk-active');
        num2 = nth2;
    })
    console.log(6);


/*
$('.mytest ul:eq(0)>li').on('click', function() {
    $('.mytest ul:eq(1)').css('display', 'none');
    $('.mytest ul:eq(2)').css('display', 'block');
})

console.log('start')
$('#fuxk').on('click', function() {
    console.log('mid1')
    $('#nodab').css('display', 'none');
    console.log('mid2')
    $('#ekaqo').css('display', 'block')
})
console.log('end')
*/
});