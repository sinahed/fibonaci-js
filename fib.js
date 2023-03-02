function fibonacciGenerator(n){
    var output = [];
    for(var i = 0; i < n; i++){
        if(i < 2){
            output.push(i);
        } else {
            output.push(output[i-2] + output[i-1]);
        }
    }
    return output;
}
