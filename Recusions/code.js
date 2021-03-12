// Create recursive function to return the result
// of base to the exponent power as Math.pow() does
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    if( exponent === 0 ) return 1
    return base * power(base, exponent - 1)
}



// Write a fxn which takes in an array and returns
// the product of them all
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    if( arr.length === 0 ) return 1
    return arr[0] * productOfArray(arr.slice(1))
}



// Write a fxn which accepts a num and adds up all
// numbers from 0 to the input num
// EXAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21  --> 6 + 5 + 4 + 3 + 2 + 1 = 21
// recursiveRange(10) // 55 

function recursiveRange(num){
   if( num === 1 ) return 1
   return num + recursiveRange(num - 1)
}



// Classic Fibonacci question
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    if( n <= 2 ) return 1
    return fib(n - 1) + fib(n - 2)
}