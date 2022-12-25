const express = require("express");
const admin = require("../../middlewares/admin");
const auth = require("../../middlewares/auth");
const Course = require("../../models/coursemodel")
const Router = express.Router();

Router.get("/", async(req, res)=>{
   let courses = await Course.find();
   if(!courses){
    return res.send("The course list is empty")
   }
   res.send(courses)
})

Router.get("/:id", async (req, res) => {
    let course = await Course.findById(req.params.id);
    if(!course){
       return res.send({
            success: false,
            message: "Course donot found"
        })
    }
    res.send(course);
});

Router.post("/", async(req, res)=>{
    let course = new Course(req.body)
    await course.save();
    res.send(course)
})

Router.delete("/:id", auth, admin, async (req, res) => {
    let course = await Course.findById(req.params.id);
    if(!course){
       return res.send({
            success: false,
            message: "No course found"
        })
    }
    await course.delete();
    res.send({
        message: "This Course is successfully deleted",
        course
    });
});

Router.put("/:id", auth, admin, async (req, res) => {
    let course = await Course.findById(req.params.id);

    if(!course){
       return res.send({
            success: false,
            message: "Course donot found"
        })
    }
    // course.title = req.body.title;
    // course.description = req.body.description;
    // course.price = req.body.price;
    // course.time = req.body.time;
    // course.category = req.body.category;
    course = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true,
    runValidators: true,
    useFindAndModify: false
})
    
    await course.save();
    res.send(course);
});

module.exports = Router;