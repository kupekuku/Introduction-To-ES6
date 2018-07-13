
function lastElem(arr, index = 0) {
    return (arr[index +  1] === undefined) ? arr[index] : lastElem(arr, index + 1);
};
function lastElemIndex(arr, index = 0) {
    return (arr[index +  1] === undefined) ? index : lastElem(arr, index + 1);
};
function lastElemNth(arr, numEle) {
    let lastIndex = lastElemIndex(arr);
    let startIndex = lastIndex - numEle;
    if(startIndex < 0) return 'Invalid...';
    let res = [];
    for(let i = startIndex; i < lastIndex; i++ ){
        res.push(arr[i]);
    }
    return res;
};
console.log('Last Element: ', lastElem([1,2,3, 8,8,8,8]));
console.log('Last Nth Element: ', lastElemNth([1,2,3, 4, 5, 6, 7, 8], 20));
