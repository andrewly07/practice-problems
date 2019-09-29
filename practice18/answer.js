var inputArray = 
[
    [1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
    [0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
    [5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
    [6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
]
function average_array(inputArr) {
    let xCoord = 0;
    let yCoord = 0;
    const outputArr = [[],[],[],[]];
    debugger;
    for (xCoord; yCoord < 2; ) {
        const currentTarget = [[xCoord * 2, (xCoord *2) + 1],[yCoord * 2, (yCoord * 2) + 1]];
        let total = 0;
        let averageTotal = 0;
        for (let x = 0; x < currentTarget[0].length; x++) {
            for (let y = 0; y < currentTarget[1].length; y++) {
                total += inputArr[currentTarget[1][y]][currentTarget[0][x]]
            }
        }
        averageTotal = (total/4).toFixed(1);
        outputArr[currentTarget[1][0]].push(averageTotal);
        outputArr[currentTarget[1][0]].push(averageTotal);
        outputArr[currentTarget[1][1]].push(averageTotal);
        outputArr[currentTarget[1][1]].push(averageTotal);
        xCoord++;
        if (xCoord > 4) {
            xCoord = 0;
            yCoord++;
        }
    }
    return outputArr;
}
console.log(average_array(inputArray));