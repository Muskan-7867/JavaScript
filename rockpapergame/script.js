let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const genCompChoice =()=>{
    const options =["rock","paper","scissor"]
    const randamIndex =  Math.floor(Math.random() *3);
    return options[randamIndex];
}

const showWinner =(userWin)=>{
        if(userWin){
            userscore++;
            userscorePara.innerText = userscore;
         
            msg.innerText="You Win!!!!";
            msg.style.backgroundColor ="green";
        }else{

            compscore++;
            compscorepara.innerText =compscore;
            
            msg.innerText="You lose!"
            msg.style.backgroundColor ="red";
        }
}
const drawGame=() =>{
   
    msg.innerText="Game was  draw!!.Play Again";
    msg.style.backgroundColor ="orange";
}
//Generate computer choice
const playGame =(userChoice) =>{
    console.log("user choice  =  ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice)

    if(userChoice===compChoice){
     drawGame();
    }else{
        let userWin =true;
        if(userChoice=== "rock"){
            userWin = compChoice ==="paper" ? false: true;
        } else if(userChoice=== "paper"){
            userWin = compChoice ==="scissor" ? false: true;
        } else {
            userWin = compChoice ==="rock" ? false: true;
        }showWinner(userWin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
       const userChoice = choice.getAttribute("id");
       
       playGame(userChoice);
    })

})
