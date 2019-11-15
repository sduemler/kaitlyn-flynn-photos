import React from 'react';
import {Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <Menu style={{height: 60}} fixed="top">
            <Menu.Item as={NavLink} exact to="/" content="Home"/>
            <Menu.Item as={NavLink} to="/about" content="About"/>
            <Menu.Item as={NavLink} to="/contact" content="Contact"/>
        </Menu>
    )
}

export default Navigation;