/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
// eslint-disable-next-line
import { itemTotal } from "./cartHelpers";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "white" };
    }
};


const Menu = ({ history }) => (
    <nav className="navbar navbar-expand-md navbar-dark" id="my-nav">
        <Link className="navbar-brand" to="/">TravelYaari</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <a
                            className="nav-link text-white"
                            href="#home-popularplace"
                        >
                            Popular Places
                        </a>
                    </li>

                    <li className="nav-item">
                    <a
                            className="nav-link text-white"
                            href="#homegallery"
                        >
                            Gallery
                        </a>
                    </li>
                </Fragment>
            )}
            {isAuthenticated() && (
                <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/Shop"
                >All places
                </Link>
            </li>
            )}
            
            {isAuthenticated() && (
                <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/gallery")}
                    to="/Gallery"
                >Gallery
                </Link>
            </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Signin
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>
                </Fragment>
            )}
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Added Place{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >Signout
                    </span>
                </li>
            )}
            {isAuthenticated() && (
                <li className="nav-item">
                <Dropdown className="m-0 p-0">
                <Dropdown.Toggle  id="dropdown-basic" className="font-weight-bold">
                More
                </Dropdown.Toggle>
                <Dropdown.Menu style={{background:'#4caf50',border:'none'}}>
                <Dropdown.Item as ="button"><Link
                            className="nav-link text-white dropdownid"
                            style={isActive(history, "/about")}
                            to="/about"
                        >
                            about Us
                        </Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><Link
                            className="nav-link dropdownid"
                            style={isActive(history, "/team")}
                            to="/team"
                        >
                            Our Team
                        </Link></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><Link
                            className="nav-link dropdownid"
                            style={isActive(history, "/contact")}
                            to="/contact"
                        >Contact Us
                        </Link></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </li>
            )}
            
        </ul>
    </div>
</nav>
);

export default withRouter(Menu);
