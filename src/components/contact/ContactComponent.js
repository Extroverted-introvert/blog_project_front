import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { Link } from 'react-router-dom';

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

class Contact extends Component {
  render() {
    return (
      <Fade bottom duration={1000} distance="40px">
      <div className="contact-main">
        <Navbar />
        <div className="basic-contact">
          <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  Contact Me
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Link className="btn btn-primary btn-lg" to={{ pathname: "mailto:parth.tripathi17@gmail.com" }} target="_blank" role="button">Drop a mail</Link>
                </div>
              </div>
            </div>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  Portfolio
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Checkout my Portfolio to check my Skills and Accomplishments
                </p>
                <div className="blogsite-btn-div">
                  <Link className="btn btn-primary btn-lg" to={{ pathname: "https://parthtripathi.netlify.app" }} target="_blank" role="button">Portfolio Website</Link>
                </div>
              </div>
              <div className="blog-heading-img-div">
                <img
                  src={require(`../../assets/images/portfolio_img.jpg`)}
                  alt="Profile Pic"
                />
              </div>
            </div>
            <div className="address-heading-div">
              <div className="address-heading-img-div">
                <img
                  src={require(`../../assets/images/profile_pic.jpg`)}
                  alt="Profile Pic"
                />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  Address
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Indore, Madhya Pradesh - 452009
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  Phone Number
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  +91 9981915424
                </p>
                <div className="address-btn-div">
                  <Link className="btn btn-primary btn-lg" to={{ pathname: "https://goo.gl/maps/EhF6g51Z3UTmJ8Xe8" }} target="_blank" role="button">Visit on Google Maps</Link>
                </div>
              </div>
            </div>
          </div>
        <br></br>
        <br></br>
        <br></br>
        <Footer  />
        <TopButton />
      </div>
    </Fade>    
    );
  }
}

export default Contact;
