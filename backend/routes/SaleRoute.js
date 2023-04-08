const express = require('express');
const { createSale, getAdminSale } = require('../controller/SaleController');

const router = express.Router();

router.route('/admin/sales').get(getAdminSale);

router.route('/sales').post(createSale);

module.exports = router;
