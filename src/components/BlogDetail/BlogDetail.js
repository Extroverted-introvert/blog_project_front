import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Fade } from "react-reveal";
import Navbar from './../Navbar/Navbar.js';
import Footer from './../footer/Footer.js';
import TopButton from '../topButton/TopButton.js';

const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });
  }

const getParsedDate = (timestamp) => {
    const dateFormat = new Date(timestamp);
  
    return (
    getMonthName(dateFormat.getMonth()+1)+
    " " +dateFormat.getDate() +
    ", "+dateFormat.getFullYear()
    );;
  }

const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const createBlog = () => {
        return {__html: blog.content}
    };

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    return (
        <Fade top duration={1000} distance="20px">
        < Navbar />
        <div className='w-container mt-3' 
        style={{ backgroundImage: `url("https://pixabay.com/get/g51e212c796934491ebadf69d97f01c77524690a81365707edc07de5fd1b5a32ef72411aae7b0e59225bf3f1ade2c012bc6c2ea500e7501fe822ff0210bb685247b13530ca9446cb641bd79f6594b6371_1920.jpg")` }}
        >
            <h1 className='display-4 text-center'>{blog.title}</h1>
            <h2 className='text-muted text-center'>Category: {capitalizeFirstLetter(blog.category)}</h2>
            <h4 className='text-center'>{getParsedDate(blog.date_created)}</h4>
            <div className='mt-5 mb-5 ml-5 mr-5' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className='lead mb-5 text-center'><Link to='/blog' className='font-weight-bold'>Back to Blogs</Link></p>
        </div>
        <Footer />
        <TopButton />
        </Fade>
    );
};

export default BlogDetail;
