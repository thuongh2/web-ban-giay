import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../redux/User/user-actions";
import "../styles/loginForm.scss";

function LoginForm() {
  const [user, setUser] = useState({ username: "" , password: "" });

  const dispatch = useDispatch();

  function handleChange(evt) {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  }

  console.log(user)

  const handelSubmit = async(e)=>{
    e.preventDefault();
    dispatch(signUp(user))
  }

  return (
    <div className="loginForm mt-2">
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="formInput" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="mb-4 mt-4">
        <a>Forgot your password?</a>
      </div>
      <div className="mb-3">
        <Link className=" text-dark text-decoration-none" to="/register">
          Create account
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
