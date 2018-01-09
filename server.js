const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const avengers = require('./routes/avengers')
const justiceleague = require('./routes/justiceleague')

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/avengers', avengers);
app.use('/justiceleague', justiceleague);

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000, () => {
	console.log('listening');
});