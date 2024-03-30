// This class-file will contains all the helpers funtion 
class Helper {
    /** 
    * This function take a number and verify if he is in the right base
    * @params {nber: String, targetBase:int}
    * @returns boolean
     */
        /**
     * 
     * @param {Array<String>} datas 
     * @param {int} startBase 
     * @param {int} endBase 
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
                    console.log(current)
                    if(current == NaN || current >= targetBase){
                        result = false;
                    }
                });
            }
        }

        return result;
    }
    /**
     * 
     * @param {Array<String>} datas 
     * @returns {Arrays<String>}
     */
    static mappingHex(letter){
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
     * @param {string} number 
     */

    static isRealNumber (number){
        return number.match("^\d+(\.\d+)?$") ? true : false;
    }


    static lengthAfter(sample, target){
        let sampleTable = sample.split(target);
        return sampleTable[1].length;
    }
}

module.exports.Helper = Helper;