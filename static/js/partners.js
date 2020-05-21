$(function() {
    $('.second_filter:eq(0)').css('display', 'block');

    var at_first = 0;
    // 두번째 filter 보여주는 코드
    $('.first_filter').on('click', function() {
        $('.first_filter:eq(' + at_first + ') li').removeClass('hr-active')
        $('.second_filter').eq(at_first).css('display', 'none');
        at_first = $(this).index()
        console.log('---------\n now' + at_first + '\n --------')
        $('.second_filter').eq(at_first).css('display', 'block');
    })

    // 첫번째 filter가 죽지않는 코드
    // 1. uk-active 붙여준다        2. first 바뀔시 죽여준다.
    $('.second_filter ul a').on('click', function() {
        /*
        if ( make_it_live == 1 ) {

        }
        */
       $('.first_filter:eq(' + at_first + ') li').addClass('hr-active');
    })


    // 카드 관련 js
    
    
    for (var i = 0; i <20; i ++) {
        let card_temp = make_random_pts();
        $('#pts_card_box').append(card_temp);    
    }
})

function make_random_pts() {
    let names = [
        '명품', '최고', '완벽', '최저가'
    ]
    let locals = [
        '강남', '교대', '논현' , '서초', '역삼', '마포', '명동', '노원', '영등포', '신도림', '잠실', '이대' ,'수원', '인천', '안산', '평촌', '산본', '군포' , '구리'
    ]
    // let bigs = [ '인테리어', '매장기기', '법률' ]
    let bigs = [ {korean:'인테리어',eng:'inte'}, {korean:'매장기기',eng:'machine'}, {korean:'법률',eng:'law'} ]
    
    let hashtags = [ '전문점', '장인' ]

    // Math.random() * (max - min) + min;

    // console.log( Math.floor(Math.random()*20 )) 
    
    let local = locals[  Math.floor(Math.random()*(19) ) ];
    //let big = bigs[  Math.floor(Math.random()*(3) ) ];
    // let small = smalls[  Math.floor(Math.random()*(4) ) ];
    let newObj = bigs[  Math.floor(Math.random()*(3) ) ];
    let big = newObj.korean;
    let sort_big = newObj.eng;
    
    let receiveObj = choose_small(sort_big);
    let small = receiveObj.s;
    let sort_small = receiveObj.ss;
    let name = local +' '+ names[  Math.floor(Math.random()*4 ) ] + small;
    let hashtag_1 = small + hashtags[  Math.floor(Math.random()*(2) ) ];
    let hashtag_2 = local;
    //let sort_big = bigs.big
    
    /*
    if ( big == '인테리어' ) {
        sort_big = 'inte';
    } else if ( big == '매장기기' ) {
        sort_big = 'machine'
    } else {
        sort_big = 'law'
    }
    
    if ( small == '인테리어' ) {
        sort_small = 'inte';
    } else if ( small == '간판' ) {
        sort_small = 'sign';
    } else if (small == '가구' ) { 
        sort_small = 'furniture'
    } else {
        sort_small = 'design';
    }
    */
    let num = Math.floor(Math.random()*100)
    console.log(name + '|' + local + '|' + big + '|' + small + '|' + hashtag_1)
    var results = make_pts_cards( num, sort_big, sort_small, name, local, big, small, hashtag_1, hashtag_2)
    return results;
}
function choose_small(sort_big) {
    let small ='';
    let sort_small ='';
    let smalls_inte = [
        {
            korean: '인테리어'
            , eng : 'inte'
        },
        {
            korean: '간판'
            , eng : 'sign'
        },
        {
            korean: '가구'
            , eng : 'furniture'
        },
        {
            korean: '디자인'
            , eng : 'design'
        }
    ]
    let smalls_machine =[
        {
            korean : '주방'
            , eng : 'kitchen'
        },
        {
            korean : 'POS'
            , eng : 'pos'
        }
    ]
    let smalls_law =[
        {
            korean : '세무사'
            , eng : 'tax'
        },
        {
            korean : '노무사'
            , eng : 'labor'
        },
        {
            korean : '보험'
            , eng : 'insurance'
        }
    ]

    if ( sort_big == 'inte' ) {
        newObj = smalls_inte[Math.floor(Math.random()*4)];
        small = newObj.korean;
        sort_small = newObj.eng;
    } else if ( sort_big == 'machine' ) {
        newObj = smalls_machine[Math.floor(Math.random()*2)];
        small = newObj.korean;
        sort_small = newObj.eng;
    } else if ( sort_big == 'law' ) {
        newObj = smalls_law[Math.floor(Math.random()*3)];
        small = newObj.korean;
        sort_small = newObj.eng;
    } else {
        console.log('*************sort_small-error*************');
        return
    }
    return { s : small , ss : sort_small}
}
function make_pts_cards(num, sort_big, sort_small, name, local, big, small, hashtag_1, hashtag_2) {

    let card_temp = '<li data-sort_big="'+ sort_big +'" data-sort_small="'+ sort_small +'">\
                        <div class="uk-card uk-card-hover  uk-card-body">\
                            <canvas width="600" height="650"></canvas>\
                            <div class="uk-position-center">\
                                <div class="pts_img">\
                                    <img src="https://picsum.photos/250/150/?random='+ num +'&blur=2">\
                                </div>\
                                <div class="card_details">\
                                    <p>\
                                        <span class="pts_card_title">\
                                            '+ name +'\
                                        </span>\
                                        <span class="pts_card_local">\
                                            '+ local +'\
                                        </span>\
                                    </p>\
                                    <p>\
                                        <span class="pts_card_sort_big">\
                                            '+  big +'\
                                        </span>\
                                        <span class="pts_card_sort_small">\
                                            / '+ small +'\
                                        </span>\
                                    </p>\
                                    <p>\
                                        <span class="pts_card_hashtag">\
                                            #'+ hashtag_1 +' #'+ hashtag_2 +'\
                                        </span>\
                                    </p>\
                                    <button class="uk-button uk-button-primary uk-button-small">자세히보기</button>\
                                </div>\
                            </div>\
                        </div>\
                    </li>'
    return card_temp;
}