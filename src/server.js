require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const importData = require('./routes/index');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB conectado"))
.catch(err => console.error(err));


app.get('/', (req, res) => { 
    res.json({ status: true, message: 'Ping' }); 
});
app.use('/api', importData);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Challenge in http://localhost:${PORT}`));
