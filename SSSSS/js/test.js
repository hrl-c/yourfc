var id = 'dagkfka93';
// 숫자와 영문이 하나씩 들어간 8자리 이상 15자리 이하인 아이디 색출.
var id_frsame = /(?=.*\d{1,15})(?=.*[a-z]{1,15}).{6,15}$/;
var id_frame = /^[a-z0-9]{6,15}$/;
if (!id_frame.test(id)) {
    console.log('아이디는\n영어 소문자와 숫자가 하나씩 들어간\n6자리이상 15자리이하 여야 합니다')
} else if (id_frame.test(id)) {
    console.log('ㄱ...가능..!')
    
} else {
    console.log('error in id')
}

console.log(id_frame.test(id))
if (id_frame.test(id) == true) { console.log('뭔 에러야 시발'); }