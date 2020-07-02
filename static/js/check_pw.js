$(function() {
    $(".contents_login").keyup(function(e){if(e.keyCode == 13)  check_pw(); });
})

function check_pw() {
    var password = $('#user_password').val();
    console.log(password)
    if (verifyIdPw(password)) {
        try_login(password)
    }

}
// 둘중 하나 안썻나 확인하는 함수
function verifyIdPw(pw) {
    if (!pw) {
        alert('비밀번호를 입력해주세요.')
        return;
    } else {
        return true;
    }


}
// GO USING AJAX
function try_login(pw) {
    console.log('function try_login')
    $.ajax({
        type: "POST",
        url: "/check_pw",
        data: {
            'pw_give': pw
        },
        success: function (res) { // 성공하면
            console.log('res = ' + res)
            console.log('res result = ' + res['result'])
            console.log('res msg = ' + res['msg'])
            if (res['result'] == 'success') {
                window.location.href = '/change_pw';
            } else if (res['result'] == 'fail') {
                if (res['msg'] == 'wrong_pw') {
                    alert('비밀번호가 일치하지 않습니다.');
                } else if (res['msg'] == 'error_500') {
                    window.location.href = 'error_500.html'
                }
            }
        }
    })
}
