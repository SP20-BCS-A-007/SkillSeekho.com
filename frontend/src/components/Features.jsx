import Card from "react-bootstrap/Card";

const Features = (props) => {
  return (
    <Card
      className="text-center shadow border-0"
      bg="white"
      style={{ width: "auto", height: "auto" }}
    >
      <Card.Body>
        <div className="mb-3">{props.icon}</div>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Features;
