var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

function biggerWords(param1, param2){
    for(var i = 0; i < myArray.length; i++){
        if(myArray[i].length > param1){
            param2.push(myArray[i])
        }

    }    
    return param2;

}