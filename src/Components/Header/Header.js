//header component.
//header will contain 2 more components
//1-> bannner
//2->navbar
import React from 'react';
import Banner from './Banner/Banner';
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <Banner></Banner>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;