function pointInCircle(args) {
    var x = +args[0],
        y = parseFloat(args[1]),
        radius = 2,
        distance,
        distanceFromCenter,
        isInCircle;

        //The formula for circle is (px - cx) * (px - cx) + (py - cy) * (py - cy) <= r * r
        //point P circle center C, than the point is in the cirle
        distance = (x - 0)*(x - 0) + (y - 0)*(y - 0);
        distanceFromCenter = Math.sqrt(distance);

        isInCircle = distance <= (radius * radius);

        if(isInCircle){
            console.log('yes ' + distanceFromCenter.toFixed(2));
        }
        else{
            console.log('no ' + distanceFromCenter.toFixed(2));
        }
}

pointInCircle([1.5, -1]);