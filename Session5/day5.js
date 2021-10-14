// 1.1. Learn how to create a random number from 0 to 1
let randomNumber = Math.random().toFixed(2)
console.log(randomNumber);

// 1.2. Learn how to randomly pick an item from an array
let array = [0,1,2,3,4,6,5,7,8,9];
let randomArray = array[Math.floor(Math.random() * array.length) ];
console.log(randomArray);

// 1.3. Create a data structure to represent a list of quizzes, each quiz contains a question, 4 choices and rightChoice. Create it then ask your mentor to review your data before moving to the next exercise
let quizizz = [
    {
        question: "Where's the Notre Dame ?",
        answer: "A. London \n B. Paris \n C. Rome \n D. Madrid",
        correctAnswer: "B"
    },
    {
        question: "Which city is near the Alantic Ocean ?",
        answer: "A. Los Angeles \n B. San Francisco \n C. Tokyo \n D. New York",
        correctAnswer: "D"
    },
    {
        question: "Where is the capital of Turkey?",
        answer: "A. Edirne \n B. Istanbul \n C. Ankara \n D. Bursa",
        correctAnswer: "C"
    }
]

// 1.4. Write a script to randomly select a quiz from the list above, show them to users
let randomQuiz = Math.floor(Math.random() * quizizz.length);

// 1.5. Let users answer then let them know whether they are correct
while(true){
    let userAnswer = prompt(`${quizizz[randomQuiz].question} \n ${quizizz[randomQuiz].answer}`);
    if(userAnswer.toUpperCase() == quizizz[randomQuiz].correctAnswer){
        alert("You are correct !");
        break;
    }else{
        alert("You are wrong !");
    }
}

// 1.6 & 1.7. Let it run continuously, make sure each question only appears once, if the questions has run out, let users know & Calculate the total points of users
let count = 0;
while(true){    
    let randomNumber = Math.floor(Math.random() * quizizz.length)    
    let userAnswer = prompt(`${quizizz[randomNumber].question} \n ${quizizz[randomNumber].answer}`);
    if(userAnswer.toUpperCase() == quizizz[randomNumber].correctAnswer){
        count += 1;
    }
    quizizz.splice(randomNumber,1);
    
    if(quizizz.length <= 0){
        alert('We are out of question :(');
        alert(`You answered correctly ${count} of 3 questions`);
        break;
    }
}

// 2.1. Here are the following list of words. Write a program to count the occurrences of the words
let list = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let count = {};
for(let word of list){    
    if(count[word]){
        count[word]++;
    }else{
        count[word] = 1; 
    }
}
console.log(count);

// 2.2. Create and array to store a list of laptops in inventory, the data is as follow
let inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
]

