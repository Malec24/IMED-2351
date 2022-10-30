
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


const text = document.querySelector(".title");

const changeColor = document.querySelector(".changeColor");

text.style.color = "red";