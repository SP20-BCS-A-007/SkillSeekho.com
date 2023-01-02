import React from "react";
import Features from "./Features";
import * as Icon from "react-bootstrap-icons";
import Jumbotron from "./Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseCard from "./CourseCard";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <Container className="mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="text-secondary" style={{ fontSize: "3.5rem"}}>About Us</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi illum vero neque numquam quas! Porro cum nobis, rem fugiat sapiente non ducimus dolor, quisquam consectetur dicta tenetur totam accusamus fuga.</p>
        </div>
        <Row>
          <Col>
            <Features
              icon={<Icon.BookmarkCheckFill  color="#FFC200" size={30} />}
              title="Experience"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit repudiandae cum enim, amet consectetur odio corporis expedita harum suscipit eos dolorem nobis earum repellat, ratione adipisci, laboriosam dicta voluptatibus."
            />
          </Col>
          <Col>
            <Features
              icon={<Icon.BookFill color="#FFC200" size={30}/>}
              title="Premium Material"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit repudiandae cum enim, amet consectetur odio corporis expedita harum suscipit eos dolorem nobis earum repellat, ratione adipisci, laboriosam dicta voluptatibus."
            />
          </Col>
          <Col>
            <Features
              icon={<Icon.ChatDotsFill color="#FFC200" size={30}/>}
              title="Dedicated Support"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugit repudiandae cum enim, amet consectetur odio corporis expedita harum suscipit eos dolorem nobis earum repellat, ratione adipisci, laboriosam dicta voluptatibus."
            />
          </Col>
        </Row>
      </Container>
      <Container id="courses" className="mt-5 mb-5">
        <div className="text-center">
        <h1 style={{color: "#5A636A", fontSize: "3.5rem"}}>Our Courses</h1>
        <h5 className="text-warning">What You Will Learn</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi illum vero neque numquam quas! Porro cum nobis, rem fugiat sapiente non ducimus dolor, quisquam consectetur dicta tenetur totam accusamus fuga.</p>
        </div>
        <Row>
            <Col><CourseCard/></Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Home;
