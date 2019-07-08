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

var randomNumber = Math.floor(Math.random() * questionsArray.length);

let timer = new

$('#question').text(questionsArray[randomNumber].q);
$('#answerA').text(questionsArray[randomNumber].options.A);
$('#answerB').text(questionsArray[randomNumber].options.B);
$('#answerC').text(questionsArray[randomNumber].options.C);
$('#answerD').text(questionsArray[randomNumber].options.D);
