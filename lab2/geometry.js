function checkInput(input){
    //check to see if it's a number.
    if(typeof(input) != "number") throw `Error: ${input} is not a number`
    //check to see if it's in proper bounds
    if(input <= 0) throw `Error: ${input} is not within proper bounds`
}
function volumeOfRectangularPrism(length, width, height){
    checkInput(length);
    checkInput(width);
    checkInput(height);
    
    return length * width * height;
}
function surfaceAreaOfRectagularPrism(length, width, height){
    checkInput(length);
    checkInput(width);
    checkInput(height);

    return 2*(width*length + height*length + height*width);
}
function volumeOfSphere(radius){
    checkInput(radius);
    return (4/3)*Math.PI*Math.pow(radius, 3);
}
function surfaceAreaofSphere(radius){
    checkInput(radius);
    return 4*Math.PI*Math.pow(radius, 2);
}

module.exports = {volumeOfRectangularPrism, surfaceAreaOfRectagularPrism, volumeOfSphere, surfaceAreaofSphere};