'use strict';

// *** DOM ELEMENTS ***

// image
const image= document.querySelector('.image');

// hint
const hint= document.querySelector('.hint');

// input box
const inputBox= document.querySelector('.user-guess');

// scores
const scoreElement= document.querySelector('.score');
const highscoreElement= document.querySelector('.highscore');


// buttons
const guessBtn= document.querySelector('.guess');
const hintBtn= document.querySelector('.get-hint');
const resetBtn= document.querySelector('.reset');




// *** GLOBAL VARIABLES ***

// all names
const names= ["uttkarsh", 
                "abhinab", 
                "priyasu", 
                "soumili", 
                "akansha",
                "swabarna", 
                "souvik",
                "prinan",
                "aditi", 
                "srimonti",
                "shayambhavi",
                "soham",
                "shilpi",
                "shubhadeep"
];

// data of each person
const data= {
    "uttkarsh": {
        "img": "./media/People/uttkarsh.jpg",
        hints: ["I'm a boi", "I'm tall", "I have beard", "I'm into anime", "I'm teachers' favourite", "I break chairs, not beds"]
    },
    "abhinab": {
        "img": "./media/People/abhinab.jpg",
        hints: ["I'm a boi", "I'm tall", "I'm in IIT", "I have beard", "I'm into anime", "I'm silent most of the time", "I wear specs", "I'm somewhat into football"]
    },
    "prinan": {
        "img": "./media/People/prinan.jpg",
        hints: ["I'm a boi", "I don't keep a beard", "I'm into anime", "I'm a fan of lighting and aesthetics", "Dark theme is the only theme for me", "I'm silent most of the time", "People say I have great taste in music *winks*"]
    },
    "shubhadeep": {
        "img": "./media/People/shubhadeep.jpg",
        hints: ["I'm a boi", "I have beard", "I'm into anime", "I'm a fan of lighting and aesthetics", "I'm into cricket", "I'm a tomper", "People say I'm a great artist"]
    },
    "souvik": {
        "img": "./media/People/souvik.jpg",
        hints: ["I'm a boi", "I have beard", "I wear specs sometimes", "I'm girls' favourite", "I'm into football", "I'm also into chess"]
    },
    "priyasu": {
        "img": "./media/People/priyasu.jpg",
        hints: ["I'm a boi", "I sometimes have a beard", "I wear specs", "I'm into tech", "I'm employed *winks*"]
    },
    "soham": {
        "img": "./media/People/soham.jpg",
        hints: ["I'm a boi", "I'm tall", "I'm in IIT", "I wear specs", "I'm into cricket", "I'm a tomper"]
    },
    "srimonti": {
        "img": "./media/People/srimonti.jpg",
        hints: ["I'm a gurl", "I'm smol", "People say I'm a great artist", "I'm into music", "I wear specs", "I'm in IIT", "I'm (way) into maths"]
    },
    "swabarna": {
        "img": "./media/People/swabarna.jpg",
        hints: ["I'm a gurl", "I'm smol", "I'm into music", "I'm one of the queens", "People say I'm a great singer", "I wear specs", "I'm a BTS/Kdrama fan"]
    },
    "shilpi": {
        "img": "./media/People/shilpi.jpg",
        hints: ["I'm a gurl", "I'm into dancing", "I'm one of the queens", "I used to wear specs", "I'm a BTS/Kdrama fan"]
    },
    "aditi": {
        "img": "./media/People/aditi.jpeg",
        hints: ["I'm a gurl", "I'm smol", "People say I'm a great artist", "I'm into music", "People say I'm a great singer", "Animals tend to steal my food *cries*", "I'm often used as an armrest *cries again*"]
    },
    "shayambhavi": {
        "img": "./media/People/shayambhavi.jpg",
        hints: ["I'm a gurl", "I maybe into dancing", "I wear specs", "My roomie is also my classmate"]
    },
    "soumili": {
        "img": "./media/People/soumili.jpg",
        hints: ["I'm a gurl", "I'm into music", "I'm one of the queens", "I'm teacher's favourite", "I'm alive, but people often call me dead", "I'm a BTS fan", "I live in bois' hearts", "People often wonder about my nails"]
    },
    "akansha": {
        "img": "./media/People/akansha.jpg",
        hints: ["I'm a gurl", "I'm into dancing", "I wear specs", "I'm one of the queens"]
    }
};

// the current person to be guessed
let activePerson;

// default msg
const defaultMsg= hint.textContent;

// default image path
const defaultImg= "./media/question-mark.jpg";

// scores
let score= Number(scoreElement.textContent);
let highscore= Number(highscoreElement.textContent);

// hints for the current person
let hints;
let hintsCount;

// game state;
let gameEnd;



// *** INITIAL CONDITIONS ***

// calling the initalizing function
init();




// *** FUNCTIONS ***

// selecting a random person
function generateRandom(){
    const idx= Math.trunc(Math.random() * (names.length));
    activePerson= names[idx];
    
    // update hints array
    hints= data[activePerson].hints;

    // add blur to image
    if(!image.classList.contains('hide-image'))
        image.classList.add('hide-image');

    // set image to default
    image.src= defaultImg;
}

// intial setup
function init(){
    // remove won/lost states
    image.classList.remove('won-image');
    image.classList.remove('lost-image');
    hint.classList.remove('won-text');
    hint.classList.remove('lost-text');
    hint.classList.remove('hint-text');

    // reset input box
    inputBox.classList.remove('wrong-input', 'correct-input');
    // inputBox.classList.remove('correct-input');
    inputBox.value= "";
    inputBox.placeholder= "Who Am I?"
    inputBox.disabled= false;

    // reset hint text
    hint.textContent= defaultMsg;

    // reset hints array
    hints= null;
    hintsCount= 0;

    // reset score (not highscore)
    score= 10;
    scoreElement.textContent= score;
    scoreElement.classList.remove('won-text', 'lost-text');
    highscoreElement.classList.remove('won-text');

    // select a random person
    generateRandom();

    // set game state
    gameEnd= false;
}

// check the guess made by the user
const checkGuess= ()=>{
    // take in the guess from user and convert to lowercase for checking
    let guess= inputBox.value.toLowerCase();
    guess= guess.trim();
    
    // remove the input from the screen
    inputBox.value= "";

    if(guess===activePerson){
        won();
    }
    else{
        wrongGuess();
    }
}

// get hints
const getHint= ()=>{
    if(hintsCount==hints.length)
        alert("No more hints available! :/");
    else{
        const currHint= hints[hintsCount++];
        hint.textContent= currHint + "...";
        hint.classList.add('hint-text');
        // update score
        if(score==1)
            lost();
        score--;
        scoreElement.classList.add('lost-text');
        scoreElement.textContent= score;
        
    }
}

// if a wrong guess
function wrongGuess(){
    // check for loss condition
    if(score===1){
        lost();
    }
    else{
        // wrong guess message
        inputBox.classList.add('wrong-input');
        inputBox.value= "";
        inputBox.placeholder= "Wrong Guess :/"
    }
    
    score--;
    scoreElement.classList.add('lost-text');
    scoreElement.textContent= score;
}

// won state
function won(){
    // unhide the image
    image.classList.remove('hide-image');

    // update input box
    inputBox.classList.remove('wrong-input');
    inputBox.classList.add('correct-input');
    inputBox.value= "";
    inputBox.placeholder= "Correct!"
    inputBox.disabled= true;

    // add the winning colors
    hint.classList.remove('hint-text');
    image.classList.add('won-image');
    hint.classList.add('won-text');

    // show the person name
    hint.textContent= `🎉 I'm ${activePerson.charAt(0).toUpperCase() + activePerson.slice(1)}! 🎉`;

    // check for highscore
    scoreElement.classList.remove('lost-text');
    scoreElement.classList.add('won-text');
    if(score>highscore){
        highscore= score;
        highscoreElement.textContent= highscore;
        highscoreElement.classList.add('won-text');
    }

    // set end game state to true
    gameEnd= true;
    image.src= data[activePerson].img;
}

function lost(){
    // unhide the image
    image.classList.remove('hide-image');

    // update input box
    inputBox.classList.add('wrong-input');
    inputBox.classList.remove('correct-input');
    inputBox.value= "";
    inputBox.placeholder= "You Lost :'))"
    inputBox.disabled= true;

    // add the loss colors
    image.classList.add('lost-image');
    hint.classList.remove('hint-text');
    hint.classList.add('lost-text');
    scoreElement.classList.add('lost-text');

    // show the person name
    hint.textContent= `I'm ${activePerson.charAt(0).toUpperCase() + activePerson.slice(1)}! Bro? 😢`;

    // set end game state to true
    gameEnd= true;
    image.src= data[activePerson].img;
}


// *** EVENT HANDLERS ***

// Guess Button
guessBtn.addEventListener('click', ()=>{
    if(!gameEnd)
        checkGuess();
});

// Hints Button
hintBtn.addEventListener('click', ()=>{
    if(!gameEnd)
        getHint();
});

// Reset Button
resetBtn.addEventListener('click', init);











// TO UPDATE
// 2. ADD REDS AND GREENS TO INPUT BOX LINES AND PLACEHOLDER AS WELL