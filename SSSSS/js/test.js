var basic = 57.99;

function delevery() {
    this.basic = 11.13;
    this.prime = 17.13;
    this.express = 28.58;
}

var del = new delevery();

make_it_dollar(basic + del.basic);
make_it_dollar(basic + del.prime);
make_it_dollar(basic + del.express);

function make_it_dollar(won) {
    var dollar = won*1230;
    console.log(dollar);
}

var basic_one = make_it_dollar(basic + del.basic);
var prime_one = make_it_dollar(basic + del.prime);
var express_one = make_it_dollar(basic + del.express);

var tlqkf = basic_one-prime_one;
console.log(tlqkf);
console.log(sival);
console.log(fuxk);