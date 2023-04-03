const { Router } = require('express');

const ProductController = require('../src/app/controllers/ProductController');

const router = Router();

router.post('/products', ProductController.store);
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.destroy);

module.exports = router;
