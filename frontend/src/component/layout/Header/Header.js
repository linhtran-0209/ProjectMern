
import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColor:"#174786",
  burgerColorHover: "#fdcc0d",
  logo,
  logoWidth: "20vmax",
  navColor1: "#174786",
  logoHoverSize: "10px",
  logoHoverColor: "white",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#fdcc0d",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "white",
  searchIconColor: "white",
  cartIconColor: "white",
  profileIconColorHover: "#fdcc0d",
  searchIconColorHover: "#fdcc0d",
  cartIconColorHover: "#fdcc0d",
  cartIconMargin: "1vmax",
};
const Header = () => {
    return <ReactNavbar {...options} />;
  };
  
export default Header;