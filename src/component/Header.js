import "../styles/header.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import { Dropdown } from "react-bootstrap";
import { headerItem } from "../data/header";

export default function Header() {
  console.log(headerItem);
  return (
    <div className="header">
      <div className="item">
        <ul>
          {headerItem.map((item) => (
            <li>
              <a href="#">{item.name}</a>
            </li>
          ))}
          <li>
            <a href="#" className="text-danger">
              Outlet
            </a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img
          className="imageLogo"
          src="https://cdn.shopify.com/s/files/1/1241/4530/files/logo_home_360x.png?v=1582201056"
        />
      </div>
      <div className="info">
        <div className="infoItem">
          <div>
            <BiSearchAlt2 size={27} />
            <span className="searchTitle">Search</span>
          </div>
        </div>
        <div className="infoItem">
          <BsFillPersonFill size={27} color={"royalblue"} />
        </div>
        <div className="infoItem">
          <FiShoppingCart size={27} />
        </div>
        <div className="dropDown infoItem">
          <TiDocumentText size={27}/>
          <div className="dropDownItem">
            {headerItem.map((item) => (
              <div className = "itemDrop">
                <a href="#">{item.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
