//Speed Limit=70 or eni andar ok message
//5kms over speedLimit 1 point
//More than 12 points ->suspended 
// Math.floor(1.3)
checkSpeed(130);

function checkSpeed(speed){
const speedLimit=70;
const kmPerPoint=5;
    if(speed<speedLimit+kmPerPoint)
        console.log('Okay');
    else{
        const points=Math.floor((speed-speedLimit)/kmPerPoint);
        if(points>=12)
            console.log('License Suspended');
        else
            console.log('Points',points);
    }
}