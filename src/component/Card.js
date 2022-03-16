import "../styles/card.scss";
import { Button, Card } from "react-bootstrap";

export default function CardItem() {
    const imageDung = "https://cdn.shopify.com/s/files/1/1241/4530/products/OasisOrange2939copy_360x.png?v=1624939862"
  return (
    <div>
      <Card className="cardMain" style={{ width: "18rem" }} >
        <Card.Img variant="top" src={imageDung} />
        <Card.Body className="mx-auto">
          <Card.Text>Card Title</Card.Text>
          <Card.Text className="">150đ</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
