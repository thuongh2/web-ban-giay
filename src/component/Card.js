import "../styles/card.scss";
import { Button, Card } from "react-bootstrap";

export default function CardItem(props) {
  const imageDung =
    "https://cdn.shopify.com/s/files/1/1241/4530/products/OasisOrange2939copy_360x.png?v=1624939862";
  return (
    <Card className="cardMain">
      <Card.Img variant="top" src={props.image} />
      <Card.Body className="mx-auto">
        <Card.Text>{props.name}</Card.Text>
        <Card.Text className="">{props.price}đ</Card.Text>
      </Card.Body>
    </Card>
  );
}
