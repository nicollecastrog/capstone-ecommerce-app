import React, { Component } from 'react';
import { Icon, SideNav, SideNavItem, Footer } from 'react-materialize'

class Nav extends Component {

    render() {
        return (
            <div>
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

            </div>
        )
    }

}

export default Nav;