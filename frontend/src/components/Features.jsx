import Card from 'react-bootstrap/Card';

function Features() {
  return (
    <Card bg='secondary' style={{ width: '20rem', height: '12rem' }}>
      <Card.Body>
        
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Features;
