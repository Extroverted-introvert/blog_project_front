import React from 'react';
import { Fade } from "react-reveal";
import { Link } from 'react-router-dom';
import Navbar from '.././Navbar/Navbar.js';
import Footer from '../footer/Footer.js';
import TopButton from '../topButton/TopButton.js';
import HomeImg from './HomeImg.js';
import './Home.css';

const Home = () => (
    <Fade top duration={1000} distance="20px">
    < Navbar />
    <div className='w-container'>
        <div className="jumbotron mt-5">
            <div className="home-image-div">
                < HomeImg />
            </div>
            <div className="home-text-div">
                <h1 className="display-4">Welcome to Technically Correct!</h1>
                <p className="lead">An awesome blog were I spread info/rant about various topics.</p>
                <hr className="my-4" />
                <p>Check it out for my insights on various technical topics, fun tutorials, and other miscellanous stuff</p>
            <a className="btn btn-primary btn-lg" target="_blank" role="button" href={'https://parthtripathi.netlify.app'}>Check out my Portfolio</a>
            </div>
        </div>
    </div>
    <Footer />
    <TopButton />
    </Fade>
);

export default Home;
