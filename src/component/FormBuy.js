import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/FormBuy.scss";

export default function FormBuy() {
  const [infomation, setInfomation] = useState({
    id: uuidv4(),
    orderDate: new Date().toISOString().slice(0, 19).replace("T", " "),
    orderNum: "",
    amount: "",
    customerName: "",
    customerAddress: "",
    customerEmail: "",
    customerPhone: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setInfomation({
      ...infomation,
      [evt.target.name]: value,
    });
    console.log(infomation);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div className="formBuy">
      <h4>Thông tin khách hàng</h4>
      <Form onSubmit={handleSubmit}>
        <div className="formInfo">
          <Form.Group className="mb-3 customerName" controlId="formBasicEmail">
            <Form.Label>Tên khách hàng</Form.Label>
            <Form.Control
              type="text"
              name="customerName"
              value={infomation.customerName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              name="customerPhone"
              value={infomation.customerPhone}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="customerEmail"
            value={infomation.customerEmail}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Đại chỉ</Form.Label>
          <Form.Control
            as="textarea"
            name="customerAddress"
            value={infomation.customerAddress}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" className="w-100" type="submit">
          CONFIRM
        </Button>
      </Form>
    </div>
  );
}
