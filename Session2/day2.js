STUDY
1. let vs var vs const
    Learn about let, var and const by
    Reading these tutorials:
    Then answer the following questions:
    1. What are var and const in JavaScript?
    - var : the keyword that tells JavaScript you're declaring a variable.
    - const: that the identifier can't be reassigned.
    2. What are the differences between let and var?        
    +) let:                               
    - is block scoped
    - can be updated but not re-declared                     
    - the let keyword is not initialized                                                                                              
    +) var:
    - declarations are globally scoped or function/locally scoped
    - can be re-declared and updated
    - are hoisted to the top of its scope and initialized with a value of undefined
    3. What are the differences between let and const?    
    - let can be re-assigned, but variables declared with const can’t be
    - let can be updated but not re-declared
    - const cannot be updated or re-declared
    4. What to use in what cases?
    - let: used when we allow to update the value of the variable but does not allow us to re-declared the variable.
    - var: used when a variable is declared outside a function.
    - const: used when we want the value of a variable declared to remain the same within its scope.

2. Boolean
    1. What is Boolean?
    - Boolean is a datatype that returns either of two values i.e. true or false
    - In JavaScript, Boolean is used as a function to get the value of a variable, object, conditions, expressions, etc. in terms of true or false.
    2. What results in Boolean?
    - The boolean type has only two values: true and false.

REVIEW
3. Write a program to print out
    a. 7 numbers, starting from 0 (no user input)
    for (let x = 0; x < 7; x++) {
        console.log(x);
    }
    b. n numbers, starting from 0, n entered by user
    let n = Number(prompt('Enter n'));
    for (let x = 0; x < n; x++) {
        console.log(x);
    }
    c. A sequence of numbers, starting from 3, ending before n, n entered by user
    let n = Number(prompt('Enter n'));
    for (let x = 3; x < n; x++) {
        console.log(x);
    }
    d. A sequence of numbers, starting from c, ending before n, c and n entered by user
    let c = Number(prompt('Enter c'));
    let n = Number(prompt('Enter n'));
    for (let x = c; x < n; x++) {
        console.log(x);
    }
    e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
    let c = Number(prompt('Enter c'));
    let n = Number(prompt('Enter n'));
    for (let x = c; x < n; x += 3) {
        console.log(Number(x));
    }  
    f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and s entered by user
    let c = Number(prompt('Enter c'));
    let n = Number(prompt('Enter n'));
    let s = Number(prompt("Enter s"));
    for (let x = c; x < n; x += s) {
        console.log(Number(x));
    }

4. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
    let n = Number(prompt("Enter n"));
    let factorial = 1;
    for (let x = 1; x <= n; x++) {
        factorial = factorial * x;
    }
    alert(`The factorial of ${n} is ${factorial}`);

5. Write a program asking users their age, and then decide if they are old enough to view a 14+ content
    let age = Number(prompt('How old are you?'));
    if (age >= 14) {
        alert(`You are old enough to view this content`);
    } else {
        alert(`You are not old enough to view this content`);
    }

SERIOUS EXCRCISES
6. Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
    let x = Number(prompt('Enter a number'));
    if (x < (9 / 2)) {
        alert(`Lower half of 9`);
    } else {
        alert(`Higher half of 9`);
    }

7. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
    let x = Number(prompt('x ='));
    let n = Number(prompt('n ='));
    if (x < (n / 2)) {
        alert(`${x} is in lower half of ${n}`);
    } else {
        alert(`${x} is in higher half of ${n}`);
    }

8. Write a script to check if a number is even (divisible by 2) or odd number
    let number = Number(prompt('x ='));
    if (number % 2 == 0) {
        alert(`${number} is an even number`);
    } else {
        alert(`${number} is an odd number`);
    }

9. Write a program to print out
    a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
    let n = 6;
    for (var x = 0; x < (n / 2); x++) {
        console.log('L');
    }
    for (let y = 0; y < (n - x); y++) {
        console.log('H');
    }
    b. n L’s and H’s in total, n entered by user
    let n = Number(prompt("Enter the total number of L's and H's"));
    for (var x = 0; x < (n / 2); x++) {
        console.log('L');
    }
    for (let y = 0; y < (n - x); y++) {
        console.log('H');
    }
    c. 8 1’s and 0’s in total, consecutively
    let total = 8;
    for (let x = 0; x < total; x++) {
        if (x % 2 == 0) {
            console.log(0);
        } else {
            console.log(1);
        }
    }
    d. n 1’s and 0’s in total, consecutively, n entered by user
    let n = Number(prompt("Enter the total number of 1's and 0's"));
    for (let x = 0; x < n; x++) {
        if (x % 2 == 0) {
            console.log(0);
        } else {
            console.log(1);
        }
    }

10. Write a script to calculate the BMI (Body Mass Index) of a person.
    let mass = Number(prompt("Your weight in kg?"));
    let height = Number(prompt("Your height in cm?"));
    height = height / 100;
    let BMI = mass / (height * height);
    alert(`Your BMI is ${BMI}`);
    if (BMI < 16) {
        alert(`You are severely underweight`);
    } else if (BMI < 18.5) {
        alert(`You are underweight`);
    } else if (BMI < 25) {
        alert(`You are normal`);
    } else if (BMI < 30) {
        alert(`You are overweight`);
    } else {
        alert(`You are obese`);
    }

