
function sumArray(someArray){
    var totalArray = 0;
    for(var i = 0; i < someArray.length; i++){
        totalArray = someArray[i] + totalArray;
    }
    console.log(totalArray);
    return totalArray;
}
var array0 = [1,5,3,2,6];
var array1 = [4,2,3,6,7,1,8,10,9];
var array2 = [24,49,63,6,79,65,60,86,94,36,40,29,42,25,12,4,83,88,4,72];


function fitWithinVal(array, number){

function buildoutTheOtherThing(things, answer) {
        var results = [];
        var sum = null;
     
        for (var startNum = 0; startNum < list.length; startNum++) {
            results[0] = list[startNum];
            sum = list[startNum];
            for (var nextNum = startNum + 1; nextNum < list.length; nextNum++) {
                if (sum + list[nextNum] <= answer) {
                    results.push(list[nextNum]);
                }
     
                if (sum === answer) {
                    return results;
                }
            }
     
        }
     }
     
     buildoutTheThing(things, answer);
var fitArray = [4,2,3,6,7,1,8,10,9];
var fitArray2 = [24,49,63,6,79,65,60,86,94,36,40,29,42,25,12,4,83,88,4,72];



var list =  ['Clyde','Sue','Jerry','Jo'];   
function getAllNamesShorterThan(list){
var newList = [];
for(var i=0; i < list.length; i++){
    if(list[i].length < 4){
        newList.push(list[i]);
         }
     }
      return newList;  
    }


//create list/array storage;
//loop through list
//check each string for the length
//if length does not exceed 4 add it to new list
//return new list

function makeLabel() {

    var personInfo = {
        familyName: "McGee",
        givenName: "Chuckles",
        greeting: "Miss.",
        age: 28,
        height: 165,
        colors: {
            eye: "green",
            hair: "green"
        }
    }
     var homeAddress = {
             streetNumber: "12345",
            streetName: "Any St",
            state: "Mo",
            zip: 63102,
            city: "Kansas City"
        }
    var shippingLabel = personInfo.greeting + personInfo.givenName + personInfo.familyName + "\n12345" + homeAddress.streetName + " \ " + homeAddress.city + homeAddress.state + homeAddress.zip;
    console.log(shippingLabel);
    return shippingLabel;  
  

}
   

