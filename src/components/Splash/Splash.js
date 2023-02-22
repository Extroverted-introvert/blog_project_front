import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../Loader/LoaderLogo.js";

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

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.text }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 2500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={theme} />
    );
  }
}

export default Splash;
