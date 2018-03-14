import React, { Component } from 'react';
import { Icon, SideNav, SideNavItem, Footer, Navbar, NavItem } from 'react-materialize'

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
                        options={{ closeOnClick: true, draggable: true }}
                    >
                        <SideNavItem>About</SideNavItem>
                        <SideNavItem>Products</SideNavItem>
                        <SideNavItem>Third Link</SideNavItem>
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

// <Navbar >
//     <SideNav className="fixed"
//         trigger={<SideNavItem><Icon>menu</Icon></SideNavItem>}
//         options={{ closeOnClick: true, draggable: true }}
//     >
//         <SideNavItem>About</SideNavItem>
//         <SideNavItem>Products</SideNavItem>
//         <SideNavItem>Third Link</SideNavItem>
//         <Footer>
//             <h5 className="white-text">Contact</h5>
//             <ul>
//                 <li>abc</li>
//                 <li>123</li>
//                 <li>abc</li>
//             </ul>
//         </Footer>
//     </SideNav>
//     <Icon>shopping_cart</Icon>
// </Navbar>



export default Nav;