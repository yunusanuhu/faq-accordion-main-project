const questionOne = document.getElementById("question1");
const questionTwo = document.getElementById("question2");
const questionThree = document.getElementById("question3");
const questionFour = document.getElementById("question4");
const fisrtAnswer = document.getElementById("answer1")
const secondAnswer = document.getElementById("answer2");
const thirdAnswer = document.getElementById("answer3");
const fourthAnswer = document.getElementById("answer4");

questionOne.addEventListener("click", () => {
    fisrtAnswer.classList.toggle("hide");
    
    if(questionOne.src.endsWith("icon-plus.svg")){
        questionOne.src = "./assets/images/icon-minus.svg"
    }else{
        questionOne.src = "./assets/images/icon-plus.svg"
    }
   
});

questionTwo.addEventListener("click", () => {
    secondAnswer.classList.toggle("hide");
    if(questionTwo.src.endsWith("icon-plus.svg")){
        questionTwo.src = "./assets/images/icon-minus.svg"
    }else{
        questionTwo.src = "./assets/images/icon-plus.svg"
    }
    
});

questionThree.addEventListener("click", () => {
    thirdAnswer.classList.toggle("hide");
    if(questionThree.src.endsWith("icon-plus.svg")){
        questionThree.src = "./assets/images/icon-minus.svg"
    }else{
        questionThree.src = "./assets/images/icon-plus.svg"
    }
});

questionFour.addEventListener("click", () => {
    fourthAnswer.classList.toggle("hide");
    if(questionFour.src.endsWith("icon-plus.svg")){
        questionFour.src = "./assets/images/icon-minus.svg"
    }else{
        questionFour.src = "./assets/images/icon-plus.svg"
    }
});