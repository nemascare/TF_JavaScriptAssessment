function oddOneOut(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            return nums[i];
        }  
        
    }
    return -1
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;