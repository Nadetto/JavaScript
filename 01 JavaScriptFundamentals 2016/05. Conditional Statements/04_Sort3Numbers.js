function Sort3Numbers(args){ 
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        tempNum;

        if(a < b){
            tempNum = a;
            a = b;
            b = tempNum;
        }

        if(b < c){
            tempNum = b;
            b = c;
            c = tempNum;
        }

        if(a < b){
            tempNum = a;
            a = b;
            b = tempNum;
        }

        console.log(a + ' ' + b + ' ' + c);
}

Sort3Numbers(['0', '-2.5', '5']);