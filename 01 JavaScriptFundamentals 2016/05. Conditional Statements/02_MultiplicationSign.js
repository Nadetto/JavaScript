function multiplicationSign(args){ 
    var number,
        countNegativeSigh = 0;
        
        for(var i = 0; i < 3; i +=1) {
            number = +args[i];
            if(number ===0){
                return console.log(0);
            }

            if(number < 0){
                countNegativeSigh ++;
            }
        }

        if(countNegativeSigh % 2 === 0){
           console.log('+');
        }
        else{
            console.log('-');
        }
}

multiplicationSign(['-2', '4', '2']);