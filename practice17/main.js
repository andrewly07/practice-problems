function skippy_numbers(n) {
	var current_num,
        list = [n, n+1];
    for (var i=2; i<8; i++) {
    	if (i%2==0) {
        	list[i] = list[i-1] + n;
            
        }
        else {
        	list[i] = list[i-1] + 1;
        }
    }
    return list;
		
}
console.log(skippy_numbers(2));
