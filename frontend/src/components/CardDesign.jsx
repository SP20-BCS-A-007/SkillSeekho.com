import { React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardDesign = (props) => {
  return (
    <Card>
      <Card.Img style={{width: "18rem"}} variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Button variant="warning">See More</Button>
      </Card>
  );
};

export default CardDesign;
