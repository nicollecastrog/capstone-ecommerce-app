import React, { Component } from 'react';
import { Icon, SideNav, SideNavItem, Footer, Navbar } from 'react-materialize'

//This component will allow the user to navigate the site.
//a sidebar visible on desktop and hidden on hamburger menu on mobile. 
// Footer is displayed inside the navbar and holds contact information. 

class Nav extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <SideNav
                        trigger={<SideNavItem><Icon>menu</Icon></SideNavItem>}
                        options={{ closeOnClick: true }}>
                        <SideNavItem>First Link With Icon</SideNavItem>
                        <SideNavItem>Second Link</SideNavItem>
                        <SideNavItem>Third Link With Waves</SideNavItem>
                        <Footer>
                            <h5 className="white-text">Contact</h5>
                            <ul>
                                <li>abc</li>
                                <li>123</li>
                                <li>abc</li>
                            </ul>
                        </Footer>
                    </SideNav>
                </Navbar>

            </div>
        )
    }

}

export default Nav;