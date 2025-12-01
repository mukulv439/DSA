
var repeatedStringMatch = function(a, b) {
    let rep = a;
    let  count = 1;
     while(rep.length < b.length)
     {
        rep = rep+a;
        count++
     }
     if(rep.includes(b))  return count ;
     if((rep +a).includes(b)) return count+ 1;
    

    return  -1 ;
};
