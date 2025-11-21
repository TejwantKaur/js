const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require("path")
const Chat = require("./models/chat")

app.set("view", path.join(__dirname,"views"))
app.set("view engine", "ejs")

main()
  .then(()=> console.log("Connection successfull"))
  .catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//   from: "neha",
//   to: "priya",
//   msg: "Send Your number",
//   created_at: new Date()
// })
// chat1.save().then((res)=>{
//   console.log(res);
// })

app.get('/', (req, res) => {
res.send('root is working')
})

const port = 3000
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})