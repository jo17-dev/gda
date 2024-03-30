// This class will contains all the methods to perform operations..
const {Helper} = require("../helpers/Helper");
class Operation{
    // addition
    static addition(datas, startBase, endBase=10){ // datas is an arrays of datas
        // if(Helper.isRealNumber())
        let result = 0;
        if(startBase==10){
            for(let i=0; i<datas.length; i++){
                result += parseFloat(datas[i]);
            }
        }else{

        }
        return result;
    }
}


module.exports.Operation = Operation;