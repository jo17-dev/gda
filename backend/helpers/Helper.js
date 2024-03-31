// This class-file will contains all the helpers funtion 
class Helper {
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
        let result = true;
        for(let i=0;i<number.length; number++){
            if(!"0123456789ABCDEF.".includes(number[i])){
                result = false;
                break;
            }
        }
        return result;
        // return number.match("^\d+(\.\d+)?$") ? true : false;
    }

        /** 
    * This function take a number and verify if he is in the right base
     * @param {String} number 
     * @param {int} targetBase  
     * @returns {boolean}
     */
        static is_in_the_base(number, targetBase){
            let result = true;
            if(targetBase < 16){
                let baseItems = ["."]; // all the items who suppose to be in the target base
                for(let i=0; i<targetBase; i++){
                    baseItems.push(i.toString());
                }
                // checking the second items
                for(let i=0;i<number.length; i++){
                    if(!baseItems.includes(number[i])){
                        result = false;
                    }
                }
            }
            if(targetBase == 16){ // base 16 management 
                for(let i=0; i<number.length; i++){
                    if(!this.isRealNumber(number[i])){
                        result = false;
                        break;
                    }
                }
            }
            return result;
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