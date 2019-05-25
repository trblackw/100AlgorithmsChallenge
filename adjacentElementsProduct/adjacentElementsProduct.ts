function adjacentElementsProduct(inputArray: number[]): number {
   if (!inputArray.length) return;
   if (inputArray.length === 1) return inputArray[0];
   if (inputArray.length === 2) return inputArray[0] * inputArray[1];
   if (inputArray.length > 1) {
      let highestProduct: number = inputArray[0] * inputArray[1];
      
      inputArray.forEach((num: number, i: number) => {
         if (num * inputArray[i + 1] > highestProduct) {
            highestProduct = num * inputArray[i + 1]
         }
      })
      return highestProduct;
   }
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
