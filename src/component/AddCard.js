import "../styles/addCard.scss";
import { Button, Card } from "react-bootstrap";

export default function AddCard(props) {
  return (
    <div className="inputSize">
      <form>
        <div>
          <label for="cars">Size:</label>
        </div>
        <div className="select">
          <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="btnSubmit">
          <input type="submit" class="btn btn-primary" value="ADD" />
        </div>
      </form>
    </div>
  );
}
