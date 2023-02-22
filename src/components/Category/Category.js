import React, { useState, useEffect } from 'react';
import { Fade } from "react-reveal";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './../Navbar/Navbar.js';
import Footer from './../footer/Footer.js';
import TopButton from '../topButton/TopButton.js';

const Category = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const [categoryfeaturedBlog, setCategoryFeaturedBlog] = useState([]);

    useEffect(() => {
        const category = props.match.params.id;
        setCurrentCategory(capitalizeFirstLetter(category));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`, { category }, config);
                setBlogs(res.data);
                const cat_res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${ category }/featured`);
                setCategoryFeaturedBlog(cat_res.data[0]);
                console.log(cat_res.data)
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width='200' height='250' src={blogPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className='row mb-2'>
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }
    
        return result;
    };

    return (
        <Fade top duration={1000} distance="20px">
        < Navbar />
        <div className='w-container mt-3 ml-5 mr-5'>
            <h3 className='display-4 text-center'>{currentCategory} </h3>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-around">
                    <Link className="p-2 text-muted" to='/category/world'>World</Link>
                    <Link className="p-2 text-muted" to='/category/environment'>Environment</Link>
                    <Link className="p-2 text-muted" to='/category/technology'>Technology</Link>
                    <Link className="p-2 text-muted" to='/category/design'>Design</Link>
                    <Link className="p-2 text-muted" to='/category/culture'>Culture</Link>
                    <Link className="p-2 text-muted" to='/category/business'>Business</Link>
                    <Link className="p-2 text-muted" to='/category/politics'>Politics</Link>
                    <Link className="p-2 text-muted" to='/category/opinion'>Opinion</Link>
                    <Link className="p-2 text-muted" to='/category/science'>Science</Link>
                    <Link className="p-2 text-muted" to='/category/health'>Health</Link>
                    <Link className="p-2 text-muted" to='/category/style'>Style</Link>
                    <Link className="p-2 text-muted" to='/category/travel'>Travel</Link>
                </nav>
            </div>

            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{categoryfeaturedBlog.title}</h1>
                    <p className="lead my-3">{categoryfeaturedBlog.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${categoryfeaturedBlog.slug}`} className="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
            </div>

            {getCategoryBlogs()}
        </div>
        <Footer />
        <TopButton />
        </Fade>
    );
};

export default Category;
