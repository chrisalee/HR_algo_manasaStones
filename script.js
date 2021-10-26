/*
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */

// For anybody stuck on this one, they have some tricky inputs in some of the test cases. Remember that it has to print the list from least to greatest. Think about the problem like this: You know that you have some number of 'a's less than n and some number of 'b's less than n. The minimum number on the last stone would then be (n-1) * a (or b if b is less than a) and the maximum number is (n-1) * b. These can be rewritten as: min = ((n-1)* a) + (0 * b) and vice versa. Now all you have to do is solve like so, next iteration = ((n-1-1)*a) + (1 *b) and so on. Hope this helps.

const stones = (n, a, b) => {
    let newArr = [];
    
    for(let i = 0; i < n; i++) {
      newArr.push(a * ((n - 1) - i) + b * i);
    }
    
    let unique = newArr.filter((item, index, a) => a.indexOf(item) === index).sort((a, b) => a - b);
    
    console.log(unique);
    return unique;
}

/////////////////////////////////////////////////////////
const stones = (n,a,b) => [...new Set(new Array(n).fill(1).map((x,i) => a*i + b*(n-i-1)))].sort((a,b) => a-b)
