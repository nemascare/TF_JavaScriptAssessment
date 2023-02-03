
function strClean(arrOfStrs) {
    const cleanedStrings = [];
    for (let i = 0; i < arrOfStrs.length; i++) {
        let str = arrOfStrs[i].trim();
        str = str.replace(/[2, 3, 4, 5, 6, 7, 8, 9]/g, '');
        str = str.replace(/0/g, 'zero');
        str = str.replace(/1/g, 'one');
        str = str.replace(/ /g, '_');
        cleanedStrings.push(str);
    }
    console.log(cleanedStrings);
}




// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;