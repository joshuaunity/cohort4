const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/v1/users');
const app = express();
const PORT = 4000;

const corsOptions = {
    origin: 'https://greenmark.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/v1/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});