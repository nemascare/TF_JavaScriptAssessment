function oddOneOut(arrOfInts){
    for (const num of arrOfInts) {
        if (num % 2 !== 0) {
            return num;
        }  else  {
            return -1;
        }
    }
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;