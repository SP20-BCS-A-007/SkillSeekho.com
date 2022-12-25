const mongoose = require("mongoose")

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    time: String,
    category: String,
    image:{
        public_id: String,
        url: String
    },
    content:[
        {
            content_title: String,
            course_cover: [{
                title: String,
                description: String,
                video_url: String,
                video_description: String,
            }], 
        }   

    ],
    reviews:[
        {
            name: String,
            rating: Number,
            comment: String
        }
    ],
    createdAt:{
         type: Date,
         default: Date.now
    }
})

const course = mongoose.model("Course", courseSchema)
module.exports = course;