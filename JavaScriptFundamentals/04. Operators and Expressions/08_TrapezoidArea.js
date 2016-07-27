function trapezoidArea(args) {
    var x = +args[0],
        y = +args[1],
        h = +args[2],
        area;

        area = h * ((x + y) / 2);
        
     
        console.log(area.toFixed(7));
}

trapezoidArea(['0.222', '0.333', '0.555']);