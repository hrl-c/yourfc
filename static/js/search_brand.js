$(function () {
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
