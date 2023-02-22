import React from 'react';
import { Fade } from "react-reveal";
import Navbar from '.././Navbar/Navbar.js';
import Footer from '../footer/Footer.js';
import TopButton from '../topButton/TopButton.js';
import PhotoAlbum from "react-photo-album";

const photos = [
    {
        src: "https://wallpaperaccess.com/full/3437723.jpg",
        width: 500,
        height: 500
    },
    {
        src: "https://wallpaperaccess.com/full/86289.jpg",
        width: 100,
        height: 100
    },
    {
        src: "https://wallpaperaccess.com/full/3437723.jpg",
        width: 100,
        height: 500
    },
    {
        src: "https://wallpaperaccess.com/full/86289.jpg",
        width: 100,
        height: 500
    },
    {
        src: "https://wallpaperaccess.com/full/3437723.jpg",
        width: 500,
        height: 500
    },
    {
        src: "https://wallpaperaccess.com/full/3437723.jpg",
        width: 500,
        height: 500
    },
    {
        src: "https://wallpaperaccess.com/full/86289.jpg",
        width: 100,
        height: 100
    },
    {
        src: "https://wallpaperaccess.com/full/3437723.jpg",
        width: 100,
        height: 500
    },
    {
        src: "https://wallpaperaccess.com/full/86289.jpg",
        width: 100,
        height: 500
    },
    {
        src: "https://wallpaperaccess.com/full/86289.jpg",
        width: 100,
        height: 100
    },
    {
        src: "https://wallpaperaccess.com/full/3437723.jpg",
        width: 100,
        height: 500
    },
    {
        src: "https://wallpaperaccess.com/full/86289.jpg",
        width: 100,
        height: 500
    },
];

const Gallery = () => (
    <Fade top duration={1000} distance="20px">
    < Navbar />
    <PhotoAlbum layout="columns" photos={photos} />
    <Footer />
    <TopButton />
    </Fade>
);

export default Gallery;
