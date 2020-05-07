$(function () {

    /*========== signup_terms.html*/

    $('input[name="terms_service"]').click(function () {
        console.log('here')
        if ($(this).attr('id') == 'check_all') {
            var chk = $(this).is(":checked");//.attr('checked');
            if (chk) {
                $("#box_1").prop('checked', true);
                $("#box_2").prop('checked', true);
            }
            else {
                $("#box_1").prop('checked', false);
                $("#box_2").prop('checked', false);
            }
        } else {
            var chk = $(this).is(":checked");//.attr('checked');
            if (!chk) {
                $("#check_all").prop('checked', false);
            } else if ( $("#box_1").is(":checked") && $("#box_2").is(":checked") ){
                $("#check_all").prop('checked', true);

            }
        }
    })

    $("#check_all").click(function () {
        var chk = $(this).is(":checked");//.attr('checked');
        if (chk) {
            $("#box_1").prop('checked', true);
            $("#box_2").prop('checked', true);
        }
        else {
            $("#box_1").prop('checked', false);
            $("#box_2").prop('checked', false);
        }
    });

    $('#box_1').click(function () {
        var unchk = $('#box_1').is(':checked', true)
        if (!unchk) $('#check_all').prop('checked', false)
    })
    $('#box_2').click(function () {
        var unchk = $('#box_2').is(':checked', true)
        if (!unchk) $('#check_all').prop('checked', false)
    })

    /*========== signup.html*/
    $('#password_check').on('mouseleave focusout', function () {
        let pw = $('#password').val();
        let pw_check = $('#password_check').val();
        if (pw == '') {
            return
        } else if (pw !== pw_check) {
            if ($('#password_check').hasClass('uk-form-success')) {
                $('#password_check').removeClass('uk-form-success');
            }
            make_box_red('#password_check');
            red_show();
        } else if (pw == pw_check) {
            if ($('#password_check').hasClass('uk-form-danger')) {
                $('#password_check').removeClass('uk-form-danger');
            }
            $('#password_check').addClass('uk-form-success');
            red_hide();
        }
    })

    $('input, #gender').on('click focusin', function () {
        if ($(this).attr('id') !== 'password_check') {
            if ($(this).hasClass('uk-form-danger')) {
                $(this).removeClass('uk-form-danger');
            }
        }

    })
})


/* ================ signup_terms.html */
var checked_terms = 0
function check_terms() {
    var box_all = $('#box_all').val();
    var box_all = $('#box_1').val();
    var box_all = $('#box_2').val();
    console.log(box_all + ' | ')
    console.log(box_1 + ' | ')
    console.log(box_2)
}

/* ================ signup.html */
function red_show() {
    if ($('.-red').hasClass('-none')) {
        console.log(1);
    } else {
        console.log('error');
    }
    console.log(2);
    $('.-none').css('display', 'inline');
    console.log(3);
}
function red_hide() {
    if ($('.-red').css('display') == 'inline') {
        console.log(1);
    } else {
        console.log('error');
    }
    $('.-none').css('display', 'none');
}
function make_box_red(box) {
    $(box).addClass('uk-form-danger');
}

function signup() {
    // console.log('-------------------------go_signup')
    let id = $('#id').val();
    let pw = $('#password').val();
    let pw_check = $('#password_check').val()
    let name = $('#name').val();
    let yymmdd = $('#yymmaa').val();
    let gender = $('#gender').val();
    let email = $('#email').val();
    let phone = $('#phone').val();


    let for_check = 1;
    // console.log($('#gender').val());
    check_each();
    if ($('#gender').val() == 'unselected') {
        make_box_red('#gender');
        for_check = 0;
    }
    if (for_check == 0) {
        alert('입력되지 않은 항목이 있습니다.');
        return
    }
    if (pw !== pw_check) {
        alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요');
        return
    }
    console.log(for_check)
    alert('회원가입 완료')

}

function check_each() {
    for (var i = 1; i < 8; i++) {
        if (!$('input:eq(' + i + ')').val()) {
            make_box_red('input:eq(' + i + ')');
            for_check = 0;
            console.log('***' + i + ':' + $('input:eq(' + i + ')').val())
        }
        // console.log( i + ':' + $('input:eq(' + i + ')').val())
    }
    return for_check;
}