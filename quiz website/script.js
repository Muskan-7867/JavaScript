const questions = [
    {
        question: "Which is the  largest Animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },

    {
        question: "Which is the  smallest country in the world?",
        answers:[
            {text:"vatican city",correct:true},
            {text:"bhutan",correct:false},
            {text:"nepal",correct:false},
            {text:"shri lanka",correct:false},
        ]
    },

    {
        question: "Which is the  largest desert  in the world?",
        answers:[
            {text:"kalahari",correct:false},
            {text:"lahore",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ]
    },

    {
        question: "Which is the  largest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"GAfrica",correct:false},
        ]
    },

];
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score =0;
function startQuiz(){
    nextButton.innerHTML = "Next";
    currentQuestionIndex = 0; // Reset the current question index
    score = 0;
    showQuestions();
    nextButton.style.display = 'none';
    

}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
    
        button.addEventListener("click",selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
      }
    }


function selectAnswer(e){
    const selectBtn =e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block'
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block';
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
});
startQuiz();
