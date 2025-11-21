const mongoose = require('mongoose')
const Chat = require("./models/chat")

main()
  .then(()=> console.log("Connection successfull"))
  .catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
  {
    from: "Neha",
    to: "Priya",
    msg: "Send your number",
    created_at: new Date()
  },
  {
    from: "Priya",
    to: "Neha",
    msg: "Okay, sending",
    created_at: new Date()
  },
  {
    from: "Aman",
    to: "Rohit",
    msg: "Bro, are you coming today?",
    created_at: new Date()
  },
  {
    from: "Rohit",
    to: "Aman",
    msg: "Yes, almost reached",
    created_at: new Date()
  },
  {
    from: "Simran",
    to: "Karan",
    msg: "Did you finish the assignment?",
    created_at: new Date()
  },
  {
    from: "Karan",
    to: "Simran",
    msg: "Not yet, working on it",
    created_at: new Date()
  },
  {
    from: "Meera",
    to: "Sonam",
    msg: "Happy Birthday 🎉",
    created_at: new Date()
  },
  {
    from: "Sonam",
    to: "Meera",
    msg: "Thank you so much ❤️",
    created_at: new Date()
  },
  {
    from: "Arjun",
    to: "Kabir",
    msg: "Send the PDF",
    created_at: new Date()
  },
  {
    from: "Kabir",
    to: "Arjun",
    msg: "Sent",
    created_at: new Date()
  },
  {
    from: "Riya",
    to: "Sanya",
    msg: "Call me when free",
    created_at: new Date()
  },
  {
    from: "Sanya",
    to: "Riya",
    msg: "Sure",
    created_at: new Date()
  },
  {
    from: "Mohit",
    to: "Divya",
    msg: "Check Instagram",
    created_at: new Date()
  }
];

Chat.insertMany(allChats);