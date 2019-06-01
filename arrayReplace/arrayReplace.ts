function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   return inputArray.map((num: number) => {
      num === elemToReplace && (num = substitutionElem);
      return num;
   });
}

console.log(arrayReplace([1, 2, 1], 1, 3));
