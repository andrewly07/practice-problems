

function countOccurences(){
var str = ['dog','cat','dog','pig','canary','cat','dog'];
for(var i = 0; i < str.length; i++) {
    str.search('dog');
}
return str.length
}

function wordLengths(){

}

function getMinMaxMean(){
    var numbers = [3,1,9,12,4];
    var total = 0;
    for(var i = 0; i < numbers.length; i++){
        total = total + numbers[i];
        math.min(numbers);
       math.max(numbers);

    }
    var avg = total / numbers.length;
    return {"min:" numbers.min, "max:" numbers.max, "mean:" numbers.avg};
}

function findMode(){
    var numbers = [5,2,7,18,2,42,5,2];
    var mode = [];
    var count = [];

    for(i = 0; i < numbers.length; i++){
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if(count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for( i in count)
        if(count.hasOwnProperty(i)){
            if(count[i] ===maxIndex){
                modes.push(number(i));
            }
        }
    return mode;

}

