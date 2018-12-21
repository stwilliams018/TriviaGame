

var selected = 0
var correct = "Testing"
var incorrect = 0
var unanswered = 0
var questionNum = 0
var count = 100


var quizQuestion = [{
    question: "Walter White led a pretty normal life in the south-western part of the United States. All this changed after receiving a cancer diagnoses. Which state does the show take place in?",
    answers: {
        a: 'Arizona',
        b: 'New Mexico',
        c: 'Utah',
        d: 'Texas'
    },
    correctAnswer: 'b'
    },
    {
    question: "What are the last words spoken in the series?",
    answers: {
        a: 'And thus it ends',
        b: 'Why?',
        c: 'And where did it all get us?',
        d: 'Well, goodbye Lydia'
    },
    correctAnswer: 'd'
    },
    {
    question: "While convalescing from the shootout with the Salamanca twins, what does Hank start collecting?",
    answers: {
        a: 'Fossils',
        b: 'Arrowheads',
        c: 'Minerals',
        d: 'Craft Beer Bottles'
    },
    correctAnswer: 'c'
    },
    {
    question: " Jane is the next door neighbor of Jesse who becomes his love interest in season 2 of Breaking Bad. What is the occupation of Jane's father, who becomes the subject of a major plot line in the final episode of the season?",
    answers: {
        a: 'Pilot',
        b: 'Bus Driver',
        c: 'Police Officer',
        d: 'Air Traffic Controlloer'
    },
    correctAnswer: 'd'
    },
    {
    question: " Walt's son, Walter Junior, has cerebral palsy. Walt's wife, Skyler, is pregnant. After learning of his grim prognosis, Walt is concerned about his family's financial future. What drug does he decide to manufacture and sell in hopes of providing for his family?",
    answers: {
        a: 'Heroin',
        b: 'Crystal Meth',
        c: 'Cocaine',
        d: 'Ecstasy'
    },
    correctAnswer: 'b'
    },
    {
    question: "What country is Gus from originally?",
    answers: {
        a: 'Chile',
        b: 'Argentina',
        c: 'Mexico',
        d: 'Ecuador'
    },
    correctAnswer: 'a'
    },
    {
    question: "Skyler concocts a story to justify being able to buy the carwash. From what casino game has Walt supposedly made all of his money?",
    answers: {
        a: 'Poker',
        b: 'Blackjack',
        c: 'Roulette',
        d: 'Slots'
    },
    correctAnswer: 'b'
    },
    {
    question: "After an unfortunate experience with their original distributors, who do Walt and his partner start doing business with next?",
    answers: {
        a: 'Gus',
        b: 'Hank',
        c: 'Lydia',
        d: 'Tuco'
    },
    correctAnswer: 'd'
    },
    {
    question: "Walt doesn't want to use his real name when conducting drug-related business. He decides to use a street name, or pseudonym. What scientific name does he go by?",
    answers: {
        a: 'Mendeleev',
        b: 'Newton',
        c: 'Heisenberg',
        d: 'Preistley'
    },
    correctAnswer: 'c'
    },
    {
    Question: "What memento from the carwash does Walt refuse to let Bogdan, the previous owner of the carwash; take?",
    answers: {
        a: 'keys',
        b: 'Picture',
        c: 'Dollar Bill',
        d: 'Vacum Cleaner'
    },
    }
]

$(document).ready(function(){
    $("#results").hide();
    $("#submit").hide();

    $("#start").click(function(){
        //$(this).hide();
        counter = setInterval(timer, 1000); 
        displayTrivia();

        }); 
        
        
        function timer(){
        count--;
        if (count <= 0) {
            hideTrivia();
            alert("Times Up!!");
            showResults();
            $("#timer").hide();
         clearInterval(counter);
         return;
        }
        
         $("#timer").html("Time remaining: " + "00:" + count + " secs");
         $("#start").hide();
         $("#submit").hide();
    }

    function displayTrivia() {
        var output = [];
        var answers;

        for(var i=0; i<quizQuestion.length; i++){
            answers = [];
            for(letter in quizQuestion[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + quizQuestion[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + quizQuestion[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        document.getElementById("quiz").innerHTML = output ;
        $("#submit").show();
   }   

    function hideTrivia() {
        $("#quiz").hide();

    }

    function showResults (){
        document.getElementById("ua").innerHTML = unanswered ;
        document.getElementById("cor").innerHTML = correct ;
        document.getElementById("incor").innerHTML = incorrect ;
        
    }

















})