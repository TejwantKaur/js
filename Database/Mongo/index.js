const mongoose = require('mongoose');

main().
  then(()=>{
    console.log("Connection Successfull");
  })
  .catch((err) =>
    console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "Adam",
//   email: "adam123@gmail.com",
//   age: 24,
// })

// user1
//   .save()
//   .then((res)=> {console.log(res);})
//   .catch((err)=> {console.log(err)})

// const user2 = new User({
//   name: "eve",
//   email: "eve123@gmail.com",
//   age: 48,
// })

// user2
//   .save()
//   .then((res)=> {console.log(res);})
//   .catch((err)=> {console.log(err)})

// insert multiple
// User.insertMany([
//   {name: "peter", email: "peter@gmail.com", age: 50},
//   {name: "bruce", email: "bruce@gmail.com", age: 27},
//   {name: "tony", email: "tony@gmail.com", age: 18},
// ]).then((res)=> {console.log(res)})
//   .catch((err)=> {console.log(err)})


User.find({age: { $lt:30 }})
  .then((res)=> {console.log(res)})
  .catch((err)=> {console.log(err)})

// User.findById("691eb495bbc6d5838b274b15")
//   .then((res)=> {console.log(res)})
//   .catch((err)=> {console.log(err)})