// STUDY
// 1. insertAdjacentHTML first parameter is the position where you put the new HTML into the container
// Read this documentation, then read the following code
// JS File:
    let container = document.getElementById('list');
    for(let i = 0; i < 3; i++){
    container.insertAdjacentHTML('afterend', `<li>${i}</li>`);
    }
// Answer which is which:
// 1 - d, 2 - a, 3 - c, 4 - b

// 2. Instead of using setTimeOut to create a timer, we can use setInterval for shorter code
    function aoe(){
        alert('Age of Empires');
    };
    setTimeout(aoe, 4000);
    setInterval(aoe, 4000);

// 3. Read about function scope in this link then answer the following question
    // 3.1. Can a variable declared by let, in a function still exists after the function finishes running?
    function letInFunction(){
        let x = 4;
        console.log(x);
    };
    console.log(x); //x is not defined => a variable declared by let, in a function can't exists after the function finishes running
    // 3.2. Can var variable declared by var, in a function still exists after the function finishes running?
    function letInFunction(){
        var x = 4;
        console.log(x);
    };
    console.log(x); //x is not defined => a variable declared by var, in a function can't exists after the function finishes running

// 4. Use getElementsByTagName function to get ALL of the <li> tag. Print/log out the first element (which is <li>Articles</li>) and then use for loop to print ALL of the DOM you get from the function.
    let doc = document.getElementsByTagName('li');
    console.log(doc);
    for (item of doc) {
        console.log(item);
    }

// 5. Use getElementsByTagName function to get ALL of the <div> tag. Print/log out the second element (which is <div class=”singer”>Nate Ruess</div>) and then use for loop to print ALL of the DOM you get from the function.
    let doc = document.getElementsByClassName('singer');
    console.log(doc.length);
    console.log(doc[1]);
    for (item of doc) {
        console.log(item);
    }

// 6. Learn how to remove (Delete) an HTMLElement using HTMLElement.remove() function, refer to this
    let doc = document.getElementById('delete');
    doc.addEventListener('click', () => {
        doc.remove();
    })

// 7. When using addEventListener, in the callback you can add a parameter / argument to get more information about the event, for example:
// btn.addEventListener(‘click’, (e) => {
// 	// Callback body
// });
// e is called Event Object, which contains additional information about the events.
    // 7.1. Catch ‘click’ event from 2 different buttons, id=”button1” and id=”button2”, in the callback body of the 2 events, print, or log out e.target. What is it?
    let b1 = document.getElementById('button 1');
    b1.addEventListener('click', (e) => {
        console.log(e.target);
    });
    let b2 = document.getElementById('button 2');
    b2.addEventListener('click', (e) => {
        console.log(e.target);
    });
    // 7.2. Catch a ‘keydown’ event from an input, in the callback body of the event, print / log out the e.key. What is it?
    let doc = document.addEventListener('keydown', (e) => {
        console.log(e.key);
    });

// REVIEW
// 8. Write a function, using alert to show your name and one thing you wish to do this year
    function nguyenDucTung(){
        alert('Nguyen Duc Tung will graduate this year');
    }
    nguyenDucTung();

// 9. Write a function, using alert to show user’s name and one wish of the user this year, 
    function userNameWish(name, wish){
        alert(`${name} ${wish}`);
    }
    userNameWish('Nguyen Duc Tung', 'Graduation')

// 10. Write a function, using alert to show user’s name and one wish of the user in this year, name and wish are function parameters. Handle the case of missing wish in function parameters
    function userNameWish(name, wish){
        alert(`${name} ${wish}`);
    }
    let userName = prompt('Enter your name:');
    let userWish = prompt('Enter your wishes:');
    if (userWish == ""){
        alert(`${userName} Make your wishes !!!`);
    } else{
        userNameWish(userName, userWish);
    }
