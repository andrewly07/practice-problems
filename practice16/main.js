function spitSequence(N){
    var array=[];
    for(var i=N; i<(N+11);i++){
      if(!(i%3)){
        array.push(i);
      }
      else
      {
        array.push(0);    
      }
    }
    return array;
  }