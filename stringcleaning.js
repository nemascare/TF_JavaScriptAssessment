function strClean(strings) {

    return strings.map(str => {

        str = str.trim();
      
        str = str.replace(/\s/g, "_");
      
        str = str.replace(/0/g, "zero").replace(/1/g, "one");
      
        str = str.replace(/[2-9]/g, "");
      
        return str;
      });


}



// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;