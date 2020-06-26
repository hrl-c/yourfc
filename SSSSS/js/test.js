function find_id() {
    var mm_raw = '06'
    var dd_raw = '12'
    var mm = judge_mmdd(mm_raw);
    var dd = judge_mmdd(dd_raw);
    console.log(mm, dd)
}

function judge_mmdd(mmdd_raw) {
    var mmdd = mmdd_raw;
    mmdd = mmdd.replace(/^0+/, '');
    return mmdd;
}
find_id();