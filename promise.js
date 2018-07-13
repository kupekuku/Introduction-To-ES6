/*Promise*/
function addExtra(price) {
    return new Promise(function (resolve, reject) {
        if(price > 2) reject("Price cannot exceed 3");

        resolve(price + 1);
    })
}
addExtra(1)
    .then(addExtra)
    .then(addExtra)
    .then(function (newPrice) {
        console.log(newPrice);
    }).catch(function (error) {
    console.log(error);
});

 let pr = function ad(p) {
    return new Promise(function (resolve, reject) {
        resolve(p + 1);
    })
}

pr(2).then(function (r) {
    console.log('P', r);
}).catch(function (err) {
    console.log(err);
})

/*Multiple Promises*/
var price = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(99.99);
    }, 300)
});
var slowPrice = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(199.99);
    }, 800);
});
function greet() {
    return "Hello";
}
var promises = [price, slowPrice, 200, greet];
Promise.all(promises).then(function (resolvedPromises) {
    // console.log(resolvedPromises);
});

Promise.race([price, slowPrice]).then(function (resolvedPromises) {
    console.log('Race', resolvedPromises);
}).catch(err => console.log);
