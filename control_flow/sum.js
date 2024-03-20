

function sum(limit){
    let sum=0;

    for(let i=0;i<=limit;i++)
        if(i%3===0 || i%5===0)
            sum+=i;

    return sum;
    
}

a=sum(10);
console.log(a);