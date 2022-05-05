import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import RegisterForm from "./RegisterForm";

function Register() {
  return (
    <div className="login">
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default Register;