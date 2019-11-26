require('babel-core/register');

export let increment = a => a+1; // arrow function with one argument and no return statement

export function square(a) 
{
    return a*a;
}
//multiple export can be done from a file using export keyword
//no need of module.exports


export let factorial = a => {
    let fact =1;
    for(let i=1; i<=a; i++)
    {
        fact = fact * i;
    }
    return fact;
}

export let sum = (...args) =>
{
    // https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464 
    //If i already have an array, but i want to use the values in that array to create something completely new, use the reduce.
    return args.reduce( (previous,current) =>
    {
        console.log(' Previous :'+previous+' Current :'+current);
        return previous + current;
    })
}

export let multiply = (multiplier , ...args) =>
{
    //If i already have an array and i want to do the exact same operation on each of the elements in the array and return the same amount of items in the array, use the map.
    return args.map( (element) =>
    {
        return multiplier * element;
    })
}

export let any = (...args) => {
    for(let i=0 ; i<(args.length-1); i=i+2) {
        console.log('key :'+args[i]+" value :"+args[i+1]);
    }
}