const customException = Object.freeze({ 
    BAD_NUMBER: 0,  // the type of number is not that good
    BAD_PARAMS: 1,  // the type of params is not good
    BAD_END_BASE: 2, // the type of endBase params is no good
    BAD_START_BASE: 3,  // The type of startBse params is not good
});

module.exports.customException = customException;