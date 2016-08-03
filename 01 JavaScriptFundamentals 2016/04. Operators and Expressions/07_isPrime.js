function pointInCircle(args) {
    var number = +args[0],
        isPrime = true,
        maxDevider = Math.sqrt(number),
        devider = 2;

        if(number <= 1){
            isPrime = false;
        }
        else{
            for(devider; devider <= maxDevider && isPrime; devider +=1) {
                if(number % devider === 0){
                    isPrime = false;
                }
            }
        }
     
        return console.log(isPrime);
}

pointInCircle([1]);