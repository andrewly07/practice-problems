function davidg_combo_problem4(x, y){
    var arr = [];
    var result1, result2, result3, result4
        var result1 = x+'+'+y+'='+(x+y);
        var result2 = x+'-'+y+'='+(x-y);
        var result3 = x+'*'+y+'='+(x*y);
        var result4 = x+'/'+y+'='+(x/y);
        arr.push(result1, result2, result3, result4);
        return arr;
}
console.log(davidg_combo_problem4(2,5));
