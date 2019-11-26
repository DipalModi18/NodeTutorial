var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('In get method');
});

module.exports = router;