const rotateArray = (originalArray, rotateNum) => {
    var amtShifted = 0
    var rotatedArray = []
    if(rotateNum>0) {
        amtShifted = originalArray.length-rotateNum;
        for(let i=amtShifted; i<originalArray.length; i++) {
            rotatedArray.push(originalArray[i])
            originalArray.splice(i, 1)        
        }
        return rotatedArray.concat(originalArray);
    } else if(rotateNum<0) {
        amtShifted = Math.abs(rotateNum)-1
        for(let i=amtShifted; i>=0; i--) {
            rotatedArray.unshift(originalArray[i])
            originalArray.splice(i, 1)
        }
        return originalArray.concat(rotatedArray);
    } else if(rotateNum===0 || rotateNum===undefined) return originalArray;
}

console.log(rotateArray(['first', 'second', 'third', 'fourth'], -3))