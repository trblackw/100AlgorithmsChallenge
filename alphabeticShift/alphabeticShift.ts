function alphabeticShift(inputString: string): any {
   return inputString.split('').map((letter: string, i: number) => {
      letter = nextLetter(letter);
      return letter;
   }).join('')
}

console.log(alphabeticShift('crazy'));


function nextLetter(s){
   return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
       var c= a.charCodeAt(0);
       switch(c){
           case 90: return 'A';
           case 122: return 'a';
           default: return String.fromCharCode(++c);
       }
   });
}

console.log(nextLetter('crazy'))

const shiftLetter = (inputString: string): string => {
 const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 return inputString.split('').map((letter: string) => {
    if (/z/ig.test(letter)) {
       letter = 'a';
    } else {
       const index = alphabet.findIndex(x => new RegExp(x, 'ig').test(letter))
       letter = alphabet[index + 1];
    }
    return letter;
 }).join('')
}

console.log(shiftLetter('crazy'))