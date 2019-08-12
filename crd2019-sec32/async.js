const myPromise = new Promise((resolve, reject) =>{
    if(true){
        setTimeout(() => {
            resolve('I have completed');
        }, 1000);
    }

});

console.log('prior to promise in code');
myPromise.then(value => console.log(value));
console.log('after to promise in code');