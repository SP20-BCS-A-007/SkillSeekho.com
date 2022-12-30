import {React, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../images/image1.jpg'
import axios from "axios"


const CourseCard = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState("");

    const loadData = ()=>{
        axios.get("http://localhost:2000/api/courses")
        .then((res)=>{
           setCourses(res.data);
           console.log(res.data)
        })
        .catch((err)=>{
            setError(err.message);
        })
    }

    useEffect(loadData,[])

    return (
        <>
        <h2>{error}</h2>
        {courses.map((course)=>(
        <Card style={{ width: '18rem' }} key={course.id} >
        <Card.Img variant="top" src={logo}/>
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>{course.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      ))}
       
        </>
    );
}

export default CourseCard;