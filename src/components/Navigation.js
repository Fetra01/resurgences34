import React, { useState } from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Resurgences 34</NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem active>
                        <NavLink>Accueil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Nous</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Notre Travailles</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>

        </Navbar>
    );
};

export default Navigation;