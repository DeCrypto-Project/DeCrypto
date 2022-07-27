import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import logo from '../../../images/robot512.png'

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext
  );
  const styleLogo ={width: "20%"};
  const lightStyleTextLogo ={margin: "10px"};
  const darkStyleTextLogo ={margin: "10px"};

    return (
    <div className="nav-header">
      <Link to="/" className="brand-logo">
        {
          <Fragment>
              <img src={logo} alt="" style={styleLogo}/>
                <h3 style={background.value === "dark" || navigationHader !== "color_1" ? lightStyleTextLogo:darkStyleTextLogo}>Decrypto</h3>
          </Fragment>
        }
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          openMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
