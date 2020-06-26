$(function() {
    $(".contents_find_pw").keyup(function(e){if(e.keyCode == 13)  find_pw(); });
})

function find_pw() {
    var id = $('#id').val();
    var name = $('#name').val();
    var email = $('#email').val();

    // 여기에 yy 와 email 정규식을 쓰느냐 마느냐가 좀 고민이긴 한데,
    // 아이디 제대로 찾고 싶으면 지가 알아서 입력해야지 라는 마인드로
    // 절-대 신경 안쓰지.
    // 바로 ajax 들어갑시다.
    if ( id && name && email ) {
        $.ajax({
            type:"POST",
            url:"/find_pw",
            data: {
                'id_give' : id,
                'name_give' : name,
                'email_give' : email
            },
            success: function(res) {
                if (res['result'] == 'success') {
                    alert(res['msg']);
                } else if (res['result'] == 'fail') {
                    if (res['msg'] == 'no') {
                        alert('가입되지 않은 회원정보입니다.');
                    } else if (res['msg'] == 'unknown_error') {
                        alert(res['msg'])
                    } else {
                        alert('서버 문제.')
                    }
                } else {
                    alert('서버에 문제가 생겼습니다. 관리자에게 문의해주세요.')
                }
            }
        })
    } else {
        alert('입력되지 않은 항목이 있습니다.');
    }
}