import React from 'react';
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';

const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };
  
  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };

  const theme = {
    body: "linear-gradient(to right, #EDF9FE, #FEFAF9)",
    text: "#001C55",
    button_color: "#FEFAF9",
    highlight: "#A6E1FA",
    dark: "#00072D",
    secondaryText: "#7F8DAA",
    imageHighlight: "#0E6BA8",
    compImgHighlight: "#E6E6E6",
    jacketColor: "#0A2472",
    headerColor: "#0E6BA877",
  };
const navbar = () => (
    // <Fade top duration={1000} distance="20px">
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <Link className="navbar-brand" to='/'>Blog Lyfe</Link>
    //     <button 
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //     >
    //         <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav">
    //             <li className="nav-item active">
    //                 <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
    //             </li>
    //             <li className="nav-item">
    //                 <NavLink className="nav-link" exact to='/blog'>Blog</NavLink>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
    // </Fade>
    <div>
          <header className="header">
            <NavLink to="/" tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                Parth Tripathi
              </span>
              <span style={{ color: theme.text }}> &gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
);

export default navbar;
