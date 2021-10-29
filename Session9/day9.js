// STUDY
// 1. Learn more about Promises, refer to these documents:
//     1.1. JavaScript Info: Promise basics (Read till the end of Consumers: then, catch, finally section)
//     1.2. MDN Promise
//     Your tasks:
//         1. Create a Promise that resolve: return ‘Promise is da best’ after 5 seconds. Take this Promise to test / consume in 2 ways
//         2. Use await inside an async function
//         3. Use then() function
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Promise is da best"),5000);
        })
        async function promiseTest() {
            alert ('loading');
            let result = await promise;
            alert (result);
        }       
        promiseTest();
        promise.then(
            result => alert(result),
            error => alert(error)
        );

// 2. Using fetch() to load data from an API, we can use 2 async/await to get the connection from fetch() and and the data from json() function,
// these 2 awaits can be replaced by 2 then() calls. Figure out how to do it, here is a hint:
    const fetchPro = fetch('https://reqres.in/api/users');
    fetchPro.then(connection => {
        console.log('Connected');
        console.log(connection);
        const data = connection.json();
        console.log(data);
    })
    // After getting the connection you get can be accessed, get data by handling the Promise returned by json() function
    async function getData() {
        const connection = await fetch('https://reqres.in/api/users');
        const data = await connection.json();
        console.log(data);
    }
    getData();
    
// 3. Learn how to create a quick, free API using Google SpreadSheet and SheetsDB, register SheetsDB account and follow this tutorial.
// After successfully creating your API and testing it with a Rest Client such as Insomnia Rest Client, submit the API URL
    // GET https://sheetdb.io/api/v1/58f61be4dda40

// REVIEW
// 4. Write a function with no parameters / arguments, return a random number from 0 to 10, then take it to the test as follows:
    function randomNumber() {
        return Math.floor(Math.random() * 11);
    }
    let x = randomNumber();
    console.log(x) ;

    if (x < 0) {
        console.log('Failed: the number is smaller than 0');
    } else if (x > 10) {
        console.log('Failed: the number is bigger than 10');
    } else {
        console.log('Passed, bravo');
    }

// 5. Write a function with 2 parameters / arguments: a and b, return a random number from a to b, take it to the test as follows
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    let x = getRandomNumber(4, 16);
    console.log(x);
    if (x < 4) {
    console.log('Failed: the number is smaller than 4');
    } else if (x > 16) {
    console.log('Failed: the number is bigger than 16');
    } else {
    console.log('Passed, bravo');
    }

// 6. Write a function to calculate the distance between 2 points (x1, y1) and (x2, y2), the formula is 
    function points(x1, y1, x2, y2){
        return (Math.sqrt(Math.pow(x1 - x2, 2)+(Math.pow(y1 - y2, 2))))
    }
    let x = points(3, 10, 0, 6);
    if (x !== 5) {
    console.log('Failed: the calculation is wrong');
    } else {
    console.log('Passed, bravo');
    }