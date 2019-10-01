const MORSE_TABLE = {
    '.-':     'a', 
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e', 
    '..-.':   'f',
    '--.':    'g',
    '....':   'h', 
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',  
    '-.':     'n', 
    '---':    'o', 
    '.--.':   'p', 
    '--.-':   'q', 
    '.-.':    'r',  
    '...':    's', 
    '-':      't', 
    '..-':    'u',  
    '...-':   'v', 
    '.--':    'w', 
    '-..-':   'x', 
    '-.--':   'y', 
    '--..':   'z', 
    '.----':  '1', 
    '..---':  '2', 
    '...--':  '3', 
    '....-':  '4', 
    '.....':  '5', 
    '-....':  '6', 
    '--...':  '7', 
    '---..':  '8', 
    '----.':  '9', 
    '-----':  '0', 
}; 

function decode(expr) {
 
    var separateArray = expr.match(/.{1,10}/g);
    var separateString = separateArray.join(' ');
    var dashDecoder = separateString.replace(/11/g, "-");
    var dotDecoder = dashDecoder.replace(/10/g, ".");
    var deleteZeros = dotDecoder.replace(/0/g, "");
    var convertation = deleteZeros.replace(/([.-]+[-.]*)/g, (_, x) =>MORSE_TABLE [x]);
    var deleteSpaces = convertation.replace(/\s/g, '');
    var finalDecoder = deleteSpaces.replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");

    return finalDecoder;


}

module.exports = {
    decode
}