const express     = require("express");
const app         = express();
const json        = express.json();

const getPage       = require("./routes/getPage")
const API           = require("./RestAPI/API")

const readline     	= require("readline");
const r1         	= readline.createInterface({
  input:     process.stdin,
  output:    process.stdout
});

const PORT = process.env.PORT || 3000;

const test = {
    email   : "vlad@gmail.com",
    password: 333222 
}

// const bcrypt = require("bcrypt");

app.use(express.static("public"));

app.use(getPage);

app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.send('ok');
});

app.use(API);

r1.on("line", (input) => {
    if (input.toLowerCase() == "закрыть" || input.toLowerCase() == "завершить" || input.toLowerCase() == "выход")
        {
            console.log("___ \nХорошего дня, хозяин! \n___");
            process.exit();
        }
})

app.listen(PORT, () => {
    console.log("___ \nПриложение запущено хозяин! \n___");
});