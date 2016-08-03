function multiplicationSign(args){ 
    var a = +args[0],
        b = +args[1],
        c = +args[2];
        biggestNum = a;
        // other way
        //biggestNum = Math.max(Math.max(numA, numB), numC);
        
        if(b > biggestNum){
            biggestNum = b;
        }

        if(c > biggestNum){
            biggestNum = c;
        }

        console.log(biggestNum);
}

multiplicationSign(['-2', '4', '2']);