
// /**
//  * @param {number} low
//  * @param {number} high
//  * @return {number}
//  */
var countOdds = function(low, high) {
    let count = 0
    for( let i = low; i <= high; i++ ){
        if( i % 2 !== 0 ){
            count += 1
        }
    }
    return count
  };

  //  O(n) LINEAR TIME
  //  O(1) CONSTANT SPACE