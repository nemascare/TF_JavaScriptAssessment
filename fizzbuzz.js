function fizzBuzz(start, end, skip){
    const result = [];
    for (let i = start; i <= end; i++) {
        if (i.toString().indexOf(skip.toString()) === -1) {
            result.push(i);
        }
    }
    return result;
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;