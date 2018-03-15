import React, { Component } from 'react';
import { Icon, SideNav, SideNavItem, Footer, Navbar, Button } from 'react-materialize'
import { Link, } from "react-router-dom"


//This component will allow the user to navigate the site.
//a sidebar visible on desktop and hidden on hamburger menu on mobile. 
// Footer is displayed inside the navbar and holds contact information. 

class Nav extends Component {

    render() {
        return (
            <div>
                <Navbar >
                    <SideNav
                        trigger={<SideNavItem><Icon>menu</Icon></SideNavItem>}
                        options={{ closeOnClick: true, draggable: true }}>
                        <SideNavItem><Link to="/">Home</Link></SideNavItem>
                        <SideNavItem><Link to="/products">Shop</Link></SideNavItem>
                        <SideNavItem><Link to="/products/baby" onClick={() =>{this.props.searchCategory("baby")}}>
                            Baby
                        </Link>
                        </SideNavItem>
                        <SideNavItem><Link to="/products/beauty" onClick={() => { this.props.searchCategory("beauty") }}>Beauty</Link></SideNavItem>
                        <SideNavItem><Link to="/products/health">Health</Link></SideNavItem>
                        <Footer>
                            <h5 className="white-text">Contact</h5>
                            <ul>
                                <li>abc</li>
                                <li>123</li>
                                <li>abc</li>
                            </ul>
                        </Footer>
                    </SideNav>
                    <Icon>shopping_cart</Icon>
                </Navbar>

            </div>
        )
    }

}






export default Nav;