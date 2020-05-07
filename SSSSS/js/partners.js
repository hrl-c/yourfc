$(function() {
    $('.second_filter:eq(0)').css('display', 'block');

    var at_first = 0;
    // 두번째 filter 보여주는 코드
    $('.first_filter').on('click', function() {
        $('.first_filter:eq(' + at_first + ') li').removeClass('hr-active')
        $('.second_filter').eq(at_first).css('display', 'none');
        at_first = $(this).index()
        console.log('---------\n now' + at_first + '\n --------')
        $('.second_filter').eq(at_first).css('display', 'block');
    })

    // 첫번째 filter가 죽지않는 코드
    // 1. uk-active 붙여준다        2. first 바뀔시 죽여준다.
    $('.second_filter ul a').on('click', function() {
        /*
        if ( make_it_live == 1 ) {

        }
        */
       $('.first_filter:eq(' + at_first + ') li').addClass('hr-active');
    })
})