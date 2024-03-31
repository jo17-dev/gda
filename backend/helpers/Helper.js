// This class-file will contains all the helpers funtion 
class Helper {
    /** 
    * This function take a number and verify if he is in the right base
     * @param {String} number 
     * @param {int} targetBase  
     * @returns {boolean}
     */
    static is_in_the_base(number, targetBase){
        let nberParts = number.includes(".") ? number.split(".") : number; // We First split the number into integerand floatting parts
        let result = true;
        if(targetBase == 16){
            let hexDigits = "0123456789ABCDEF";
            for(let i=0; i<nberParts.length; i++){
                nberParts[i].split("").forEach(digit => {
                    if( !hexDigits.includes(digit)){
                        result = false;
                    }
                });
            }
        }else{
            for(let i=0; i<nberParts.length; i++){ // for integer and fractionnal part...
                nberParts[i].split("").forEach(digit => {
                    let current = parseInt(digit);
                    if(current >= targetBase){
                        result = false;
                    }
                });
            }
        }

        return result;
    }
    /**
     * Take and hex and return his equivalent in decemal base
     * @param {Array<String>} datas 
     * @returns {Arrays<String>}
     */
    static mappingFromHex(letter){
        let result=letter ;
        switch (letter){
            case "A":
                result = "10";
                break;
            case "B":
                result = "11";
                break;
            case "C":
                result = "12";
                break;
            case "D":
                result = "13";
                break;
            case "E":
                result = "14";
                break;
            case "F":
                result = "15";
                break;
            default :
                result = letter;
                break;
        }
        return result;
    }
    /**
     * 
     * @param {int} number 
     * @returns {String}
     */
    static mappingHexFromDec(number){
        let result= number;
        switch (number){
            case 10:
                result = "A";
                break;
            case 11:
                result = "B";
                break;
            case 12:
                result = "C";
                break;
            case 13:
                result = "D";
                break;
            case 14:
                result = "E";
                break;
            case 15:
                result = "F";
                break;
            default :
                result = number;
                break;
        }
        return result;
    }

    /**
     * a real number has at most one "."
     * @param {string} number 
     */

    static isRealNumber (number){
        return number.match("^\d+(\.\d+)?$") ? true : false;
    }

    /**
     * 
     * @param {String} sample 
     * @param {String} target 
     * @returns {int}
     */
    static lengthAfter(sample, target){
        let sampleTable = sample.split(target);
        return sampleTable[1].length;
    }
}

module.exports.Helper = Helper;