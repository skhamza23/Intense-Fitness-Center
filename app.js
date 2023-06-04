const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 80;

dotenv.config({ path: './.env' });

const staticPath = path.join(__dirname, "/static");
app.use(express.static(staticPath));

// MONGO-DB
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true
}).then(() => {
    console.log('Connection Successful!')
}).catch((err) => console.log('No Connection'));

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    branch: String
});

app.use(bodyParser.urlencoded({ extended: true }));

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', (req, res) => {
    const details = new Contact(req.body);
    details.save().then(() => {
        res.send("Thank You! Your details have been saved");
    }).catch(() => {
        res.status(400).send("Something went wrong");
    });
});


// EXPRESS
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/services', function (req, res) {
    res.sendFile(__dirname + "/static/services.html");
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + "/static/contact.html");
});


// STARTING THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});