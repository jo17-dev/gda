// this class is for convert different stuff
const { Helper } = require("../helpers/Helper");
class Convert {
    alphaChars = ['A', 'B', 'C', 'D', 'E', 'F'];
    static binToHex(datas, startBase, endBase){
        console.log("conversion bin to Hex");
    }
    /**
     * 
     * @param {Array<String>} datas 
     * @param {int} startBase 
     * @param {int} endBase 
     * @returns 
     */
    static allToDec(datas, startBase, endBase){ // datas: array<string>
        let result=[];
        let nbers = datas;
        console.log(datas);
        for(let i=0; i<datas.length; i++){
            if(!Helper.is_in_the_base(datas[i], parseInt(startBase))){
                return ;
            }
        }
        console.log("verification checked");
/**
 * for each number, i will just calculate the result and then push it to the final result
 * 
 */
        datas.forEach(number=>{ // for each number
            let curentNumberResult = 0.0;
            let i= number.length-1; // reverse position
            let isFactionnal = number.includes(".");
            let j = isFactionnal ? i-Helper.lengthAfter(number , ".")-1 : i;
            while(true){
                console.log("curent j: ", j, " coresponding char: ", number.charAt(number.length-1-i))
                if(number.charAt(number.length-1-i) != "."){
                    curentNumberResult += parseFloat(Helper.mappingHex(number.charAt(number.length-1-i))) * Math.pow(startBase , j);
                }else{
                    j=0;
                }
                i--;
                j--;
                if(i<0){
                    break;
                }
            }
            result.push(curentNumberResult);
        });
        return result;
    }
}

module.exports.Convert = Convert;