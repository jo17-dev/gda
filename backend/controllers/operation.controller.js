// This class will contains all the methods to perform operations in decimal base
class Operation{
    // addition
    static addition(datas){ // datas is an arrays of datas
        let result = 0.0;
        console.log("datas length: ", datas.length)
        for(let i=0; i<datas.length; i++){
            result += parseFloat(datas[i]);
        }
        console.log("result after addition: ", result);
        return result;
    }
    // soustraction
    static soustraction(datas){
        let result = parseFloat(datas[0]) || 0;
        for(let i=1; i<datas.length; i++){
            result -= parseFloat(datas[i]);
        }
        console.log("result after soustraction: ", result);
        return result;
    }
    // multiplication
    static mutiplication(datas){ // datas is an arrays of datas
        let result = 1.0;
        for(let i=0; i<datas.length; i++){
            result *= parseFloat(datas[i]);
        }
        console.log("result after multiplication: ", result);
        return result;
    }
    // division
    static division(datas){ // datas is an arrays of datas
        let result = parseFloat(datas[0]) || 1;
        for(let i=1; i<datas.length; i++){
            if(parseFloat(datas[i]) != 0){
                result /= parseFloat(datas[i]);
            }else{
                return ;
            }
        }
        console.log("result after addition: ", result);
        return result;
    }
}


module.exports.Operation = Operation;