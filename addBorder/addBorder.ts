function addBorder(picture: string[]): string[] {
   let maxLengthStr: number = picture[0].length + 2;
   let asteriskStr: string[] | string = [];
   asteriskStr.length = maxLengthStr;
   let wall: string[] = picture.map((str: string) => {
      if (str.length > maxLengthStr) {
         maxLengthStr = str.length + 2
      };
      str = `*${str}*`;
      return str;
   });
   asteriskStr.fill('*');
   wall = [asteriskStr.join(''), ...wall, asteriskStr.join('')]
   asteriskStr = asteriskStr.join('');
   return wall;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abcefg", "dedbdb"]));