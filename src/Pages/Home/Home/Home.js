import React from 'react';
import Bannar from '../Bannar/Bannar';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;