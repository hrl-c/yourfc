var name = 'asfjknaskjfnaskj아'
var name_frame = /^[가-힣]{2, 4}$/;
if (!name_frame.test(name)) {
    console.log('올바르게')
} else if (name_frame.test(name)) {
    console.log('did it')
}