import React from "react";
import FirstSection from "./FirstSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseCard from "./CourseCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const Courses = () => {
  return (
    <>
      <FirstSection
        title={"Courses"}
        description={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi illum vero neque numquam quas! Porro cum nobis, rem fugiat sapiente non ducimus dolor, quisquam consectetur dicta tenetur totam accusamus fuga."
        }
        btntitle={"Let's Get Sarted"}
        link={"/courses"}
      />
      <Container id="courses" className="mt-5 mb-5">
        <div className="text-center">
          <h2 style={{ color: "#FFC200", fontSize: "3rem" }}>
            All Courses We Offer
          </h2>
          <h4>What You Will Learn</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi illum
            vero neque numquam quas! Porro cum nobis, rem fugiat sapiente non
            ducimus dolor, quisquam consectetur dicta tenetur totam accusamus
            fuga.
          </p>
        </div>
        <Row>
          <Col>
            <CourseCard />
          </Col>
        </Row>
      </Container>

      <div id="courses" className="mt-5 mb-0 bg-secondary p-30">
        <div className="text-center p-5">
          <h1 style={{ color: "#FFC200", fontSize: "3.5rem" }}>
            Join our Community
          </h1>
          <p className="text-white">
            Enter your email address to register to our newsletter subscription
            delivered on regular basis!
          </p>
          <Form >
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
              <Form.Control style={{width: "30%", marginLeft:'35%'}} type="email" placeholder="Enter your email" />
              <Button className="mt-3 text-white" variant="warning">Submit</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Courses;
