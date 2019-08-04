function oneToMulti (myArray){
    var value = true;
    var groupArray = [];
    var boolArray = [];
    var stringArray = [];
    var numArray = [];
    var myArray = [];
for( var i = 0; i < myArray.length; i++){
    switch (typeof value) {
        case 'string':
          stringArray.push(myArray);
          break;
        case 'number':
          numArray.push(myArray);
          break;
        case 'boolean':
           boolArray.push(myArray);
          break;
        }; 
    }
    return groupArray;
};