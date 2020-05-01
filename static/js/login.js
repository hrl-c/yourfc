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
        success: function (response) { // 성공하면
            if (response['result'] == 'success') {
                alert(response['msg']);
            } else {
                console.log(response);
            }
        }
    })
}
