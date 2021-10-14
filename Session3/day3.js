// STUDY
// 1. Variable swap
// Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other
// Google 'JS swap variables’ to learn about at least 2 ways to perform this task, write at least 2 examples to demonstrate you have acquired them
    // +) Temporary variable
    let a = 5;
    let b = 6;
    let temp;
    temp = a;
    a = b;
    b = temp;
    console.log(a); // => a = 6
    console.log(b); // => b = 5
    // +) Destructuring assignment
    let a = 5;
    let b = 6;
    [a, b] = [b, a];
    console.log(a); // => a = 6
    console.log(b); // => b = 5
    // +) Addition and difference
    let a = 5;
    let b = 6;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a); // => a = 6
    console.log(b); // => b = 5

// 2. Split String into Array
// Using type conversion from String to Array
    const s = "Hello beauty there";
    const a = s.split(" ");
    console.log(a); // Result: [“Hello”, “beauty”, “there”]

// 3. In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) an array without using loops, try it:
    const a = [4, 5, 7, -8];
    console.log(...a);

// REVIEW
// 4. Write a script to simulate a clothes shop, asking and performing certain tasks from users
    let items = ['Jeans', 'T-shirt', 'Socks'];
    while(true){
        let option = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
        if((option == 'R') || (option == 'r')){
            console.log('The current items are:')
            for (var i = 0; i < items.length; i++){
                console.log(`${i + 1}. ${items[i]}`);
            }
        }else if((option == 'C') || (option == 'c')){
            createItem = prompt('Enter the name of the new item');
            items.push(createItem);
            alert('Done');
        }else if((option == 'U') || (option == 'u')){
            updateIndex = prompt('Enter the position you want to update');
            updateItem = prompt('Enter the new name');
            items[updateIndex] = updateItem;
            alert('Done');
        }else if((option == 'D') || (option == 'd')){
            deleteIndex = prompt('Enter the position you want to delete');
            items.splice(deleteIndex,1);
            alert('Done');
        }else{
            alert('This command is not supported');
            break;
        }
    }

// SERIOUS EXERCISE
// 5. Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
    let number = prompt('Enter a sequence of Number, separated by commas(,)');
    let sequence = number.split(',');
    let sum = 0;
    for(var i = 0; i < sequence.length; i++){
        sum += Number(sequence[i]);
    }
    alert(`The sum of them is ${sum}`);

// 6. Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
    let number = prompt('Enter a sequence of Number, separated by commas(,)');
    let sequence = number.split(',');
    let min = Number(sequence[0]);
    for(var i = 0; i < sequence.length; i++){
        if(Number(sequence[i]) < min){
            min = Number(sequence[i]);
        }
    }
    alert(`The smallest number is ${min}`)

// 7. Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so
    const arr = [3, 4, 6, -9, 10, -88, 2];
    let number = Number(prompt('Enter a number'));
    let count = 0;
    for(var i = 0; i < arr.length; i++){
        if(number == arr[i]){
            alert(`${number} is FOUND in my array at index ${i}`);
            count++;
            break;
        }   
    }
    if(count == 0){
        alert(`${number} is NOT found in my array`); 
    }  

// 8. You are a shepherd who owns a flock of sheep. Each of your sheep of your flock has varied sizes:
    // 8.1. Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
    let sheepSizes = [5, 7, 300, 90, 24, 50, 75];
    console.log('Hello, my name is Duc Tung and here is my sheep sizes: ');
    console.log(...sheepSizes);

    // 8.2. At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
    let max = sheepSizes[0];
    for(var i = 0; i < sheepSizes.length; i++){
        if(max < Number(sheepSizes[i])){
            max = Number(sheepSizes[i]);
        }
    }
    console.log(`Now my biggest sheep has size ${max}, let's shave it`)

    // 8.3. When your biggest sheer, its size will return to the default size, which is 8.
    indexMax = sheepSizes.indexOf(max)
    sheepSizes[indexMax] = 8
    console.log('After shearing, here is my flock');
    console.log(...sheepSizes)

    // 8.4. In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
    for(var i = 0; i < sheepSizes.length; i++){
        sheepSizes[i] = sheepSizes[i] + 50;
    }
    console.log('MONTH 1');
    console.log('One month has passed, my sheeps have grown, here are their sizes');
    console.log(...sheepSizes);

    // 8.5. Let’s do this for 4 months (or as long as you want)
    for (var i = 1 ; i <= 4; i++){       
        for(var j = 0; j < sheepSizes.length; j++){
            sheepSizes[j] = sheepSizes[j] + 50;
        }       
        console.log(`MONTH ${i}`);
        console.log('One month has passed, my sheeps have grown, here are their sizes');
        console.log(...sheepSizes);
        
        let maxSize = sheepSizes[0];
        for(let i = 0; i < sheepSizes.length; i++){
            if(maxSize < Number(sheepSizes[i])){
                maxSize = Number(sheepSizes[i]);
            }
        }       
        if(i == 4){
            break;
        }
        console.log(`Now my biggest sheep has size ${maxSize}, let's shave it`)
        indexMaxSize = sheepSizes.indexOf(maxSize)
        sheepSizes[indexMaxSize] = 8
        console.log('After shearing, here is my flock');
        console.log(...sheepSizes);
    }

    // 8.6. After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have.
    let sum = 0;    
    for (let i = 0; i < sheepSizes.length; i++){
        sum +=  sheepSizes[i];
    }
    console.log(`My flock has size in total: ${sum}`);
    console.log(`I would get ${sum} * 2$ = ${sum * 2}$`);


