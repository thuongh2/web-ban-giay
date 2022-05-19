import "../styles/card.scss";
import { Button, Card } from "react-bootstrap";

export default function CardItem(props) {

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var image = `https://picsum.photos/300/${getRndInteger(300, 400)}`;


  if(props.image) {
    image = props.image[0] !== undefined ? props.image[0].thumbnail : image;
  }

  return (
    <Card className="cardMain">
      <Card.Img variant="top" className={`${props.type}`} src={image}  />
      <Card.Body className="mx-auto">
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className="">{props.price}đ</Card.Text>
      </Card.Body>
    </Card>
  );
}
