$(function () {

    /*========== signup_terms.html*/
    
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

