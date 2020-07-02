$(function() {
    $(".contents_login").keyup(function(e){if(e.keyCode == 13)  change_pw(); });
})

function change_pw() {
    var pw = $('#user_password').val();
    var pw_c = $('#user_password_check').val();
    // 두 pw가 일치하는지
    var compared = compare_pw(pw, pw_c);
    console.log(compared);

    // 양식에 맞는지
    var framed = frame_pw(pw);
    console.log(framed);

    var result_pw = compared + framed;
    // ajax로 보내기
    if (result_pw == 2) {
        $.ajax({
            type: "POST",
            url:"/change_pw",
            data: {
                'pw_give' :pw
            },
            success: function(res) {
                if (res['result'] == 'success') {
                    alert(res['msg']);
                    window.location.href = '/mypage';
                } else {
                    alert(res)
                }
            }
        })
    } else {
        return false;
    }
}

function compare_pw(pw, pw_c) {
    if (pw == '' || pw_c == '') {
        alert('변경할 비밀번호를 입력해주세요.');
        return 0;
    } else if (pw !== pw_c) {
        alert('비밀번호 확인이 일치하지 않습니다.');
        return 0;
    } else if (pw == pw_c) {
        return 1;
    }
}

function frame_pw(pw) {
    var pw_frame = /(?=.*\d{1,15})(?=.*[a-zA-Z]{1,15}).{8,15}$/;
    if (!pw_frame.test(pw)) {
        alert('비밀번호는\n영어 대소문자와 숫자가 하나씩 들어간\n8자리이상 15자리이하 여야 합니다');
        return 0;
    } else if (pw_frame.test(pw)) {
        return 1;
    }
}