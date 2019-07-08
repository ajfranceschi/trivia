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
const questionsArray = [question1, question2, question3, question4, question5];

let currentQuestion = 0;




$('#startButton').on('click', () => {
   $('.start-container').attr('hidden', true);
   $('.main-content').attr('hidden', false);
});

$('.answerBtn').on('click', () => {
    const questionObject = questionsArray[currentQuestion];

    if (questionObject.answer === event.target.value) {
        //show correct div with timer
        console.log('correct');
    } else {
        console.log('incorrect');
    }

    if (currentQuestion < questionsArray.length - 1) {
        currentQuestion++;
        updateQuestion(currentQuestion);
    } else {
        //show Results
        console.log('Done');
    }

});

const updateQuestion = (currentQuestion) => {
    $('#question').text(questionsArray[currentQuestion].q);
    $('#answerA').text(questionsArray[currentQuestion].options.A);
    $('#answerB').text(questionsArray[currentQuestion].options.B);
    $('#answerC').text(questionsArray[currentQuestion].options.C);
    $('#answerD').text(questionsArray[currentQuestion].options.D);
};

updateQuestion(currentQuestion);
const reset = () => {
    $('.start-container').attr('hidden', false);
    $('.main-content').attr('hidden', true);
    currentQuestion = 0;
};