/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import profile from "../../../images/Untitled-1.jpg";


class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
		
		//sidebar icon Heart blast
		var handleheartBlast = document.querySelector('.heart');
		function heartBlast() {
			return handleheartBlast.classList.toggle("heart-blast");
		}
		handleheartBlast.addEventListener('click', heartBlast);
	
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    
    /// Active menu
    let dashBoard = [
        "",
        "dashboard-light",
		  "my-wallets",
		  "transactions",
		  "coin-details",
		  "portofolio",
		  "market-capital",
      ],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
      email = ["email-compose", "email-inbox", "email-read"],
      shop = [
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "ecom-product-detail",
      ],
      charts = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
        //"post",
        
      ],
        redux = [
            "todo",
            "form-redux",
            "form-redux-wizard", 
        ],
      widget = ["widget-basic"],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      table = [
        "table-bootstrap-basic", 
        "table-datatable-basic",
        "table-sorting",
        "table-filtering",
      ],
      pages = [
        "page-register",
        "page-login",
        "page-lock-screen",
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ],
      error = [
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
			<div className="main-profile">
				<div className="image-bx">
                  <Link to="/app-profile"><img src={profile} alt="" /></Link>
				</div>
				<h5 className="mb-0 fs-20 text-black "><span className="font-w400">Hello,</span> Nir</h5>
				<p className="mb-0 fs-14 font-w400">nirjacob@mail.com</p>
            </div>
          <MM className="metismenu" id="menu">
			<li className="nav-label first">Main Menu</li>
            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
				<Link className="has-arrow ai-icon" to="#" >
					<i className="flaticon-144-layout"></i>
					<span className="nav-text">Dashboard</span>
				</Link>
				<ul >
                    <li><Link className={`${path === "portofolio" ? "mm-active" : ""}`} to="/portofolio">Portofolio</Link></li>
                    <li><Link className={`${path === "app-profile" ? "mm-active" : ""}`}  to="/app-profile">Profile</Link></li>
                    <li><Link className={`${path === "questionnaire" ? "mm-active" : ""}`}  to="/questionnaire">Questionnaire</Link></li>
                  {/*<li><Link className={`${path === "" ? "mm-active" : ""}`} to="/">Dashboard(WIP)</Link></li>*/}
                  {/*<li><Link className={`${path === "wallet" ? "mm-active" : ""}`} to="/my-wallets">Wallet(WIP)</Link></li>*/}
                  {/*<li><Link className={`${path === "market-capital" ? "mm-active" : ""}`} to="/market-capital">Market Capital(WIP)</Link></li>*/}
                  {/*  <li><Link className={`${path === "transactions" ? "mm-active" : ""}`} to="/transactions"> Transactions(WIP)</Link></li>*/}
                  {/*  <li><Link className={`${path === "coin-details" ? "mm-active" : ""}`} to="/coin-details"> Coin Details(WIP)</Link> </li>*/}
                </ul>
            </li>
            <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            </li>
          </MM>
			<div className="copyright">
				<p className="fs-12"><span className="heart"></span></p>
              <p><strong>DeCrypto</strong> © 2022 All Rights Reserved</p>
			</div>
			</PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
