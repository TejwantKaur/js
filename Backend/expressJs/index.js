const express = require("express");
const app = express();

// console.dir(app);

let port = 3030;
app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
})

// accept request;
// app.use((req,res)=>{
//     console.log("request recieved");
//     // res.send("response is send");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>mango</li></ul"
//     res.send(code);
// })

app.get("/",(req,res)=>{
    res.send("Response send");
})

app.get("/fruits",(req,res)=>{
    let code = "<h1>Fruits</h1><ul><li>apple</li><li>mango</li></ul"
    res.send(code);
})

app.get("/fruits/:name/:id",(req,res)=>{
    let {name,id} = req.params;
    console.log(req.params);

    res.send(` welcome @${name}`);
    // res.send(req.params);
})

app.get("/search",(req,res)=>{
    res.send(req.query);
    // let {q} = req.query;
    // console.log(q)
    // res.send(q);

})

app.get("/rolldice",(req,res)=>{
    let diceval= Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs",{diceval});
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const intsaData = require("./data.json");
    const data = intsaData[username];
    if(data)
      res.render("insta.ejs",{data});
    else
      res.render("error.ejs")

})

app.get(/.*/, (req, res) => {
  res.status(404).send("Path doesn't exist");
});


app.post("/",(req,res)=>{
    res.send("Post request recieved");
})

