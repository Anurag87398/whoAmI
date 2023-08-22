'use strict';

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
                "subhadeep"
];

// data of each person
const data= {
    "uttkarsh": {
        "img": "/media/People/uttkarsh.jpg",
        hints: ["I'm a boi", "I'm tall", "I have beard", "I'm into anime", "I'm teachers' favourite", "I break chairs, not beds"]
    },
    "abhinab": {
        "img": "This is a path to an image",
        hints: ["I'm a boi", "I'm tall", "I'm in IIT", "I have beard", "I'm into anime", "I'm silent most of the time", "I wear specs", "I'm somewhat into football"]
    },
    "prinan": {
        "img": "This is a path to an image",
        hints: ["I'm a boi", "I don't keep a beard", "I'm into anime", "I'm a fan of lighting and aesthetics", "Dark theme is the only theme for me", "I'm silent most of the time", "People say I have great taste in music *winks*"]
    },
    "shubhadeep": {
        "img": "This is a path to an image",
        hints: ["I'm a boi", "I have beard", "I'm into anime", "I'm a fan of lighting and aesthetics", "I'm into cricket", "I'm a tomper", "People say I'm a great artist"]
    },
    "souvik": {
        "img": "This is a path to an image",
        hints: ["I'm a boi", "I have beard", "I wear specs sometimes", "I'm girls' favourite", "I'm into football", "I'm also into chess"]
    },
    "priyasu": {
        "img": "This is a path to an image",
        hints: ["I'm a boi", "I sometimes have a beard", "I wear specs", "I'm into tech", "I'm employed *winks*"]
    },
    "soham": {
        "img": "This is a path to an image",
        hints: ["I'm a boi", "I'm tall", "I'm in IIT", "I wear specs", "I'm into cricket", "I'm a tomper"]
    },
    "srimonti": {
        "img": "This is a path to an image",
        hints: ["I'm a gurl", "I'm smol", "People say I'm a great artist", "I'm into music", "I wear specs", "I'm in IIT", "I'm (way) into maths"]
    },
    "swabarna": {
        "img": "This is a path to an image",
        hints: ["I'm a gurl", "I'm smol", "I'm into music", "I'm one of the queens", "People say I'm a great singer", "I wear specs", "I'm a BTS/Kdrama fan"]
    },
    "shilpi": {
        "img": "This is a path to an image",
        hints: ["I'm a gurl", "I'm into dancing", "I'm one of the queens", "I used to wear specs", "I'm a BTS/Kdrama fan"]
    },
    "aditi": {
        "img": "This is a path to an image",
        hints: ["I'm a gurl", "I'm smol", "People say I'm a great artist", "I'm into music", "People say I'm a great singer", "Animals tend to steal my food *cries*", "I'm often used as an armrest *cries again*"]
    },
    "shayambhavi": {
        "img": "This is a path to an image",
        hints: ["I'm a gurl", "I maybe into dancing", "I wear specs", "My roomie is also my classmate"]
    },
    "soumili": {
        "img": "This is a path to an image",
        hints: ["I'm a gurl", "I'm into music", "I'm one of the queens", "I'm teacher's favourite", "I'm alive, but people often call me dead", "I'm a BTS fan", "I live in bois' hearts", "People often wonder about my nails"]
    },
    "akansha": {
        "img": "This is a path to an image",
        hints: ["I'm a gurl", "I'm into dancing", "I wear specs", "I'm one of the queens"]
    }
};

// the current person to be guessed
let activePeron;




// *** DOM ELEMENTS ***

// image
const image= document.querySelector('.image');

// hint
const hint= document.querySelector('.hint');

// input box
const guess= document.querySelector('.user-guess');

// scores
const score= document.querySelector('.score-field');
const highScore= document.querySelector('.highscore-field');

// buttons
const guessBtn= document.querySelector('.guess');
const hintBtn= document.querySelector('.get-hint');
const resetBtn= document.querySelector('.reset');


// *** FUNCTIONS ***

// selecting a random person
const generateRandom= ()=>{
    const idx= Math.trunc(Math.random() * (names.length));
    activePeron= names[idx];
}

// for(let i=0; i<=50; i++)
//     generateRandom();