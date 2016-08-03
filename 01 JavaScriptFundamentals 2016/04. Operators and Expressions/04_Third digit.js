

function rectangleAreaPerimeter(args) {
    var num = +args[0],
        digit = (num / 100) % 10 | 0; // round with | 0
        // or digit = Math.round(digit);

    if(digit === 7){
        console.log('true');
    }
    else{
        console.log('false ' + digit);
    }
}

rectangleAreaPerimeter([877]);