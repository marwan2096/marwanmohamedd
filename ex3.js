let a = (prompt ("enter the shape " ))




switch(a){


case "Circle":
    let r = (prompt ("enter the radius " ))
 result= (`${ 3.14* r*r}`);
 break;

case "Square":
    let z = (prompt ("enter the length " ))
    result= (`${  z*z }`);
    break;
    case "Rectangle":
        let v = (prompt ("enter the length " ))
        let g = (prompt ("enter the width " ))
        result= (`${  v*g }`);
    break;
    case "Triangle":
        let b = (prompt ("enter the base" ))
        let h = (prompt ("enter the height" ))
        result= (`${ 0.5* b*h }`);
    break;
    case "Parallelogram ":
        let b1 = (prompt ("enter the base" ))
        let h1= (prompt ("enter the height" ))
        result= (`${ b1*h1 }`);
    break;
    case "Trapezium":
        let a = (prompt ("enter the base" ))
        let b3= (prompt ("enter the height" ))
        let h3= (prompt ("enter the height" ))

        result=(`0.5*${+b3 + +h3}`)
    break;
    case "Ellipse":
        let a1 = (prompt ("enter the base" ))
        let b4= (prompt ("enter the height" ))
       

        result= (`${ 3.14* a1*b4}`);
    break;


   
    




}
document.write( result)
