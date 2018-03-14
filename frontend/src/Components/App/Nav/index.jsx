import React, { Component } from 'react';
import { Icon, SideNav, SideNavItem } from 'react-materialize'

class Nav extends Component {

    render() {
        return (
            <SideNav
                trigger={<SideNavItem><Icon>menu</Icon></SideNavItem>}
                options={{ closeOnClick: true }}>
                <SideNavItem>First Link With Icon</SideNavItem>
                <SideNavItem>Second Link</SideNavItem>
                <SideNavItem>Third Link With Waves</SideNavItem>
            </SideNav>
        )
    }

}

export default Nav;