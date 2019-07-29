var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
var string1 = 'bug';

function biggerWords(string1, array1){
    var array1 = [];
    for(var i = 0; i < myArray.length; i++){
        if(myArray[i].length > string1.length){
            array1.push(myArray[i])
        }

    }    
    return array1;

}