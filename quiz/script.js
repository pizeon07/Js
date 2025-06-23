const questions = [
    { question: 'Which country doesn’t have a capital?', options: ['Nauru', 'Bhutan', 'Monaco', 'Vatican City'], answer: 0 },
    { question: 'Which creature can hold its breath for 6 days?', options: ['Scorpion', 'Crocodile', 'Whale', 'Bat'], answer: 0 },
    { question: 'Which animal has three eyes?', options: ['Tuatara', 'Octopus', 'Chameleon', 'Snake'], answer: 0 },
    { question: 'Which creature can sleep for 3 years?', options: ['Snail', 'Bear', 'Bat', 'Koala'], answer: 0 },
    { question: 'Which mountain changes its colour every day?', options: ['Ayers Rock', 'Mount Fuji', 'Kilimanjaro', 'Matterhorn'], answer: 0 },
    { question: 'What is the smallest bone in the human body?', options: ['Stapes', 'Femur', 'Malleus', 'Incus'], answer: 0 },
    { question: 'What is the largest species of shark?', options: ['Great White Shark', 'Whale Shark', 'Tiger Shark', 'Hammerhead Shark'], answer: 1 },
    { question: 'Which animal is known as the King of the Jungle?', options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'], answer: 0 },
    { question: 'Who painted the Mona Lisa?', options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Michelangelo'], answer: 2 },
    { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Mercury', 'Uranus'], answer: 0 }
];

let score = 0;
let currentQuestionIndex = 0;
const result = document.getElementById("result");
const answerButtons = document.getElementById("answer").children;
const questionElement = document.getElementById("question");

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        displayResult();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `Q.${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    Array.from(answerButtons).forEach((button, index) => {
        button.textContent = currentQuestion.options[index]; 
        button.className = ''; // Reset button styles
        button.disabled = false;
        button.onclick = () => handleAnswer(index);
    });  
}

function handleAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;
    Array.from(answerButtons).forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) {
            button.classList.add('correct');
        } else if (index === selectedIndex) {
            button.classList.add('incorrect');
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestionIndex++;
    setTimeout(showQuestion, 1000);
}

function displayResult() {
    result.style.display = 'block';
    result.textContent = `You've scored ${score} out of ${questions.length}`;
}

showQuestion();
