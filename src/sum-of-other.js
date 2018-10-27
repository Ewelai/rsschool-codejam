function sumOfOther(arr) {
    let result = [], fil, sum, len = arr.length - 1;

    for(let i = 0; i <= len; i++) {
        fil = arr.filter((it) => {return it !== arr[i]});
        sum = fil.reduce((el, it) => {return el + it});
        result.push(sum);
    }
    return result;
}