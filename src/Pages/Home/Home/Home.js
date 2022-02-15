import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';
// import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Products />
            <Review />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;