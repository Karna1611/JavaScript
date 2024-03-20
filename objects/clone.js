const circle={
    radius:1,
    draw(){
        console.log('draw');
    }
};

// const another={};

// for (let key in circle)
//     another[key]=circle[key]; //another['radius']=circle['radius'];

// const another=Object.assign({},circle); //first argument is the target object, it's not neccessary for it to be empty object, it can be an existing object.

const another={...circle}; //spread operator, all properties and methods lese and mukse

console.log(another); //this is old approach 



