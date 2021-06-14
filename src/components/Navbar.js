import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

import {ButtonContainer} from "./Button";



class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm   navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav align-items-center">

                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products
                    </Link>
                    </li>

                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>

                        <span className="mr-auto">
                            <i className="fa fa-cart-arrow-down"></i>
                        </span>
                         my cart
                </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

// const ButtonContainer = styled.button`
//  text-transform: capitalize;
//  font-size: 1.4rem;
//  background:transparent;
//  border:0.05rem solid var(--lightBlue);
//  color: var(--lightBlue);
//  border-radius: 0.5rem;
//  padding: 0.2rem 0.5rem;
//  cursor:pointer;
//  margin:0.2rem 0.5rem 0.2rem 0;
//  transition:all 0.5s ease-in-out;
//  &:hover{
//      background: var(--lightBlue);
//      color:var(--mainBlue);   
//  }
//  &:focus{
//      outline:none;
//  }

// `

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize!important;
}

`


export default Navbar;

