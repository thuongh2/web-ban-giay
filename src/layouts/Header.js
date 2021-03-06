import "../styles/header.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import { headerItem } from "../data/header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../redux/Shopping/shoppingActions";

function Header(props) {
  const count = useSelector((state) => state.shop.cart);
  const category = useSelector((state) => state.shop.category);

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getAllCategory());
  }, []);

  console.log(category);

  return (
    <div className="header">
      <div className="item">
        <ul>
          {category.map((item) => (
            <li>
              <Link className="linkDecoration" to={`/category/${item.name}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="logo">
        <Link to="/">
          {/* <img
            className="imageLogo"
            src="https://cdn.shopify.com/s/files/1/1241/4530/files/logo_home_360x.png?v=1582201056"
          /> */}
          <h3>THUONG</h3>
        </Link>
      </div>
      <div className="info">
        <div className="infoItem">
          <Link to="search" className="text-decoration-none">
            <div>
              <BiSearchAlt2 size={27} />
              <span className="searchTitle">Search</span>
            </div>
          </Link>
        </div>
        <div className="infoItem">
          <Link to="/login">
            <BsFillPersonFill size={27} color={"royalblue"} />
          </Link>
        </div>
        <div className="infoItem shopItem">
          <Link className="text-decoration-none" to="/cart">
            <FiShoppingCart size={27} />
            <div
              className={`countItem`}
              style={count.length > 0 ? { marginTop: "-25px" } : {}}
            >
              {count.length > 0 ? count.length : null}
            </div>
          </Link>
        </div>
        <div className="dropDown infoItem">
          <TiDocumentText size={27} />
          <div className="dropDownItem">
            {headerItem.map((item) => (
              <div className="itemDrop">
                <a href="#">{item.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
