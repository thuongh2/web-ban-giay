import "../styles/card.scss";
import { Button, Card } from "react-bootstrap";

export default function CardItem() {
    const imageDung = "https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.6435-9/132735307_1043451336160318_1578919601546269636_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=swZnCdrtqBcAX8I7s1R&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT8w7worunnQMLdNDdPpyWeo8FBgWmITKaNONot199JlzA&oe=62583DE0"
  return (
    <div>
      <Card style={{ width: "18rem" }} className="cardMain">
        <Card.Img className="h-100" variant="top" src={imageDung} />
        <Card.Body className="">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>150.000đ</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
