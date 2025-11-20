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

const user2 = new User({
  name: "eve",
  email: "eve123@gmail.com",
  age: 48,
})

user2
  .save()
  .then((res)=> {console.log(res);})
  .catch((err)=> {console.log(err)})