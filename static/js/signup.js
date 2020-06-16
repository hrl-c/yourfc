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


    // 패스워드 확인 항상 감시
    let chked_pw = 0;
    $('#password_check').on('mouseleave focusout', function () {
        let pw = $('#password').val();
        let pw_check = $('#password_check').val();
        if (pw == '') {
            chked_pw = 0;
            return
        } else if (pw !== pw_check) {
            make_box_green('#password_check');
            chked_pw = 0;
            make_box_red('#password_check');
        } else if (pw == pw_check) {
            make_box_common('#password_check');
            $('#password_check').addClass('uk-form-success');
            chked_pw = 1;
        }
    })

    // 빨간색의 박스에 커서에 '''간섭'''할 때, 빨간표시를 없애주는 코드
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

// 박스 색깔 변환 함수S
function make_box_red(box) {
    if ($(box).hasClass('uk-form-success')) {
        $(box).removeClass('uk-form-success')
    }
    $(box).addClass('uk-form-danger');
}
function make_box_green(box) {
    if ($(box).hasClass('uk-form-danger')) {
        $(box).removeClass('uk-form-danger')
    }
    $(box).addClass('uk-form-success');
}

function make_box_common(box) {
    if ($(box).hasClass('uk-form-danger')) {
        $(box).removeClass('uk-form-danger');
    }
    if ($(box).hasClass('uk-form-success')) {
        $(box).removeClass('uk-form-success')
    }
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


    let chk_input = 0;
    let chk_select = 0;
    let chk_date = 0;
    chk_date = check_date(mm, dd);

    chk_input = check_each();

    chk_select = check_select();
    console.log('-----------------------------------------');

    if (pw !== pw_check) {
        alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요');
        return false;
    }

    var chk_total = chk_input + chk_select + chk_date;
    console.log('chk_total : ' + chk_total);
    console.log('chk_input : ' + chk_input);
    console.log('chk_select : ' + chk_select);
    console.log('chk_date : ' + chk_date);
    if (chk_total == 3) {
        $.ajax({
            url: '/signup',
            type: 'POST',
            data: {
                'id-give': id,
                'pw-give': pw,
                'pw_check-give': pw_check,
                'name-give': name,
                'yy-give': yy,
                'mm-give': mm,
                'dd-give': dd,
                'gender-give': gender,
                'email-give': email,
                'phone-give': phone
            },
            success: function (res) {
                if (res['result'] == 'success') {
                    alert('회원가입 완료')
                    window.location.href = '/';
                } else {
                    alert('ERROR');
                }
            }
        })
    } else {
        return false;
    }
    
    console.log(for_check)
    alert('회원가입 완료!!!!!!!!!!!')

}

/*
id_receive = request.form['id-give']
pw_receive = request.form['pw-give']
pw_check_receive = request.form['pw_check-give']
name_receive = request.form['name-give']
yy_receive = request.form['yy-give']
mm_receive = request.form['mm-give']
dd_receive = request.form['dd-give']
gender_receive = request.form['gender-give']
email_receive = request.form['email-give']
phone_receive = request.form['phone-give']

'id' : id_receive,
'pw' : pw_receive,
'pw_check' : pw_check_receive,
'name' : name_receive,
'yy' : yy_receive,
'mm' : mm_receive,
'dd' : dd_receive,
'gender' : gender_receive,
'email' : email_receive,
'phone' : phone_receive
*/

function check_each() {
    var for_cal = 0;
    var for_frame = 0;
    for (var i = 1; i < 7; i++) {
        // 적었는지 확인하는 코드
        if (!$('input:eq(' + i + ')').val()) {
            make_box_red('input:eq(' + i + ')');
            for_cal += 0;
            console.log('after_for_check : ' + chk_input)
            var for_console = $('input:eq(' + i + ')').attr('id')
            console.log('***' + for_console + ':' + $('input:eq(' + i + ')').val())
        } else if($('input:eq(' + i + ')').val().search(/\s/) != -1){
            alert("모든 입력사항은 \n공백 없이 입력해주세요.");
            return
        } else {
            for_cal += 1;
            // 형식에 맞는지 판단하는 코드
            switch (i) {
                case 1:
                    var id = $('#id').val();
                    // 숫자와 영문이 하나씩 들어간 8자리 이상 15자리 이하인 아이디 색출.
                    var id_frame = /(?=.*\d{1,15})(?=.*[a-z]{1,15}).{6,15}$/;
                    if (!id_frame.test(id)) {
                        make_box_red('#id');
                        alert('아이디는 영어 소문자와 숫자가 하나씩 들어간 6자리이상 15자리이하 여야 합니다')
                        break;
                    } else if (id_frame.test(id)) {
                        make_box_green('#id');
                        for_frame += 1;
                        break;
                    } else {
                        alert('오류 발생');
                        console.log('error_in_id');
                        break;
                    }
                case 1:
                    var password = $('#password').val();
                    // 숫자와 영문이 하나씩 들어간 8자리 이상 15자리 이하인 PW 색출.
                    var pw_frame = /(?=.*\d{1,15})(?=.*[a-zA-Z]{1,15}).{8,15}$/;
                    if (!pw_frame.test(password)) {
                        make_box_red('#password');
                        alert('비밀번호는 영어 대소문자와 숫자가 하나씩 들어간 8자리이상 15자리이하 여야 합니다')
                        break;
                    } else if (pw_frame.test(password)) {
                        make_box_green('#password');
                        for_frame += 1;
                        break;
                    } else {
                        alert('오류 발생');
                        console.log('error_in_pw');
                        break;
                    }
                case 4:
                    var name = $('#name').val();
                    var name_frame = /^[가-힣]{2, 4}$/;
                    if (!name_frame.test(name)) {
                        make_box_red('#name');
                        alert('이름이 올바르지 않습니다')
                        break;
                    } else if (name_frame.test(name)) {
                        make_box_green('#name');
                        for_frame += 1;
                        break;
                    } else {
                        alert('오류 발생');
                        console.log('error_in_name');
                        break;
                    }
                case 5:
                    var email = $('#email').val();
                    var email_frame = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
                    if (!email_frame.test(email)) {
                        make_box_red('#email');
                        alert('이메일 형식이 올바르지 않습니다')
                        break;
                    } else if (email_frame.test(email)) {
                        make_box_green('#email');
                        for_frame += 1;
                        break;
                    } else {
                        alert('오류 발생');
                        console.log('error_in_email');
                        break;
                    }
                case 6:
                    var phone = $('#phone').val();
                    if ( phone.length > 9 && phone.length < 12 ) {
                        for_frame += 1;
                        break;
                    } else {
                        make_box_red('#phone');
                        alert('전화번호는 \'-\' 없이 10~11자리만 입력해주세요.');
                        break;
                    }
                default:
                    for_frame += 1;
                    break;
            }
        }
    }
    if (for_cal == 6  && for_frame == 6) {
        chk_input = 1;
    } else {
        alert('정확하게 입력되지 않은 항목이 있습니다.')
        chk_input = 0;
    }
    return chk_input;
}

function check_select() {
    // cs = check_select
    var forfor = 0;
    var cs = ['#gender', '#yy', '#mm', '#dd'];
    for (var i=0; i<cs.length; i++) {
        if ( $(cs[i]).val() == 'unselected' ) {
            make_box_red(cs[i]);
        } else {
            forfor += 1;
        }
    }
    if ( forfor == 4 ) {
        chk_select = 1;
    } else {
        chk_select = 0;
        alert('입력되지 않은 항목이 있습니다.')
    }
    return chk_select;
}

function check_date(mm, dd) {
    var cd = 1;
    if (mm == 2) {
        switch (dd) {
            case '30':
            case '31':
                alert('2월을 선택하시고,' + dd + '일을 선택하셨습니다.');
                make_box_red('#dd');
                cd = 0;
                return cd;
                break;
            case '29':
                var answer = confirm('생년월일이 2월 29일로 선택하셨습니다. \n맞으면 확인을 눌러주세요.');
                if (answer == true) {
                    cd = 1;
                    return cd;
                    break;
                } else {
                    alert('생년월일을 다시 입력해주세요.');
                    make_box_red('#mm');
                    make_box_red('#dd');
                    cd = 0;
                    return cd;
                    break;
                }
            default:
                cd = 1;
                return cd;
                break;
        }
    }
    if (dd == 31) {
        switch (mm) {
            case '2':
            case '4':
            case '6':
            case '9':
            case '11':
                alert('31일이 없는 달을 선택하셨습니다.');
                make_box_red('#dd');
                cd = 0;
                return cd;
                break;
            default:
                cd = 1;
                return cd;
                break;
        }
    }
    console.log('cd : ' + cd);
    if ( cd == 1 ) {
        return cd;
    } else {
        return 0;
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