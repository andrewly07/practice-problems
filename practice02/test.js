function arrayReverse(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

var myArray = ['hello', 45, 'Bob', 'what', '23'];
var b = arrayReverse(myArray);