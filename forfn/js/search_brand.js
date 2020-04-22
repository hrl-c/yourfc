$(function() {
    // hover, text
    $('.search_brand_table tr').on('mouseover hover', function() {
        $(this).find('a').css('color', 'black');
    })
    $('.search_brand_table tr').on('mouseout unhover', function() {
        $(this).find('a').css('color', '#777');
    })
})