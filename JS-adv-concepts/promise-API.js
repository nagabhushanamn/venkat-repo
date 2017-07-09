

let swiggy = {
    getFood: function () {
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('resolving/rejecting food promise..');
                resolve("Biryani..");
                //reject('delivery boys r busy..')
            }, 5000);
        });
        return promise;
    }
};

let bar = {
    getDrink: function () {
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('resolving/rejecting drink promise..');
                resolve("Beer..");
                //reject('delivery boys r busy..')
            }, 1000);
        });
        return promise;
    }
};


let person = {
    doWork: function () {
        console.log('person working...')
        console.log('feels hungry...requesting food on swiggy');
        let promise1 = swiggy.getFood();//..
        let promise2 = bar.getDrink();//..
        console.log('got promise.. deferring my actions to future');
        
        Promise.race([promise1,promise2]).then(function (parcel) {
            console.log('yummy with ' + parcel);
        }, function (reason) {
            console.log('oops ' + reason);
        });
        console.log('person cont..with other work... end...')
    }
};

person.doWork();

