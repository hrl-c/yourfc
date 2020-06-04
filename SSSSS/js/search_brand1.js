function option_search() {

    // for TEST
    alert('It\'s worked !');

    // demo
    /*
    var big = $('#big_sort option:selected').text();
    var small = $('.small_sort-forjs selext option:selected')
    */
    var str = '';
    var test = [];
    $('select option:selected').each(function() {
        str += $(this).text() + ' , ';
        if ($(this).val() !== 'unselected') {
        test.push($(this).text());
        }
    });
    console.log(test);
    alert(str);
}