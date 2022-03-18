import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/loginForm.scss";

function LoginForm() {
  return (
    <div className="loginForm mt-2">
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button className="formInput" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className = "mb-4 mt-4">
        <a>Forgot your password?</a>
      </div>
      <div className = "mb-3">
        <Link className=" text-dark text-decoration-none" to="/register">Create account</Link>
      </div>
    </div>
  );
}

export default LoginForm;
