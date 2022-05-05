import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/FormBuy.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeAllFromCart } from "../redux/Shopping/shopping-actions";

export default function FormBuy() {
  const cart = useSelector((state) => state.shop.cart);
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();
  var error = "";
  const [orders, setOrders] = useState({
    id: 1,
    orderNum: Math.floor(Math.random() * 100),
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
  }

  const handleOrder = async (orderId) => {
    await cart.map((c) => {
      var orderDetails = new FormData();
      orderDetails.append("orders", orderId);
      orderDetails.append("product", c.code);
      orderDetails.append("quantity", c.qty);
      orderDetails.append("price", c.price);
      orderDetails.append("amount", c.price * c.qty);

      const postOrders = async () => {
        await axios
          .post("http://localhost:8080/save/addtocard", orderDetails)
          .then(
            (response) => {},
            (error) => {
              setIsReady(true);
              console.log(error);
            },
            []
          );
      };
      postOrders();
    });
  };

  const handelSucces = async () => {
    dispatch(removeAllFromCart());
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await setOrders({ ...orders, amount: cart.length });

    await axios.post("http://localhost:8080/save/order", orders).then(
      (response) => {
        handleOrder(response.data.id);
      },
      (error) => {
        setIsReady(true);
        console.log(error);
      },
      []
    );
    console.log(isReady);
    if (isReady == false) {
      handelSucces();
    } else {
      alert("Đặt hàng không thành công");
    }
  };

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
