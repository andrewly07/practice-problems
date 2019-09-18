
function dan_math_sequence(input){
    var output_array = [];
    for(var i=input*2; i<input+38; i+=2){
      if(i>input*10){
        var o = i / 4;
      } else {
        o = i;
      }
      output_array.push(o);
    }
    return output_array;
  }
console.log(dan_math_sequence(2));

console.log(dan_math_sequence(5));