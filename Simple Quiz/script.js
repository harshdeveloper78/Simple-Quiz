const quizDB = [
    {
        question: "Q1: What is the full form of LCD?",
        a:"Liquid Cooling Diode",
        b:"Liquid Crystal Display",
        c:"Liquid Clear Display",
        d:"Liquid Clear Diode",
        ans: "ans2"
    },
    {
        question: "Q2: What is the full form of js?",
        a:"javascript",
        b:"Javasimple",
        c:"javasuper",
        d:"JordenShoes",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of CPU?",
        a:"Control Processing Union",
        b:"Comman Processing Unit",
        c:"Control Processing Unit",
        d:"Central Processing Unit",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of HTML?",
        a:"Hypertext Markup Language",
        b:"Hello Text My Language",
        c:"Hypertype Markup Language",
        d:"Hypertext Making Language",
        ans: "ans1"
    },
    {
        question: "Q5: What is the full form of CSS?",
        a:"Cascading Style Sheep",
        b:"Cascading Style Sheet",
        c:"Cartoon Style Sheet",
        d:"Cascading Shape Sheet",
        ans: "ans2"
    },
    {
        question: "Q6: What is full form of USB?",
        a:"Universal Series Bus",
        b:"Universal Series Box",
        c:"Used Serial Box",
        d:"Universal Serial Bus",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText =  questionList.a;
    option2.innerText =  questionList.b;
    option3.innerText =  questionList.c;
    option4.innerText =  questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
           answer = curAnsElem.id;
    }
});

return answer;
 
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{ 

       showscore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" oneclick="loction.reload()"> Play Again</button>
       `;
       
       showscore.classList.remove('scorearea');
    }
});