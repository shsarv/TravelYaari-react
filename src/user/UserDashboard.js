import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
import moment from "moment";

const Dashboard = () => {
    const [history, setHistory] = useState([]);

    const {
        user: { _id, name, email, role }
    } = isAuthenticated();
    const token = isAuthenticated().token;

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setHistory(data);
            }
        });
    };

    useEffect(() => {
        init(_id, token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const userLinks = () => {
        return (
            <div className="card mt-4">
                <h4 className="card-header bg-success text-white font-weight-bold text-center">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item font-weight-bold">
                        <Link className="nav-link" to="/cart">
                        <i class="fa fa-picture-o" aria-hidden="true"> </i> My Wishlisted places
                        </Link>
                    </li>
                    <li className="list-group-item font-weight-bold">
                        <Link className="nav-link" to={`/profile/${_id}`}>
                        <i class="fa fa-cog fa-spin fa-1x fa-fw"></i>  Update My Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userInfo = () => {
        return (
            <div className="card mb-5 mt-4">
                <h3 className="card-header bg-success text-white font-weight-bold text-center">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item  text-info font-weight-bold"><i class="fa fa-user-circle" aria-hidden="true"></i> &nbsp; {name}</li>
                    <li className="list-group-item  text-info font-weight-bold"><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp; {email}</li>
                    <li className="list-group-item  text-info font-weight-bold"><i class="fa fa-registered" aria-hidden="true"></i> &nbsp;
                        {role === 1 ? "Admin" : "Registered Travelyaari User 😇"}
                    </li>
                </ul>
            </div>
        );
    };

    const purchaseHistory = history => {
        return (
            <div className="card mb-5">
                <h3 className="card-header bg-success text-white font-weight-bold text-center">Purchase history</h3>
                <ul className="list-group">
                    <li className="list-group-item text-warning font-weight-bold">
                        {history.map((h, i) => {
                            return (
                                <div>
                                    <hr />
                                    {h.products.map((p, i) => {
                                        return (
                                            <div key={i}>
                                                <h6>Product name: {p.name}</h6>
                                                <h6>
                                                    Product price: ${p.price}
                                                </h6>
                                                <h6>
                                                    Purchased date:{" "}
                                                    {moment(
                                                        p.createdAt
                                                    ).fromNow()}
                                                </h6>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-md-4 col-sm-8">{userLinks()}</div>
                <div className="col-md-8 col-sm-12">
                    {userInfo()}
                    {purchaseHistory(history)}
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
