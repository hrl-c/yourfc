$(function() {
    $(".contents_login").keyup(function(e){if(e.keyCode == 13)  login(); });

})
function login() {
    var id = $('#user_id').val();
    var password = $('#user_password').val();
    if(verifyIdPw(id, password)) {
        try_login(id, password)
    }

}
// 둘중 하나 안썻나 확인하는 함수
function verifyIdPw(id, pw) {
    if (!id) {
        alert('아이디를 입력해주세요.')
        return;
    } else {
        if (!pw) {
            alert('비밀번호를 입력해주세요.')
            return;
        } else {
           return true;
        }

    }
}
// GO USING AJAX
function try_login(id, pw) {
    console.log('function try_login')
    $.ajax({
        type: "POST",
        url: "/login",
        data: {
            'id_give' : id
            , 'pw_give' : pw
        },
        success: function (res) { // 성공하면
            console.log('res = ' + res)
            console.log('res result = ' + res['result'])
            console.log('res msg = ' + res['msg'])
            if (res['result'] == 'success') {
                console.log(res['msg']);
                window.location.href = '/mypage';
            } else if (res['result'] == 'fail') {
                if (res['msg'] == 'no_id') {
                    alert('가입하지 않은 아이디입니다.')
                } else if (res['msg'] == 'no_pw') {
                    alert('잘못된 비밀번호입니다.')
                } else {
                    alert(res['msg'])
                    console.log(res['msg'])
                }
            }
        }
    })
}
