
const questions=[
    {
        question:"Who invented Java Programming?",
        answers:[
            {text:"Guido van Rossum",correct:false},
            {text:"James Gosling",correct:true},
            {text:"Dennis Ritchie",correct:false},
            {text:"Bjarne Stroustrup",correct:false}
        ]
    },
    {
        question:"Which statement is true about Java?",
        answers:[
            {text:"Java is a sequence-dependent programming language",correct:false},
            {text:"Java is a code dependent programming language",correct:false},
            {text:"Java is a platform-dependent programming language",correct:false},
            {text:"Java is a platform-independent programming language",correct:true}
        ]
    },
    {
        question:"Which component is used to compile, debug and execute the java programs?",
        answers:[
            {text:"JRE",correct:false},
            {text:"JIT",correct:false},
            {text:"JDK",correct:true},
            {text:"JVM",correct:false}
        ]
    },
    {
        question:"Which one of the following is not a Java feature?",
        answers:[
            {text:"Object-oriented",correct:false},
            {text:"Use of pointers",correct:true},
            {text:"Portable",correct:false},
            {text:"Dynamic and Extensible",correct:false}
        ]
    },
    {
        question:"Which of these cannot be used for a variable name in Java?",
        answers:[
            {text:"identifier & keyword",correct:false},
            {text:"identifier",correct:false},
            {text:"keyword",correct:true},
            {text:"none of the mentioned",correct:false}
        ]
    },
    {
        question:"What is the extension of java code files?",
        answers:[
            {text:".js",correct:false},
            {text:".txt",correct:false},
            {text:".class",correct:false},
            {text:".java",correct:true}
        ]
    },
    {
        question:"Which of the following is not an OOPS concept in Java?",
        answers:[
            {text:"Polymorphism",correct:false},
            {text:"Inheritance",correct:false},
            {text:"Compilation",correct:true},
            {text:"Encapsulation",correct:false}
        ]
    },
    {
        question:"Which of these are selection statements in Java?",
        answers:[
            {text:"break",correct:false},
            {text:"continue",correct:false},
            {text:"for()",correct:false},
            {text:"if()",correct:true}
        ]
    },
    {
        question:"Which of these keywords is used to define interfaces in Java?",
        answers:[
            {text:"intf",correct:false},
            {text:"Intf",correct:false},
            {text:"interface",correct:true},
            {text:"Interface",correct:false}
        ]
    },
    {
        question:"Which of the following is a superclass of every class in Java?",
        answers:[
            {text:"ArrayList",correct:false},
            {text:"Abstract class",correct:false},
            {text:"Object class",correct:true},
            {text:"String",correct:false}
        ]
    },
   
]

let questionElement=document.querySelector(".question");
let answerButton=document.querySelector(".answer_button");
let nextButton=document.querySelector(".next_btn")

let courrentQuestionIndex=0;
let score=0;

const startQuiz=()=>{
    courrentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
const showQuestion=()=>{
    resetState();
     currentQuestion=questions[courrentQuestionIndex];
    // console.log(currentQuestion);
    let questionNo=courrentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question+` <span style="color:red">*<span>`;
     currentQuestion.answers.forEach((value)=>{
        const button=document.createElement("button");
        button.innerHTML=value.text;
        button.setAttribute("class","btn");
        answerButton.appendChild(button);
        if(value.correct){
            button.dataset.correct=value.correct;
         }
         button.addEventListener('click',selectAnswer)
     })
    
}

const resetState=()=>{
    // nextButton.style.display="none"
    nextButton.disabled=true
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

const selectAnswer=(e)=>{
   const selectBtn=e.target;
   const isCorrect=selectBtn.dataset.correct==="true";
   if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
   }
   else{
    selectBtn.classList.add("incorrect");
   }
   Array.from(answerButton.children).forEach((button)=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
    // console.log(button);
   })
//    nextButton.style.display="block";
      nextButton.disabled=false
   
}

const showScore=()=>{
    resetState();
    questionElement.innerHTML=`Your scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Pay Again"
    // nextButton.style.display="block"
    nextButton.disabled=false

}
const handleNextButton=()=>{
    courrentQuestionIndex++;
    console.log(courrentQuestionIndex);
    if(courrentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener('click',()=>{
    if(courrentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
// console.log(question,answerButton,nextButton);
