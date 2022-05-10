import "../styles/card.scss";
import { Button, Card } from "react-bootstrap";

export default function CardItem(props) {

  var image = null;

  if(props.image.length > 0) {
    image = props.image[0].thumbnail;
  }

  return (
    <Card className="cardMain">
      <Card.Img variant="top" src={image}  />
      <Card.Body className="mx-auto">
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className="">{props.price}đ</Card.Text>
      </Card.Body>
    </Card>
  );
}
