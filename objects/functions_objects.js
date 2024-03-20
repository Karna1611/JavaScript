function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}

Circle.call({},1); //first argument specifies the target of this
Circle.apply({},1);
const another=new Circle(1);