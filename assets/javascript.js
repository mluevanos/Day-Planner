//set items for local storage (test on one cell before applying it to all): 
    //add id's to each row
    //add names to each row
    //add type=text to each row
    //add event listener to save button which will save the data (see fridge activity for help)
    //



    
// if (window.localStorage) {
//     var nineTxt = document.getElementById("nine");
// console.log(nineTxt);
    // nineTxt.value = localStorage.getItem("nine");

    // document.getElementById("save-button9").addEventListener("click", function () {
    //     localStorage.setItem("nine", nineTxt.value);
    // }, false);
// }

// var dayInput = document.querySelector("#nine").innerHTML;
// var dayForm = document.querySelector("#form");
// var save = document.querySelector("#save-button9");
// console.log(dayInput);

// localStorage.setItem("dayInput", JSON.stringify(dayInput));

// var retrieveDay = localStorage.getItem("dayInput");
// console.log(JSON.parse(retrieveDay));


//setting variables for button and input and empty array
// const button = document.querySelector("button")
// const input = document.getElementById("item")
// let itemsArray = []
// var buttons = document.getElementsByTagName("button");


// // localStorage.setItem("items", JSON.stringify(itemsArray))

// const data = JSON.parse(localStorage.getItem("items"))
// input.value = data;

// document.getElementById("item").value = JSON.parse(localStorage.getItem("items"))

// //button on click function that will push the input value 



// for (i = 0; i < buttons.length; i++) {

//     buttons[i].addEventListener("click", function() {

//         itemsArray.push(input.value)  //would I need to specify the value is text? If so, how?
//         localStorage.setItem("items", JSON.stringify(itemsArray))
//         console.log(itemsArray);
//     })
// }
// console.log(buttons);

const button = document.querySelector("button")

var d = new Date();
document.getElementById("clock").innerHTML = d;

let itemsArray = []

// const data = JSON.parse(localStorage.getItem("items"))

var buttons = document.getElementsByTagName("button");
console.log(buttons);

for (i = 0; i < buttons.length; i++) {

        // className = buttons[i].className

        buttons[i].addEventListener("click", function() {

        var timeslot = this.className;
        const input = document.getElementById(timeslot).value

        // itemsArray.push(input)
        localStorage.setItem(timeslot, JSON.stringify(input))
        // console.log(itemsArray);
        console.log(input);
    })
}

document.getElementById("nine").value = JSON.parse(localStorage.getItem("nine"));
document.getElementById("ten").value = JSON.parse(localStorage.getItem("ten"));
document.getElementById("eleven").value = JSON.parse(localStorage.getItem("eleven"));
document.getElementById("twelve").value = JSON.parse(localStorage.getItem("twelve"));
document.getElementById("one").value = JSON.parse(localStorage.getItem("one"));
document.getElementById("two").value = JSON.parse(localStorage.getItem("two"));
document.getElementById("three").value = JSON.parse(localStorage.getItem("three"));
document.getElementById("four").value = JSON.parse(localStorage.getItem("four"));
document.getElementById("five").value = JSON.parse(localStorage.getItem("five"));



//Another loop to cycle through table rows, 

var rows = document.querySelectorAll(".time");
var rowsTime = rows.text;
console.log(rows);

//test for time before or after the time it is. 

//Compare the time with the hour I am going to get with moment.js. 

//import like jQuery find on moments website