var quizContainer = $('#quiz');
var resultsContainer = $('#results');
var startButton = $('#start');
var title = $('#title');

var count = 9;
var score=0;
console.log($("#answer"));

var displayQuestion = function (object) {
    var arrayAnswer = Object.keys(object.answers)
    quizContainer.append(`<div id='container'>
    <div id='question'>
    ${object.question}
    </div>
    <div id='answer'>
    <input type="radio" name="c" value="${arrayAnswer[0]}"/>
    ${arrayAnswer[0]}
    <br>
    <input type="radio" name="c" value="${arrayAnswer[1]}"/>
    ${arrayAnswer[1]}
    <br>
    <input type="radio" name="c" value="${arrayAnswer[2]}"/>
    ${arrayAnswer[2]}
    </div>
    <br>
    <button id="next" onclick='nextQuestion()'>Next</button>
    </div> `)
}

startButton.click(function () {
    var object = pickRandom()
    startButton.hide()
    console.log(object)
    displayQuestion(object)
    title.hide()
    console.log(nextButton);
})
var nextButton = $('#next')
// function checkAnswer() {
//     // check if the answer if worrect
//     var check=Object.keys(object.answers)
//     if(check===true){
//         score++;
//     }
//     var question = pickRandom()
//     if(count<=0){
//         displayEndOfGame()
//     }
//     else{
//         count--;
//         displayQuestion()
//     }


    
//         // if corrent increment score
//         // else keep score
//     // update the current question to the next question
//     // if count is less or equal to 0 
//         // displayEndOfGame()
//         // decrement the count
//         // invoke displayQuestion
// }

function displayEndOfGame() {
    // display the score the the user
    return "you finish and your score is"+score;
    // promt the user to play again

}

function playAgain() {
    // reinitialize the score
    score=0;
    count=0;
    displayQuestion()
    // reinitialize the counter
    // displayQuestion()
}
function nextQuestion () {
    if(count>0){    
    quizContainer.html('')
        var question = pickRandom();
        displayQuestion(question);
        count--;
    }

}
var pickRandom = function () {
    var index = Math.floor(Math.random() * Math.floor(country.length));
    var question = country[index]
    country.splice(index, 1)
    return (question)
}



var country = [
    {
        question: "What is the capital of Canada",
        answers: {
            Toronto: false,
            Ottawa: true,
            Montreal: false
        },
    },
    {
        question: "What is the capital of Australia",
        answers: {
            Sydney: false,
            Melbourne: false,
            Canberra: true
        },
    }, {
        question: "What is the capital of India",
        answers: {
            New_Delhi: true,
            Bombay: false,
            Agra: false
        },
    }, {
        question: "What is the capital of Spain",
        answers: {
            Madrid: true,
            Barcelone: false,
            Valence: false
        },

    }, {
        question: "What is the capital of Senegal",
        answers: {
            Dakar: true,
            Touba: false,
            Senegal: false
        },

    }, {
        question: "What is the capital of belgium",
        answers: {
            Bruges: false,
            Bruxelles: true,
            Louvain: false
        },
    }, {
        question: "What is the capital of Italy",
        answers: {
            Milan: false,
            Torino: false,
            Rome: true
        },
    }, {
        question: "What is the capital of Germany",
        answers: {
            Berlin: true,
            Munich: false,
            Stuttgart: false
        },
    }, {
        question: "What is the capital of Sweden",
        answers: {
            oslo: false,
            Stockholm: true,
            Goteborg: false
        },
    }, {
        question: "What is the capital of Portugal",
        answers: {
            Prague: false,
            Porto: false,
            Lisbonne: true
        },
    }, {
        question: "What is the capital of Serbia",
        answers: {
            Budapest: false,
            Belgrade: true,
            Bucarest: false
        },
    }, {
        question: "What is the capital of Croatia",
        answers: {
            Zagreb: true,
            Belgrade: false,
            Kiev: false
        },
    }, {
        question: "What is the capital of Ghana",
        answers: {
            Lagos: false,
            Abuja: false,
            Accra: true
        },
    }, {
        question: "What is the capital of Russia",
        answers: {
            Moscou: true,
            Kiev: false,
            Saint_Petersbourg: false
        },
    }, {
        question: "What is the capital of Brasil",
        answers: {
            Rio_de_janeiro: false,
            Brasilia: true,
            Sao_Paulo: false
        },
    }, {
        question: "What is the capital of Colombia",
        answers: {
            Cali: false,
            Lima: false,
            Bogota: true
        },
    }, {
        question: "What is the capital of Mexico",
        answers: {
            San_Francisco: false,
            Guatemala: false,
            Mexico: true
        },
    }, {
        question: "What is the capital of Argentina",
        answers: {
            Argentina: false,
            Rosario: false,
            Buenos_Aires: true
        },
    }, {
        question: "What is the capital of France",
        answers: {
            Lille: false,
            Paris: true,
            Marseille: false
        },
    }, {
        question: "What is the capital of Austria",
        answers: {
            Venise: false,
            Vienna: true,
            Salzbourg: false
        },
    }, {
        question: "What is the capital of Denmark",
        answers: {
            Copenhague: true,
            Stockholm: false,
            Amsterdam: false
        },
    }, {
        question: "What is the capital of netherlands",
        answers: {
            Rotterdam: false,
            Eindhoven: false,
            Amsterdam: true
        },
    }, {
        question: "What is the capital of China",
        answers: {
            Hong_Kong: false,
            Shanghai: false,
            Pekin: true
        },
    }, {
        question: "What is the capital of Thailand",
        answers: {
            Phuket: false,
            Bangkok: true,
            Thailand: false
        },
    }, {
        question: "What is the capital of Malaysia",
        answers: {
            Malacca: false,
            Kuala_Lumpur: true,
            Kuantan: false
        },
    }, {
        question: "What is the capital of Indonesia",
        answers: {
            Jakarta: true,
            Bali: false,
            Bangkok: false
        },
    }, {
        question: "What is the capital of Turkey",
        answers: {
            Istanbul: false,
            Antalya: false,
            Ankara: true
        },
    }, {
        question: "What is the capital of Greece",
        answers: {
            Greece: false,
            Patras: false,
            Athena: true
        },
    }, {
        question: "What is the capital of Morocco",
        answers: {
            Casablanca: false,
            Rabat: true,
            Marrakech: false
        },
    }, {
        question: "What is the capital of USA",
        answers: {
            New_York: false,
            Washington_DC: true,
            Chicago: false
        },

    }]

