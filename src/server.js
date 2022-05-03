const express = require('express')
const routes = require('./routes.js')

const cookieParser = require('cookie-parser')
const cors = require('cors')

require('./database')

const app = express()

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "http://mychallengefrontend.s3-website-sa-east-1.amazonaws.com");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
})
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3333)