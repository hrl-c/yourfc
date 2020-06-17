// 오늘 날짜 난수 발생
let tlqkf = new Date();
console.log(tlqkf);

// 하기전에 나중에 할만한 짓을 미리 구현해봅시다.

/* 
A씨는 2020년 10월 3일에 B씨의 사이트에 가입하였습니다.
B씨는 회사 이름이 바뀜에 따라,
2021년 8월 30일 날이 바뀌는 12시 정각에 개인정보 이용약관을 개정하였고,
이에 사이트에 모든 사람에게 바뀐 약관의 동의 팝업을 띄우고 싶습니다.

B씨가 평소 가입날짜를 yy, mm, dd로 따로 두 숫자로 관리하고 있었을 경우,
B씨가 A씨의 약관개정 동의를 받아야한다고 인지하고,
팝업을 띄우는 과정의 코드를 만드시오.
*/

users = [
    { name: 'A', su_yy: 2020, su_mm: 10, su_dd: 3 },
    { name: 'C', su_yy: 2023, su_mm: 10, su_dd: 3 },
    { name: 'D', su_yy: 2019, su_mm: 10, su_dd: 3 },
    { name: 'E', su_yy: 2021, su_mm: 8, su_dd: 30 },
    { name: 'F', su_yy: 2021, su_mm: 8, su_dd: 31 },
    { name: 'G', su_yy: 2021, su_mm: 8, su_dd: 29 },
    { name: 'H', su_yy: 2088, su_mm: 1, su_dd: 3 },
    { name: 'I', su_yy: 2020, su_mm: 8, su_dd: 6 },
    { name: 'J', su_yy: 2021, su_mm: 12, su_dd: 5 },
    { name: 'K', su_yy: 2022, su_mm: 7, su_dd: 23 }
];
for (var i = 0; i < users.length; i++) {
    if (users[i].su_yy < 2021) {
        console.log('범인은 ' + users[i].name);
    } else if (users[i].su_yy == 2021) {
        if (users[i].su_mm < 8) {
            console.log('범인은 ' + users[i].name);
        } else if (users[i].su_mm == 8) {
            if (users[i].su_dd < 30) {
                console.log('범인은 ' + users[i].name);
            } else {
            }
        } else {
        }
    } else {
    }
}

let year = tlqkf.getFullYear(); // 년도
let month = tlqkf.getMonth() + 1;  // 월
let date = tlqkf.getDate();  // 날짜
let day = tlqkf.getDay();  // 요일
console.log(year);
console.log(month);
console.log(date);
console.log(day);

console.log('================================');

let sival = 'Thu Jun 18 2020 06:33:25 GMT+0900 (GMT+09:00) {}';
console.log(sival)


let year1 = sival.getFullYear(); // 년도
let month2 = sival.getMonth() + 1;  // 월
let date2 = sival.getDate();  // 날짜
let day2 = sival.getDay();  // 요일
console.log(year1);
console.log(month2);
console.log(date2);
console.log(day2);