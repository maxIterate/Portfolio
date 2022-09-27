import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainBottom from '../components/MainBottom';
import MainTop from '../components/MainTop';
import '../styles/indexBody.css'

const Index = () => {
    return (
        <div className='indexBody'>
            <Header />
            <MainTop />
            <MainBottom />
            <Footer />
        </div>
    );
}

export default Index;
