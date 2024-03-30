const router = require('express').Router();
const { Convert } = require('../controllers/conversion.controller');
const {Operation} = require('../controllers/operation.controller');
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
    let result;
    let operation = parseInt(req.body.operation); 
    let t = ['100', '11']; // datas test
    switch (operation){
        case 1:
            console.log("Addition");
            result = Operation.addition(req.body.datas.split(';'), req.body.startBase, req.body.endBase);
            break;
        case 2:
            result = "Soustraction";
            break;
        case 3:
            result = "Multiplication";
            break;
        case 4:
            result = "Division";
            break;
        case 5:
            result = "Modulo";
            break;
        case 6:
            console.log("Conversion");
            result= Convert.allToDec(req.body.datas.split(';') , parseInt(req.body.startBase), parseInt(req.body.endBase));
            break;
        default:
            // res.sendStatus(503);
    }

    res.json(
        {
            operation: req.body.operation,
            resultat: result
        }
    );
});

module.exports = router;