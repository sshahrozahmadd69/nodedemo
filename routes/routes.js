const express = require('express')
const {signUp, getdata, updatedata, deletedata}= require('../controllers/warehouse.controller')

const router = express.Router();

router.post('/addusers',signUp);
router.get('/getdata',getdata);
router.post('/update',updatedata);
router.delete('/delete',deletedata)


module.exports= router;

