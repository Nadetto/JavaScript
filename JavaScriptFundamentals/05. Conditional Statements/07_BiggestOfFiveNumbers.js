function biggestNumber(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4],
        biggestNum = 0;

        //if a is the biggest
        if(a > b && a > c && a > d && a > e){
            biggestNum = a;
        }        
        else if(b > c && b > d && b > e){
            biggestNum = b;
        }
        else if( c > d && c > e){
            biggestNum = c;
        }
        else if(d > e){
            biggestNum = d;
        }
        else{
            biggestNum = e;
        }

        console.log(biggestNum);
}

biggestNumber(['11', '12', '7','9','10']);