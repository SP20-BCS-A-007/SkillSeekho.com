const express = require("express")
const mongoose = require("mongoose")
const Course = require("./models/coursemodel")
const courseApiRouter = require("./routes/api/course")
var customLogger = require("./middlewares/logger");
const app = express();
app.use(customLogger)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 2000;
mongoose.set('strictQuery', true);
app.use("/api/courses",courseApiRouter)

app.get("/", (req, res)=>{
    res.send("Hello")
})

mongoose.connect("mongodb://localhost/dbskillseekho").then(()=>{
    console.log("connected to mongodb:localhost//dbskillseekhore");
}).catch(()=>{
    console.log("unable to connect");
});

app.listen(port, ()=>{
      console.log(`Server started on port ${port} and your link is http://localhost:${port}`)
})