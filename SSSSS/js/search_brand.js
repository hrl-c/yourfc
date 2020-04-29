$(function () {
    // 가짜 기업 거시기 임시로 만들기
    for (var i=0; i<10; i++) {
        let m1 = '하람코딩';
        let m2 = '(주)하람';
        let m3 = '서비스';
        let m4 = '교육';
        let m5 = '5000';
        let m6 = '2억 3000 만';
        let m7 = '15억 7000 만';
        make_temp(m1,m2 ,m3,m4,m5,m6,m7);
    }
    function make_temp(name1, name2, big, small, stores, money, total_money) {
        let temp = '<tr><td><a href="#1">'+ name1 + '</a></td>\
                        <td><a href="#1">'+ name2 + '</a></td>\
                        <td><a href="#1" class="big_sort">'+ big +'</a></td>\
                        <td><a href="#1" class="small_sort">'+ small +'</a></td>\
                        <td class="-center"><a href="#1">'+ stores + '</a></td>\
                        <td class="-right"><a href="#1">'+ money + '</a></td>\
                        <td class="-right"><a href="#1">'+ total_money + '</a></td></tr>'
        $('tbody').append(temp);
    }
    let nownum = 0;


    // hover, text
    $('.search_brand_table tr').on('mouseover hover', function () {
        $(this).find('a').css('color', '#777');
    })
    $('.search_brand_table tr').on('mouseout unhover', function () {
        $(this).find('a').css('color', '#222222');
    })

    // 대소분류 dropdown
    $('#big_sort').on('change', function () {
        var selected = $('#big_sort option:selected').val()
        if (selected == 'unselected') {
            selected = 0;
        }
        $('select#small_sort' + nownum).hide();
        $('select#small_sort' + selected).show();
        nownum = selected;
    })
})
