function allLongestStrings(inputArray: string[]): string[] {
   if (!inputArray.length) return [];
   if (inputArray.length === 1) return [inputArray[0]];
   if (inputArray.length === 2) {
      return inputArray[0].length > inputArray[1].length ? [inputArray[0]] : [inputArray[1]];
   }
   if (inputArray.length >= 2) {
      let longestStrLength: number = inputArray[0].length;
      inputArray.forEach((str: string) => {
         str.length > longestStrLength && (longestStrLength = str.length);
      });
      return inputArray.filter((str: string) => str.length === longestStrLength);
   }
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
console.log(allLongestStrings(['abdfdfa', 'asdfa', 'adddddd', 'dvcd', 'aba']));
console.log(allLongestStrings(['abdfdfa']));
console.log(allLongestStrings(['abdfdfa', 'sdfsdfssd']));
