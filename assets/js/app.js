const question1 = {
    q :  "Who's Darth's Son?",
    options: {
        A : 'Luke',
        B : 'Leia',
        C : 'Lando',
        D : 'Chewie'
    },
    answer: 'A'
};
const question2 = {
    q :  "What's the name of Han Solo's ship?",
    options: {
        A : 'Millenium Falcon',
        B : 'Enterprise',
        C : 'X-Factor',
        D : 'The Millenial'
    },
    answer: 'A'
};
const question3 = {
    q :  "Name of Luke's Mother?",
    options: {
        A : 'Organa',
        B : 'Sophia',
        C : 'Padme',
        D : 'Juana'
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
    q: "Who killed Qui-Gon?",
    options: {
        A: 'Yoda',
        B: 'Spooke',
        C: 'Rey',
        D: 'Darth Maul'
    },
    answer: 'D'
};
questionsArray = [question1, question2, question3, question4, question5];

let currentQuestion = 0;
let counter = 30;
let intervalId;
let correctAnswers = 0;
let incorrectAnswers = 0;

const startTimer = (isQuestionResult) => {
    intervalId = setInterval(() => {
        counter--;
        if (counter === 0) {
            $('#timer').text('Failed!');
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
   startTimer(false);
});

$('.answerBtn').on('click', () => {
    const questionObject = questionsArray[currentQuestion];

    if (questionObject.answer === event.target.value) {
        //show correct div with timer
        showCorrectIncorrectDiv(true);
        correctAnswers++;
    } else {
        showCorrectIncorrectDiv(false);
        incorrectAnswers++;

    }

    if (currentQuestion < questionsArray.length - 1) {
        updateQuestion(currentQuestion);
    } else {
        //show Results
        console.log('Done');
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
        answerIs = 'Incorrect';
        $('#gif').attr('src', incorrectGif);
    }
    $('#correctIncorrect').text(answerIs);
    $('.main-content').attr('hidden', true);
    $('#answeredDiv').attr('hidden', false);

    dismissAnsweredDiv();

};

const dismissAnsweredDiv = () => {
    $('#timer').text('Time remaining: 30 Seconds');
    setTimeout(() => {
        $('.main-content').attr('hidden', false);
        $('#answeredDiv').attr('hidden', true);
        startTimer();
    }, 3000);


};

const updateQuestion = (questionNumber) => {
    $('#question').text(questionsArray[questionNumber].q);
    $('#answerA').text(questionsArray[questionNumber].options.A);
    $('#answerB').text(questionsArray[questionNumber].options.B);
    $('#answerC').text(questionsArray[questionNumber].options.C);
    $('#answerD').text(questionsArray[questionNumber].options.D);
    currentQuestion++;
};

updateQuestion(currentQuestion);

const reset = () => {
    $('.start-container').attr('hidden', false);
    $('.main-content').attr('hidden', true);
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
};