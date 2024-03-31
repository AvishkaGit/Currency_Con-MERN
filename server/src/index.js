const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//all currences
app.get("/getAllCurrencies" ,async (req, res)=>{

    const nameURL = "https://docs.openexchangerates.org/reference/currencies-json?app_id=a3f1162c429145c497e199ff3b235350";

   

    try{
        const namesResponce = await axios.get(nameURL);
        const nameData = nameResponce.data;
    
        return res.json(nameData);
    }catch(err){
        console.error(err);
    }
});

//portlistern
app.listen(5000, ()=>{
     console.log("SERVER STARTED");
});z
