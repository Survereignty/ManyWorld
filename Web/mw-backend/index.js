const express     = require("express");
const app         = express();
const json        = express.json();

const getPage       = require("./routes/getPage");
const API           = require("./RestAPI/API");
const User          = require("./module/user");

const readline     	= require("readline");
const r1         	= readline.createInterface({
  input:     process.stdin,
  output:    process.stdout
});

const PORT = process.env.PORT || 3000;

const url   = "mongodb://localhost:27017/"; 
const MongoClient = require("mongodb").MongoClient;
 

const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
mongoClient.connect((err, client)=>{
 
    const db = client.db("usersdb");
    const collection = db.collection("users");

    collection.findOne({ email: 'dio@gmail.com' }, (err, result) =>{
        if (result === null)
            collection.insertOne(new User("Владик", "dio@gmail.com", 123456, 1), (err, result)=>{
                  
                if(err){ 
                    return console.log(err);
                }
                console.log(result.email);
                client.close();
            });
        else
            client.close();
    });
});

app.use(express.static("public"));

app.use(getPage);

app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.send('ok');
});

app.use(API);

r1.on("line", (input) => {
    if (input.toLowerCase() == "закрыть"    || 
        input.toLowerCase() == "завершить"  || 
        input.toLowerCase() == "закончить"  ||
        input.toLowerCase() == "выход"      ||
        input.toLowerCase() == "close"      || 
        input.toLowerCase() == "pfrhsnm")
        {
            console.log("___ \n\nРаб молвит - Хорошего дня, хозяин! \n___");
            process.exit();
        }
})



app.listen(PORT, () => {
    console.log("\n___ \n\nРаб молвит - Дело сделано. Приложение запущено, хозяин! \n___\n");
});