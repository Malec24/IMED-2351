
const names = ["Beao", "Grey", "Todd", "Bungus", "Mishka"]

for (name of names) {
    console.log(name);
    if (name === "Todd"){
      console.log("Message for Todd: Get off the table");
      break;
    }

}


let loading = 0;
while(loading < 100){
  console.log("Website is still loading!");
loading++;

}


const userList = document.querySelectorAll(".cat-list li");

for(user of userList){
  user.addEventListener('click', function(){
    console.log(this); 
  });
}

const text = document.querySelector(".title");

const changeColor = document.querySelector(".changeColor");



changeColor.addEventListener('click', function() {
text.classList.add('change');

});



/*
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}



let day = "Good morning, ";
let night = "Good evening, ";
let question = "How are you";

let greetingDay = day + question;
let greetingNight = night + question;

console.log(greetingDay);
console.log(greetingNight);




Number(new Date("2017-09-30"))



switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}




function displayMessage (){
 var message = document.getElementById("message");
  alert(message.value);


}

function addNumbers(firstNumber, secondNumber){
 var total =firstNumber + secondNumber;
 return total;

}

function myFunction() {
    alert("Hello World!");
  } myFunction();


var firstNumber = 100 ; // 

var secondNumber = 200 ; 

console.log(firstNumber + secondNumber);

const name = "Marguerite"; //


const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


console.log("anything honestly");

*/
