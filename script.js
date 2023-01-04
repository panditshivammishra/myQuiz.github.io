const myQuiz = [
    {
        question: "Q1.Veer Guardian 2023 Exercise is a maiden bilateral air exercise set to be held between India and which country?",
        A: "china",
        B: "Japan",
        C: "France",
        D: "Australia",
        ans: "ans2"
    },
    {
        question: "Q2.Which type of cancer is caused by Human Papilloma Virus (HPV)?",
        A: "Cervical Cancer",
        B: "Breast Cancer",
        C: "Oral Cancer",
        D: "Prostate Cancer",
        ans: "ans1"
    },
    {
        question: "Q3.National Farmer’s Day is observed to commemorate the birth anniversary of which leader?",
        A: "Atal Behari Vajpayee",
        B: "Jawaharlal Nehru",
        C: "Chaudhary Charan Singh",
        D: "P V Narasimha Rao",
        ans: "ans3"
    },
    {
        question: "Q4.Which institution received approval from SEBI to set up Social Stock Exchange (SSE)?",
        A: "NITI Aayog",
        B: "State Bank of India",
        C: "National Stock Exchange",
        D: "PFRDA",
        ans: "ans3"
    }

];
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
let questions=document.querySelector('.question');
const ques=document.querySelectorAll('.answer');
const submit=document.querySelector('#submit');
let count=0;
const loadQuestion=()=>{
     let questionList=myQuiz[count];
     console.log(questionList);
     questions.innerText=questionList.question;
     option1.innerText=questionList.A;
     option2.innerText=questionList.B;
     option3.innerText=questionList.C;
     option4.innerText=questionList.D;
}
let score=0;
loadQuestion();
const checkedAnswer= ()=>{
    let answer;
   ques.forEach((curAns) =>{
    if(curAns.checked){
        answer=curAns.id;
    }
   })
   return answer;
}
const hided=document.querySelector('#hidedDiv');
submit.addEventListener('click',()=>{
    let ans=checkedAnswer();
    if(ans==myQuiz[count].ans){
        score++;
    }
    count++;
    if(count<myQuiz.length){
        loadQuestion(); 
    }
    else{
        hided.innerHTML=` <div class="scorearea" id="showscore">
        <h2>your score is ${score}/${myQuiz.length}✌️</h2>
        <button class="btn" onclick="location.reload()">Play Again</button></div>`;
        // showscore.classList.remove('scorearea');
    }
})