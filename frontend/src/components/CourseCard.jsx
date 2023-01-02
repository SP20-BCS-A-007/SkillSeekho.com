import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {HourglassBottom} from 'react-bootstrap-icons';

const CourseCard = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  const loadData = () => {
    axios
      .get("http://localhost:2000/api/courses")
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(loadData, []);

  return (
    <>
      <h2 style={{color: "#FFC200", textAlign: "center"}}>{error}</h2>
      <Container>
        <Row>
          {courses.map((course) => (
            <Col className="col-4" key={course._id}>
              <Card className="mb-3">
                <Card.Img style={{height: "14rem"}} variant="top" src={course.img_url} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text className="mb-1">{course.description}</Card.Text>
                  <p style={{fontWeight: "bold", color: '#69757D'}}><HourglassBottom style={{marginBottom: "2px"}} color="#FFC200" size={20}/>{course.time}</p>
                <div style={{textAlign: "right"}} >
                <p style={{fontSize: '1.3rem', fontFamily: "cursive", }}><span style={{fontFamily: "sans-serif", fontWeight: 'bold'}}>Price: </span>{course.price} Rs</p>
                <Button className="text-white" variant="warning">See More Details</Button>
                </div>
                </Card.Body>
               
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CourseCard;
