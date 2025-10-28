// const express = require("express");
// const path = require("path");
// const { v4 : uuidv4 } = require("uuid");
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import methodOverride from "method-override";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

let posts=[
    {
        id:uuidv4(),
        username:"kaur_tejwant",
        content:"I love coding :)"
    },
    {
        id:uuidv4(),
        username:"watermelon",
        content:"I am Good :)"
    },
    {
        id:uuidv4(),
        username:"sahib_noor",
        content:"I m Genious :)"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs", { posts });
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({id, username, content });
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let { id } = req.params;
    // console.log(id);
    let post = posts.find((p)=> id===p.id);
    if (!post) {
        return res.status(404).send("Post not found view content");
    }
    res.render("show.ejs", { post });
})

app.get("/posts/:id/edit",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p)=> id===p.id);
    res.render("edit.ejs",{ post });
})

app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id===p.id);
    if (!post) {
        return res.status(404).send("Post not found in patch");
    }
    // console.log(newContent);
    post.content = newContent;
    // res.render("show.ejs", { post });
    res.redirect("/posts");
});

app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    // res.send("delete success");
    posts = posts.filter((p)=> id!=p.id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});