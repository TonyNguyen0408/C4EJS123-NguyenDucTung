// 1. Read about variables and data types in these documents 
//     And answer the following questions:
//     1. In JavaScript, in what cases, you will get the SyntaxError telling you that some of your variables have invalid names? Can you give 3 different examples of invalid variable names?
//         Có 3 trường hợp tên biến bị lỗi:
//     - Tên biến bắt đầu bằng số : 4ever
//     - Tên biến có các ký tự đặc biệt : Java-Script
//     - Tên biến trùng với từ khóa của JavaScript : new    
//     2. In JavaScript, how to check a variable data types?
//     Dùng hàm typeof() để kiểm tra loại dữ liệu của biến

// 2. Watch this video to review about HTML, CSS, JavaScript functions in the front-end web, and then connect these two columns
//     1 - b, 2 - a, 3 - e, 4 - c
    
// 3. Declare the following variables
    // a. A String named message with value 'Coding is great’, then use console.log to print it out
    let message = 'Coding is great';
    console.log(message);
    // b. A Number named studentCount with value 0, then use console.log to print it out
    let studentCount = 0;
    console.log(studentCount);

// 4. Update the declared variables in Exercise 3
    // a. Change message into 'Coding might not be easy, but still great’, then use console.log to print it out
    let message = 'Coding is great';
    message = 'Coding might not be easy, but still great';
    console.log(message);
    // b. Change studentCount into total of the students in our class right now (16 for example), then use console.log to print it out
    let studentCount = 0;
    studentCount = 16;
    console.log(studentCount);
    // c. After completing exercise a, change the message into lowercase, then use console.log to print it out
    let message = 'Coding is great';
    message = 'Coding might not be easy, but still great';
    console.log(message.toLowerCase());
    // d. After completing exercise b, increase studentCount by 1, then use console.log to print it out
    let studentCount = 0;
    studentCount = 16;
    studentCount ++;
    console.log(studentCount);

// 5. Write a script to show user a nice message
    alert('a nice message');

// 6. Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)
    let userName = prompt('What is your name ?');
    alert(`Hello ${userName} nice to meet you :)`);

// 7. Write a script that ask 2 things from users, their first name and last name, then greet them with their full name
    let userFirstName = prompt('First Name');
    let userLastName = prompt('Last Name');
    alert(`Greeting ${userFirstName} ${userLastName}`);

// 8. Write a script that calculates the area of a square
    alert('Calculates the area of a square');
    let side = prompt('Enter the length of the side');
    area = side * side;
    alert(`The area of the square is : ${area}`);

// 9. Write a script that calculates the area of a circle
    alert('Calculates the area of a circle');
    let radius = prompt('Enter the length of the radius');
    area = radius * radius * 3.14;
    alert(`The area of the circle is : ${area}`);

// 10. Write a script that converts Celsius (C) into Fahrenheit (F)
    alert('Converts Celsius (C) into Fahrenheit (F)');
    let celsius = prompt('Enter the temperature in Celsius');
    fahrenheit = (celsius * 1.8) + 32;
    alert(`The temperature in Fahrenheit is : ${fahrenheit}`);