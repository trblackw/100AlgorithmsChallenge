function almostIncreasingSequence(sequence: number[]): boolean | any {
   for (let i = 0; i < sequence.length; i++) {
      const number: number = sequence[i];
      if (number >= sequence[i + 1]) {
         
      }
      console.log(number)
   }
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 