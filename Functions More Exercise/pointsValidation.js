function validatePoints(points){
    let fistValid = checkDistance(points[0],points[1],0,0);
    let secondValid = checkDistance(points[2],points[3],0,0);
    let thirdValid = checkDistance(points[0],points[1],points[2],points[3]);

    if(fistValid){
        console.log(`{${points[0]}, ${points[1]}} to {0, 0} is valid`);
    } else{
        console.log(`{${points[0]}, ${points[1]}} to {0, 0} is invalid`);
    }

    if(secondValid){
        console.log(`{${points[2]}, ${points[3]}} to {0, 0} is valid`);
    } else{
        console.log(`{${points[2]}, ${points[3]}} to {0, 0} is invalid`);
    }

    if(thirdValid){
        console.log(`{${points[0]}, ${points[1]}} to {${points[2]}, ${points[3]}} is valid`);
    } else{
        console.log(`{${points[0]}, ${points[1]}} to {${points[2]}, ${points[3]}} is invalid`);
    }
    
    function checkDistance(x1,y1,x2,y2){
        let stepOne = Math.pow((x2-x1),2)+Math.pow((y2-y1),2);
        let distance = Math.sqrt(stepOne);
        if(Number.isInteger(distance)){
            return true;
        } else{
            return false;
        }
    }
}
validatePoints([2, 1, 1, 1]);