const arrayOfQuotes = [
    {'author': 'Wahao Siz', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Catz Tau', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Hullet Khowa', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Kay Tau', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Kay Siz', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}