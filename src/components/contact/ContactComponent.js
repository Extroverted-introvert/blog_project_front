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
                  <a className="btn btn-primary btn-lg" href="mailto:parth.tripathi17@gmail.com" target="_blank" role="button">Drop a mail</a>
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
                  <a className="btn btn-primary btn-lg" href="https://parthtripathi.netlify.app" target="_blank" role="button">Portfolio Website</a>
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
                  Inarimae, Tsukuba, Ibaraki, Japan - 305-0061
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
                  +91-9981915424, +81-7084508970
                </p>
                <div className="address-btn-div">
                  <a className="btn btn-primary btn-lg" href="https://www.google.com/maps/place/Inarimae,+Tsukuba,+Ibaraki+305-0061/@36.0497515,140.1253759,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x60227334a0384159:0x33af88308936c296!2z44CSMzA1LTAwNjEgSWJhcmFraSwgVHN1a3ViYSwgSW5hcmltYWUsIDE34oiSNiDmsrzlsLvjg4_jgqTjg4QgQQ!3b1!8m2!3d36.0490802!4d140.1265892!16s%2Fg%2F11d_46dny1!3m5!1s0x6022733346a51e95:0xfd368ea7d072c2d2!8m2!3d36.0495565!4d140.1279447!16s%2Fg%2F121tncz7" target="_blank" role="button">Visit on Google Maps</a>
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
