const router = require('express').Router();

//const apiRoutes = require('./api');
//const 
router.get('/', async (req,res) => {
    res.render('homepage', {})
})
router.get('/login', async (req,res) => {

})
module.exports = router;

//user can write (POST/DELETE)has many blogpost
//blogpost can be viewed by many users (GET only)
