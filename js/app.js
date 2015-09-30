var express = require('express') ;
var bodyParser =require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlcoded({extended:true}));

var router = express.Router();
var product = require('./routes/api/product');

router.get('/api/products' , product.getAll);
router.post('/api/products' , product.getAll);

router.route('/api/product/:id')
.get(product.read)
.put()