const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// Required Variable Objects
const items=["Item 1","Item 2","Item 3"];

// Home Page Starts

app.get("/", (req,res)=> {
    const day=date.getDate();
    res.render("todo", {kindofDay: day, newlistItems:items});
});

app.post("/", (req,res)=> {

    const item=req.body.newItem;
    items.push(item);
    console.log(item);
    res.redirect("/");
});

// Home Page Ends


app.listen(3000, ()=> {
    console.log("Server is running on port 3000.");
})