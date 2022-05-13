import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/FormBuy.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { removeAllFromCart } from "../redux/Shopping/shoppingActions";

export default function FormBuy() {
  const carts = useSelector((state) => state.shop.cart);
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState({
    customerName: "",
    customerAddress: "",
    customerEmail: "",
    customerPhone: "",
  });

  const [orderDetails, setOrderDetails] = useState({
    orderId: "",
    productId: "",
    size: "",
    quantity: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setOrders({
      ...orders,
      [evt.target.name]: value,
    });
  }

  const handleOrder = async (orderId) => {

    const postOrders = async (orderDetails) => {
      await axios
        .post("http://localhost:8080/api/order/detail", orderDetails)
        .then(
          (response) => {
            setIsReady(false)
          },
          (error) => {
            setIsReady(true);
            console.log(error);
          },
          []
        );
    };

    carts.map(async (cart) => {
      await setOrderDetails({
        orderId: orderId,
        productId: cart.id,
        size: cart.sizes,
        quantity: cart.qty,
      });

      //check
      await console.log(orderDetails);

      await postOrders(orderDetails);
    });

    // if (isReady == false) {
    //   handelSucces();
    // } else {
    //   alert("Đặt hàng không thành công");
    // }
  };

  const handelSucces = async () => {
    dispatch(removeAllFromCart());
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    await axios.post("http://localhost:8080/api/save/order", orders).then(
      (response) => {
        handleOrder(response.data.id);
      },
      (error) => {
        setIsReady(true);
        console.log(error);
      },
      []
    );


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
