const express = require('express');
const app = express();
const ErrorHandler = require('./middleware/error');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(fileUpload({ useTempFiles: true }));
app.use(cors());
// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env',
  });
}

// Route imports
const product = require('./routes/ProductRoute');
const purchase = require('./routes/PurchaseRoute');
const user = require('./routes/UserRoute');
const sale = require('./routes/SaleRoute');
app.use('/api/v2', product);
app.use('/api/v2', purchase);

app.use('/api/v2', user);
app.use('/api/v2', sale);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
});

// it's for errorHandeling
app.use(ErrorHandler);

module.exports = app;
