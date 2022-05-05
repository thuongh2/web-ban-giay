import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="login">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
