const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "Delhi"
    },
    {
        question: "Which fruit is the king of fruits?",
        answer: "mango"
    },
    {
        question: "Name the social media platform which name is starts from I?",
        answer: "Instagram"
    },
    {
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language"
    },
    {
        question: "Who is the current prime minister of india?",
        answer: "Narendra Modi"
    },
    {
        question: "Which festival is known as the festival of lights?",
        answer: "Diwali"
    },
    {
        question: "Which is the largest planet in our solar system?",
        answer: "Jupiter"
    },
    {
        question: "What is the national animal of india?",
        answer: "Tiger"
    },
    {
        question: "What is the largest ocean in the world?",
        answer: "Pacific Ocean"
    },
    {
        question: "Who is known as the father of india?",
        answer: "Mahatma Gandhi"
    }
];


function runQuiz() {

    let score = 0; 

   
    for (let i = 0; i < quizQuestions.length; i++) {

        let userAnswer = prompt(quizQuestions[i].question);

  
        if (userAnswer === null) {
            alert("Quiz stopped by user.");
            return;
        }

      
        userAnswer = userAnswer.toLowerCase().trim();

      
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Incorrect! ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

   
    alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}


runQuiz();


