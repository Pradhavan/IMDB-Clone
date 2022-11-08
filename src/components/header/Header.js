import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
var logo  = require("./images.png")

function Header() {

const mystyle = {
    width: "11rem",
    height: "3.5rem",
    borderRadius: "10px"

};
return (
<div className="header">
<div className="headerLeft">
    <Link to="/">  <img  style={mystyle} classname="header__icon" src={ logo } alt="LOGO"/>  </Link>
    <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
    <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
    <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
</div>
</div>
)
}

export default Header
