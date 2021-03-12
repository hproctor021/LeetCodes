

function factorial(num){
    if( num === 1 ) return 1
    return num * factorial(num - 1)
}

// O(n) LINEAR TIME
// O(1) CONSTANT SPACE