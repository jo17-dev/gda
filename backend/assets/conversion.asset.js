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
    static allToDec(datas, startBase){ // datas: array<string>
        let result=[];
        let nbers = datas;
        console.log(datas);
        for(let i=0; i<datas.length; i++){
            if(!Helper.is_in_the_base(datas[i], parseInt(startBase))){
                return ;
            }
        }
        console.log("verification checked");
        // for each number, i will just calculate the result and then push it to the final result
        datas.forEach(number=>{ // for each number
            let curentNumberResult = 0.0;
            let i= number.length-1; // reverse position
            let isFactionnal = number.includes(".");
            let j = isFactionnal ? i-Helper.lengthAfter(number , ".")-1 : i;
            while(true){
                console.log("curent j: ", j, " coresponding char: ", number.charAt(number.length-1-i))
                if(number.charAt(number.length-1-i) != "."){
                    curentNumberResult += parseFloat(Helper.mappingFromHex(number.charAt(number.length-1-i))) * Math.pow(startBase , j);
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

    /**
     * decToAll: convert any numbers from decimalto all others
     * @param {Array<String>} datas 
     * @param {int} endBase 
     * @returns 
     */
    static decToAll(datas, endBase){
        // checking if thes datas are right
        for(let i=0; i<datas.length; i++){
            if(!Helper.is_in_the_base(datas[i], 10)){
                return ;
            }
        }
        // split the numbers into integer adn fractional parts and calculates the rests
        let result = [];
        datas.forEach(number => { // for each number in datas arrays...
            let integerPart = parseInt(number.split(".")[0]);
            let numberResult = []; // will stock the curent partNumber result
            // integer part:
            while(integerPart !=0){
                numberResult.push(
                    Helper.mappingHexFromDec(integerPart % endBase)
                );
                integerPart = Math.floor(integerPart/endBase);
            }
            // fractionnal part 
            let fractionnalPart = parseFloat("0."+parseInt(number.split(".")[1])); // fractionnal part of the number
            let i=0; // digits after the "."
            fractionnalPart > 0 ? numberResult.unshift(".") : undefined ;
            while(fractionnalPart != 0 && i<10){
                numberResult.unshift(
                    Helper.mappingHexFromDec(Math.floor(fractionnalPart*endBase))
                )
                // recalculation of the "fractionnalPart"
                fractionnalPart = parseFloat(fractionnalPart*endBase) >= 1 ? 
                    (parseFloat(fractionnalPart*endBase) - Math.floor(fractionnalPart*endBase))
                : 
                parseFloat(fractionnalPart*endBase);
                console.log("fractionnal part: ", fractionnalPart);
                i++;
            }
            result.push(numberResult.reverse().join(""))
        });

        return result;
    }
}

module.exports.Convert = Convert;