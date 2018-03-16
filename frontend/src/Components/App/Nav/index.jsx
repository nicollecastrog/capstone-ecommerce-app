import React, { Component } from 'react';
import { Icon, SideNav, SideNavItem, Autocomplete } from 'react-materialize'
import { Link, } from "react-router-dom"


//This component will allow the user to navigate the site.
//a sidebar visible on desktop and hidden on hamburger menu on mobile. 
// Footer is displayed inside the navbar and holds contact information. 

class Nav extends Component {

    render() {
        return (
            <SideNav id="slide-out" className="side-nav fixed" trigger={<p> </p>}>
                <SideNavItem className="searchBox"><Icon>search</Icon><input type="text" placeholder="Search" /></SideNavItem>
                <div className="navLinks">
                    <SideNavItem><Link to="/">Home</Link></SideNavItem>
                    <SideNavItem><Link to="/products">Shop</Link></SideNavItem>
                    <SideNavItem><Link to="/products/baby">Baby</Link></SideNavItem>
                    <SideNavItem><Link to="/products/beauty">Beauty</Link></SideNavItem>
                    <SideNavItem><Link to="/products/health">Health</Link></SideNavItem>
                    <SideNavItem><Link to="/products/grocery">Grocery</Link></SideNavItem>
                    <SideNavItem><Link to="/products/kitchen">Kitchen</Link></SideNavItem>
                    <SideNavItem><Link to="/products/pets">Pets</Link></SideNavItem>
                </div>
            </SideNav>


        )
    }

}







export default Nav;