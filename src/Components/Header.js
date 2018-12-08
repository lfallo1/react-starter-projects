import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem, DropdownToggle, UncontrolledDropdown, DropdownItem, DropdownMenu, Collapse} from 'reactstrap';

class Header extends Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState((prevState) => {
            return {
                isOpen : !prevState.isOpen
            }
        });
    }

    render(){
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
        

}

export default Header;