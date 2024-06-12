const { mainJob, chekingMiddleware } = require('../controllers/operation.controller');

const router = require('express').Router();
require('../controllers/operation.controller');

// router.post('/', (req, res)=>{ // we dont allow this
//     res.sendStatus(400);
// })

// router.get('/', (req, res)=>{ // we dont allow this
//     res.sendStatus(400);
// })

router.patch('/', (req, res, next)=>{
    // Check et  Enregistrement dans la base de données request (cles, ip) + check de la structure des vairables
    chekingMiddleware(req, res, next);
});

router.patch('/', (req, res)=>{
    // doing the main job of the api
    mainJob(req, res);
});


module.exports = router;