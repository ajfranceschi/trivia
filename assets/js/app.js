const question1 = {
    q :  "Who's Darth vader's Son?",
    options: {
        A : 'Luke',
        B : 'Leia',
        C : 'Lando',
        D : 'Chewbacca'
    },
    answer: 'A'
};
const question2 = {
    q :  "What's the name of Han Solo's ship?",
    options: {
        A : 'Millennium Falcon',
        B : 'Enterprise',
        C : 'x-Factor',
        D : 'The Millennial'
    },
    answer: 'A'
};
const question3 = {
    q :  "Name of Luke's Mother?",
    options: {
        A : 'Bail organa',
        B : 'Ahsoka',
        C : 'Padme',
        D : 'Jaina'
    },
    answer: 'C'
};
const question4 = {
    q :  "What color is Mace Windu's lightsaber?",
    options: {
        A : 'Green',
        B : 'Red',
        C : 'Blue',
        D : 'Purple'
    },
    answer: 'D'
};
const question5= {
    q: "Who killed qui-Gon?",
    options: {
        A: 'Yoda',
        B: 'Spooke',
        C: 'Rey',
        D: 'Darth Maul'
    },
    answer: 'D'
};

const question6= {
    q: "Who was Darth Tyranus' Master?",
    options: {
        A: 'Yoda',
        B: 'Darth Maul',
        C: 'Darth Sidious',
        D: 'Mace Windu'
    },
    answer: 'C'
};
const question7= {
    q: "in what planet did Rey find The Millennium Falcon?",
    options: {
        A: 'Hoth',
        B: 'Alderaan',
        C: 'Ahch-To',
        D: 'Jakku'
    },
    answer: 'D'
};

questionsArray = [question1, question2, question3, question4, question5, question6,question7];

let currentQuestion = 0;
let counter = 30;
let intervalId;
let correctAnswers = 0;
let incorrectAnswers = 0;
let unansweredQuestions = 0;

const updateQuestion = (questionNumber) => {
    $('#question').text(questionsArray[questionNumber].q);
    $('#answerA').text(questionsArray[questionNumber].options.A);
    $('#answerB').text(questionsArray[questionNumber].options.B);
    $('#answerC').text(questionsArray[questionNumber].options.C);
    $('#answerD').text(questionsArray[questionNumber].options.D);
    currentQuestion++;
};

updateQuestion(currentQuestion);

const startTimer = () => {
    intervalId = setInterval(() => {
        counter--;
        if (counter === 0) {
            unansweredQuestions++;
            clearInterval(intervalId);
            showCorrectIncorrectDiv(false);
        } else {
            $('#timer').text(`Time remaining: ${counter} Seconds`);
        }
    }, 1000);
    counter = 30;
};


$('#startButton').on('click', () => {
   $('.start-container').attr('hidden', true);
   $('.main-content').attr('hidden', false);
   startTimer();
});

$('.answerBtn').on('click', (event) => {
    if (currentQuestion <= questionsArray.length) {

        const questionObject = questionsArray[currentQuestion-1];

        if (questionObject.answer === event.target.value) {
            //show correct div with timer
            showCorrectIncorrectDiv(true);
            correctAnswers++;
        } else {
            showCorrectIncorrectDiv(false);
            incorrectAnswers++;
        }
    }

    if (currentQuestion < questionsArray.length) {
        updateQuestion(currentQuestion);
    } else {
        //show Results
        clearInterval(intervalId);
    }

});

const showCorrectIncorrectDiv = (isCorrect) => {
    clearInterval(intervalId);
    let answerIs = '';
    const correctGif = 'https://media.giphy.com/media/l0K4k1O7RJSghST3a/giphy.gif';
    const incorrectGif = 'https://media.giphy.com/media/3ohuPpdHfJDQIofP4Q/giphy.gif';
    if (isCorrect) {
        answerIs = 'Correct!';
        $('#gif').attr('src', correctGif);
    } else {
        answerIs = 'incorrect';
        $('#gif').attr('src', incorrectGif);
    }
    $('#correctIncorrect').text(answerIs);
    $('.main-content').attr('hidden', true);
    $('#answeredDiv').attr('hidden', false);

    if (currentQuestion < questionsArray.length) {
        dismissAnsweredDiv(false);
    } else {
        dismissAnsweredDiv(true);
    }


};

const dismissAnsweredDiv = (isGameOver) => {
    $('#timer').text('Time remaining: 30 Seconds');
    setTimeout(() => {
        if (!isGameOver) {
            $('.main-content').attr('hidden', false);
            $('#answeredDiv').attr('hidden', true);
            startTimer();
        } else {
            const gif = unansweredQuestions+incorrectAnswers >= correctAnswers
                ? "https://media.giphy.com/media/3h2lUwrZKilQKbAK6f/giphy.gif"
                : "https://media.giphy.com/media/3owzVR7ig8mn0BFQic/giphy.gif";


            $('#correctIncorrect').text('Game over!');
            $('#correctAnswers').text(`Correct Answers: ${correctAnswers}`);
            $('#incorrectAnswers').text(`incorrect Answers: ${incorrectAnswers}`);
            $('#unansweredQuestions').text(`unanswered questions: ${unansweredQuestions}`);
            $('#gif').attr('src', gif);
            $('#resultsDiv').attr('hidden', false);
            $('.startOverButtonDiv').attr('hidden', false);


        }

    }, 3000);


};



$('#startOverButton').on('click', () => {
    reset();
});

const reset = () => {
    $('.start-container').attr('hidden', false);
    $('.main-content').attr('hidden', true);
    $('#answeredDiv').attr('hidden', true);
    $('#resultsDiv').attr('hidden', true);
    $('.startOverButtonDiv').attr('hidden', true);

    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    updateQuestion(currentQuestion);


};