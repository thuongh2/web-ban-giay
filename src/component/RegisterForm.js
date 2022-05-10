import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Register } from "../redux/User/user-actions";
import "../styles/registerForm.scss";

function RegisterForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  console.log(user)

  const dispatch = useDispatch();

  function handleChange(evt) {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  }

  const handelSubmit = async (e) => {
    e.preventDefault();

    let reg = await dispatch(Register(user));

    await console.log(reg);

  };

  return (
    <div className="loginForm mt-2">
      <div>
        <h2>Create Account</h2>
      </div>
      <div>
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="formInput mb-5" variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterForm;
