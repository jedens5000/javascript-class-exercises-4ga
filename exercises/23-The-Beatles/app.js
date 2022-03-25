function sing() {
    var longString = ""
    
    for (let i = 1; i <= 11; i++) {
        if (i === 5) {
            longString = longString + "whisper words of wisdom, ";
            
        } else if (i === 11) {
            longString = longString + "there will be an answer, let it be";
        } else {
            longString = longString + "let it be, ";
        }
    }
    return longString;
};
//Your code above ^^^
console.log(sing());


/////////ARRAY METHOD//////////////
// var sing = []
//     for (let i = 1; i <= 11; i++) {
//         if (i === 5) {
//             sing.push("whisper words of wisdom,");
//         } else if (i === 11) {
//             sing.push("there will be an answer, let it be");
//         } else {
//             sing.push("let it be,");
//         }
// };

// console.log(...sing);