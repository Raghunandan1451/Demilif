require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api', require('./routes/authRouter'));

const URI = process.env.MONGO_URL;
mongoose.connect(
	URI,
	{
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) throw err;
		console.log('Connected to DB');
	}
);

const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`Server running at port ${port}`);
});
