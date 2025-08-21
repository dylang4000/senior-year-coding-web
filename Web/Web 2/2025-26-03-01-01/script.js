

function rps(){

const choices = ["🗿","📄","✂️"]


const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const playagain =document.getElementById("playagain");
scissorsButton.style.display ="";
  rockButton.style.display ="";
  paperButton.style.display ="";

scissorsButton.disabled = false;
rockButton.disabled = false;
paperButton.disabled = false;
playagain.style.display = "none";
document.getElementById("filler").style.display="";
document.getElementById("filler1").style.display="";


let comchoice;
let playerchoice = "";

rockButton.addEventListener("click", (e) => {
  console.log("rock");
  playerchoice = choices[0];
    scissorsButton.disabled = true
  rockButton.disabled = true
  paperButton.disabled = true
  document.getElementById("playerOutput").textContent = "🧑:  🗿";
  comchoice = "💻:  "+choices[Math.floor(Math.random() * 3)];
  document.getElementById("comOutput").textContent = comchoice;
     scissorsButton.style.display ="none";
  rockButton.style.display ="none";
  paperButton.style.display ="none";
  
  playagain.style.display = "";
  document.getElementById("filler").style.display="none";
document.getElementById("filler1").style.display="none";

  



});

paperButton.addEventListener("click", (e) => {
  console.log("paper");
  playerchoice = choices[1];
    scissorsButton.disabled = true
  rockButton.disabled = true
  paperButton.disabled = true
  document.getElementById("playerOutput").textContent = "🧑:  📜";
  comchoice = "💻:  "+choices[Math.floor(Math.random() * 3)];
  document.getElementById("comOutput").textContent = comchoice;
     scissorsButton.style.display ="none";
  rockButton.style.display ="none";
  paperButton.style.display ="none";
  
  playagain.style.display = "";
  document.getElementById("filler").style.display="none";
document.getElementById("filler1").style.display="none";

});

scissorsButton.addEventListener("click", (e) => {
  console.log("scissors");
  playerchoice = choices[2];
  scissorsButton.disabled = true
  rockButton.disabled = true
  paperButton.disabled = true
  document.getElementById("playerOutput").textContent = "🧑:  ✂️";
  comchoice = "💻:  "+choices[Math.floor(Math.random() * 3)];
  document.getElementById("comOutput").textContent = comchoice;
   scissorsButton.style.display ="none";
  rockButton.style.display ="none";
  paperButton.style.display ="none";
  
  playagain.style.display = "";
  document.getElementById("filler").style.display="none";
document.getElementById("filler1").style.display="none";

});


 
}




