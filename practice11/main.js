var evenodd = [2,5,1,6,8,2,20,'cat',13,3];
function sortNumbers(evenodd){
    var odd = [];
    var even = [];
    var evenAnOdd = {};
    for (i = 0; i < evenodd.length; i++){
       if(typeof evenodd[i] === "number"){
            if(evenodd[i] % 2 === 0){
            even.push(evenodd[i])    
         } else{
            odd.push(evenodd[i])
        }
        }
    }

    evenAnOdd["even"] = even
    evenAnOdd["odd"] = odd
    return evenAnOdd;
}
