$(function() {
    

    var fair_json = [
        {
            company : "월드전람",
            name: "제54회 프랜차이즈창업박람회 2020",
            yy: 2020,
            mm: 1,
            dd: 3,
            dd2: 5,
            days: 3,
            where: "COEX A홀",
            times: 101
        },
        {
            company : "월드전람",
            name: "제56회 프랜차이즈창업박람회 2020",
            yy: 2020,
            mm: 5,
            dd: 21,
            dd2: 23,
            days: 3,
            where: "수원",
            times: 101
        },
        {
            company : "월드전람",
            name: "제57회 프랜차이즈창업박람회 2020",
            yy: 2020,
            mm: 7,
            mm: 8,
            dd :30,
            dd2: 1,
            days: 3,
            where: "COEX B홀",
            times: 101
        },
        {
            company : "월드전람",
            name: "제55회 프랜차이즈창업박람회 2020",
            yy: 2020,
            mm: 1,
            dd: 5,
            dd2: 7,
            days: 3,
            where: "SETEC",
            times: 101
        },
        {
            company:"IFS",
            name: "2020 IFS 하반기 프랜차이즈 서울",
            yy: 2020,
            mm: 10,
            dd: 8,
            dd2: 10,
            days: 3,
            where: "COEX A홀",
            times: 202
        },
        {
            company:"IFS",
            name: "2021 IFS 상반기 프랜차이즈 서울",
            yy: 2021,
            mm: 4,
            dd: 8,
            dd2: 10,
            days: 3,
            where: "COEX A+B홀",
            times: 202
        }
    ];
    
    for (var i=0; i<fair_json.length; i++) {
        var its = fair_json[i]
        var company = its.company;
        var name = its.name;
        var yy = its.yy;
        var mm = its.mm;
        var mm2 = its.mm2;
        var dd = its.dd;
        var dd2 = its.dd2;
        var days = its.days;
        var where = its.where;
        var times = its.times;
    
        make_temp_for_fair(company, name, yy, mm, mm2, dd, dd2, days, where, times)
    }
})
    

function make_temp_for_fair(company, name, yy, mm, mm2, dd, dd2, days, where, times) {
    var date = date_control(yy, mm, mm2, dd, dd2);
    var time = time_control(times);
    var temp = '<tr>\
    <td><a href="#">프랜차이즈 / '+company+'</a></td>\
    <td><a href="#">'+ name +'</a></td>\
    <td><a href="#">'+ date +'</a></td>\
    <td><a href="#">'+ days +'일간</a></td>\
    <td><a href="#">'+ where +'</a></td>\
    <td><a href="#">'+ time +'</a></td>'

    $('.contents_fair tbody').append(temp);
}

function date_control(yy, mm, mm2, dd, dd2) {
    // 달이 넘어가는 경우와
    // 안넘어가는 경우로 해서 만들기.
    var date = '';
    if (!mm2) {
        date = yy +'/' + mm + '/' + dd +'~'+ dd2;
    } else if (mm2) {
        date = yy +'/' + mm + '/' + dd +'~'+ mm2 + '/' + dd2;
    } else {
        console.log('date_error on date_control')
    }
    return date
}

function time_control(times) {
    // 101 => 월드전람  10:00 ~ 17:00 16:30 입장마감        토요일은 30분 빠름
    // 202 => IFS 전람  10:00 ~ 17:00 16:30 입장마감
    var time = '';
    if (times == 10) {
        time = '10:00 ~ 17:00 16:30 입장마감 *토요일 마감 16:30'
    } else if (times == 202 || 101) {
        time = '10:00 ~ 17:00 16:30 입장마감';
    } else {
        console.log('times_errer on time_control')
    }
    return time
}