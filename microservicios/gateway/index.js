const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/add',proxy('localhost:9001'));
app.use('/select-update',proxy('localhost:9002'));
app.use('/delete', proxy('localhost:9003'));

app.listen(9000, ()=>{
    console.log("Gateway listening on port 9000")
})