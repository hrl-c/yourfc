$(function () {
    /*========== signup_terms.html*/

    $('input[name="terms_service"]').click(function () {
        console.log('here')
        if ($(this).attr('id') == 'check_all') {
            var chk = $(this).is(":checked");//.attr('checked');
            if (chk) {
                $("#box_1").prop('checked', true);
                $("#box_2").prop('checked', true);
                ready_signup();
            }
            else {
                $("#box_1").prop('checked', false);
                $("#box_2").prop('checked', false);
                unready_signup();
            }
        } else {
            var chk = $(this).is(":checked");//.attr('checked');
            if (!chk) {
                $("#check_all").prop('checked', false);
                unready_signup();
            } else if ($("#box_1").is(":checked") && $("#box_2").is(":checked")) {
                $("#check_all").prop('checked', true);
                ready_signup();
            }
        }
    })

    /*
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
    */


    $('#go_to_signup').hide();
    $('#pls_check_all_terms').on('click', function () {
        alert("모든 필수 약관에 동의해주세요")
    })

    /*========== signup.html*/

    // 페이지 로딩시에 yymmdd select 템플릿 생기게 만들기
    show_yymmdd_temp(2010, 1919, 'yy');
    show_yymmdd_temp(1, 13, 'mm');
    show_yymmdd_temp(1, 32, 'dd');



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

    $('input, #gender, #yy, #mm, #dd').on('click focusin', function () {
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
    var chk_1 = $('#box_1').is(':checked', true)
    var chk_2 = $('#box_2').is(':checked', true)
    if (chk_1 + chk_2 == 2) {
        return
    }
}

function ready_signup() {
    $('#go_to_signup').show();
    $('#pls_check_all_terms').hide();
}
function unready_signup() {
    $('#go_to_signup').hide();
    $('#pls_check_all_terms').show();
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
    let yy = $('#yy').val();
    let mm = $('#mm').val();
    let dd = $('#dd').val();
    let gender = $('#gender').val();
    let email = $('#email').val();
    let phone = $('#phone').val();


    let for_check = 1;
    // console.log($('#gender').val());
    console.log('1 : ' + for_check);
    for_check = check_date(mm, dd);
    console.log('2 : ' + for_check);
    for_check = check_each();
    console.log('3 : ' + for_check);
    for_check = check_select();
    console.log('4 : ' + for_check);
    // for_check = check_type()
    console.log('-----------------------------------------');

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
    for (var i = 1; i < 7; i++) {
        if (!$('input:eq(' + i + ')').val()) {
            make_box_red('input:eq(' + i + ')');
            for_check = 0;
            console.log('after_for_check : ' + for_check)
            var for_console = $('input:eq(' + i + ')').attr('id')
            console.log('***' + for_console + ':' + $('input:eq(' + i + ')').val())
        } else {
            for_check = 1;
        }
        // console.log( i + ':' + $('input:eq(' + i + ')').val())
    }
    return for_check;
}

function check_select() {
    if ($('#gender').val() == 'unselected') {
        make_box_red('#gender');
        for_check = 0;
    }
    if ($('#yy').val() == 'unselected') {
        make_box_red('#yy');
        for_check = 0;
    }
    if ($('#mm').val() == 'unselected') {
        make_box_red('#mm');
        for_check = 0;
    }
    if ($('#dd').val() == 'unselected') {
        make_box_red('#dd');
        for_check = 0;
    }
    return for_check;
}

function check_date(mm, dd) {
    console.log(mm);
    console.log(dd);
    console.log('시발련아');
    if (mm == 2) {
        console.log('시발련아');
        switch (dd) {
            case 30:
            case 31:
                console.log('시발련아');
                alert('2월을 선택하시고,' + dd + '일을 선택하셨습니다.');
                for_check = 0;
                return for_check;
                break;
            case 29:
                var answer = confirm('생년월일이 2월 29일로 선택하셨습니다. \n맞으면 확인을 눌러주세요.');
                if (answer == true) {
                    for_check = 1;
                    return for_check;
                    break;
                } else {
                    alert('생년월일을 다시 입력해주세요.')
                    for_check = 0;
                    return for_check;
                    break;
                }
        }
    }
    if (dd == 31) {
        console.log('시발련아');
        switch (mm) {
            case 2:
            case 4:
            case 6:
            case 9:
            case 11:
                alert('31일이 없는 달을 선택하셨습니다.');
                for_check = 0;
                return for_check;
                break;
            default:
                for_check = 1;
                return for_check;
                break;
        }
    }

}

function check_type(for_check) {
    // 이메일이 형식에 맞는지 체크

    // 전화번호가 형식에 맞는지 체크
}


// YYMMDD !!!!!!!!!!!!

// for로 돌릴 함수 만들기
function show_yymmdd_temp(start, end, sort) {
    var temp = ''
    if (sort == 'yy') {
        for (var i = start; i > end; i--) {
            // temp += 'option value="' + i + '">' + i + '</option>'
            temp += '<option value="'
            temp += i
            temp += '">'
            temp += i
            temp += '</option>'
        }
    } else {
        for (var i = start; i < end; i++) {
            // temp += 'option value="' + i + '">' + i + '</option>'
            temp += '<option value="'
            temp += i
            temp += '">'
            temp += i
            temp += '</option>'
        }

    }
    $('#' + sort).append(temp)
}