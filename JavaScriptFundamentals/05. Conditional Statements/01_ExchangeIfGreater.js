function exchangeIfgreater(args){ 
    var a = +args[0],
        b = +args[1],
        temp;

        if(a > b){
            temp = a;
            a = b;
            b = temp;
        }
        console.log(a + ' ' + b);
}

exchangeIfgreater(['5.5', '4.5']);