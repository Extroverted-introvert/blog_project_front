import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home/Home.js';
import Blog from './components/Blog/Blog.js';
import BlogDetail from './components/BlogDetail/BlogDetail.js';
import Category from './components/Category/Category.js';
import Splash from './components/Splash/Splash.js';
import Contact from './components/contact/ContactComponent.js'
import Gallery from './components/Gallery/Gallery';

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Splash} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/category/:id' component={Category} />
                <Route exact path='/blog/:id' component={BlogDetail} />
                <Route exact path='/contact' component={Contact} />
                {/* <Route exact path='/gallery' component={Gallery} /> */}
            </Switch>
        </Layout>
    </Router>
);

export default App;
