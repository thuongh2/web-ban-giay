import { Form, Button } from "react-bootstrap";
import "../styles/registerForm.scss";

function RegisterForm() {
  return (
    <div className="loginForm mt-2">
      <div>
        <h2>Create Account</h2>
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
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
