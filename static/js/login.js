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
    $.ajax({
        type: "POST",
        url: "/login",
        data: {
            'id_give' : id
            , 'pw_give' : pw
        },
        success: function (res) { // 성공하면
            if (res['result'] == 'success') {
                alert(res['msg']);
            } else if (res['fail']) {
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
