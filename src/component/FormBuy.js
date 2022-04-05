import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/FormBuy.scss";
import { useSelector } from "react-redux";
import axios from "axios";

export default function FormBuy() {
  const cart = useSelector((state) => state.shop.cart);
  const [orderId, setOrdersId] = useState("");
  const [orderDetails, setOrderDetails] = useState({
    orders: { id: "" },
    product: { code: "" },
    quantity: "",
    price: "",
    amount: "",
  });

  const [orders, setOrders] = useState({
    id: 1,
    orderNum: 30,
    amount: 0,
    customerName: "",
    customerAddress: "",
    customerEmail: "",
    customerPhone: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setOrders({
      ...orders,
      [evt.target.name]: value,
    });
    console.log(orders);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await setOrders({ ...orders, amount: cart.length });

    await axios.post("http://localhost:8080/save/order", orders).then(
      (response) => {
        setOrdersId(response.data.id);
      },
      (error) => {
        console.log(error);
      },
      []
    );
    console.log(orderId)

    await cart.map((cart) => {
      setOrderDetails({
        orders: { id: orderId },
        product: { code: cart.code },
        quantity: cart.qty,
        price: cart.price,
        amount: cart.price * cart.qty,
      });

      const postOrders = async () => {
        await axios.post("http://localhost:8080/save/addtocard", orderDetails).then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          },
          []
        );
      };

      postOrders()
    });
  };
  console.log(orderDetails);

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
              value={orders.customerName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              name="customerPhone"
              value={orders.customerPhone}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="customerEmail"
            value={orders.customerEmail}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Đại chỉ</Form.Label>
          <Form.Control
            as="textarea"
            name="customerAddress"
            value={orders.customerAddress}
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
