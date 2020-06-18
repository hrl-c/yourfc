signup()
function signup() {
    var id = 'tlvkffus';
    var result = id_check(id);
    if (result == 1) {
        console.log(result);
        console.log('사용가능한 아이디입니다!')
    } else if (!result) {
        console.log(result);
        console.log('이미 사용중인 아이디입니다.')
    } else {
        console.log('error | result : ' + result);
    }
}

function id_check(id) {
    var ids = ['dlagkfka93', 'dlagkfka96', 'kazea96', 'tlqkf'];

    var token = 1;
    for (var i=0; i < ids.length; i++) {
        if (id == ids[i]) {
            console.log('Who using this id')
            token = 0;
        }
    }

    return token;
}
/* 
이로써 나오는 일처리 순서
일단 signup에 var ck-id를 추가시킨다.
function id_check()를 만들어 ajax로 Flask에 보내서, db를 열람하여 해당 아이디가 있는지 확인한다.
있다면 1을, 없다면 0을 Jsonify로 하여금 success와 함께 보내도록 한다.
나머지는 알아서 쿵짝쿵짝

아하아하
만약에 id_chk이 0이라면 chk_total에 합칠게 아니라,
ajax를 보내기전에 팝업이 나도록 해주는것이 훨씬 현명할 것 같다.
*/