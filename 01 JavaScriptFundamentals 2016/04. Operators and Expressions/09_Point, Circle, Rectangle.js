function pointInCircleAndRectangle(args) {
    var x = +args[0],
        y = +args[1],       
        isInCircle,
        isInRectangle,
        xCircle = 1,
        yCircle = 1,
        radius = 1.5;
        

        //K({1, 1}, 1.5) and out of the rectangle R(top=1, left=-1, width=6, height=2)
        isInCircle = (radius * radius) >= (x - xCircle) * (x - xCircle) + 
        (y - yCircle) * (y - yCircle);

        isInRectangle = (x >= -1 && x <= 5 && y <= 1 && y >= -1);
     
        if(isInCircle){
            console.log('inside circle' + ' ' + (isInRectangle ? 'inside rectangle' : 'outside rectangle'));
        }
        else{
            console.log('outside circle' + ' ' + (isInRectangle ? 'inside rectangle' : 'outside rectangle'));
        }
}

pointInCircleAndRectangle(['1', '2']);