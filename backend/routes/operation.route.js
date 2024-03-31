const router = require('express').Router();
const { Convert } = require('../controllers/conversion.controller');
const {Operation} = require('../controllers/operation.controller');
const { Helper } = require('../helpers/Helper');
require('../controllers/conversion.controller');

let nberReq = 0;

router.get('/', (req, res)=>{
    res.sendStatus(500);
})

router.post('/', (req, res, next)=>{
    // Check et  Enregistrement dans la base de données request (cles, ip) + check de la structure des vairables
    console.log("request body: > ", req.body);
    if(!Boolean(req.body.operation && req.body.startBase && req.body.endBase && req.body.datas)){
        res.json(
            {message: "not accepted"}
        )
        // res.sendStatus(503);
    }else{
        next();
    }
});

router.post('/', (req, res)=>{
    let result, convertedDatas;
    let operation = parseInt(req.body.operation);
    let areNumbersCorrect = true;

    // firstly check the numbers:
    let numbers = req.body.datas.split(';');
    for(let i=0; i<numbers.length; i++){
        if(!Helper.isRealNumber(numbers[i])){
            areNumbersCorrect = false;
            break;
            // return result;
        }
        if(! Helper.is_in_the_base(numbers[i], parseInt(req.body.startBase))){
            console.log("les bases ne corespoondent ")
            areNumbersCorrect = false;
            break;
            // return result;
        }
    }
    // secondly convert to the decimal base
    if(req.body.startBase != 10 ){
        convertedDatas = Convert.allToDec(numbers, parseInt(req.body.startBase));
        console.log("result after conversion: ", convertedDatas);
    }else{

        convertedDatas = numbers;
    }
    switch (operation){
        case 1: // addition
            result = areNumbersCorrect ? Operation.addition(convertedDatas) : null ;
            break;
        case 2: // Soustraction
            result = areNumbersCorrect ? Operation.soustraction(convertedDatas) : null;
            break;
        case 3: // Multiplication
            result = areNumbersCorrect ? Operation.mutiplication(convertedDatas) : null;
            break;
        case 4: // Division
            result = areNumbersCorrect ? Operation.division(convertedDatas) : null;
            break;
        case 6:
            console.log("Conversion");
            if(req.body.startBase == req.body.endBase){
                result = req.body.datas;
            }else{
                result= req.body.startBase != "10" ? 
                Convert.allToDec(req.body.datas.split(';') , parseInt(req.body.startBase))
                :
                Convert.decToAll(req.body.datas.split(';') , parseInt(req.body.endBase));
            }
            break;
        default:
            result = null;

    }

    res.json(
        {
            operation: req.body.operation,
            resultat: result
        }
    );
});

module.exports = router;