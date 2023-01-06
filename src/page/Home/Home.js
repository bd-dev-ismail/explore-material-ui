import React from 'react';
import Brand from './Brand';
import Branding from './Branding';
import OurWorks from './OurWorks';
import Services from './Services';

const Home = () => {
    return (
        <div>
         <Branding/>
         <Brand/>
         <Services/>
         <OurWorks/>
        </div>
    );
};

export default Home;