import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { T, useTranslate } from "@tolgee/react";

const AdminDashboard = () => {
    const {// eslint-disable-next-line
        user: { _id, name, email, role }
    } = isAuthenticated();
    const { t } = useTranslate();

    const adminLinks = () => {
        return (
            <div className="card my-5 bg-success">
                <h4 className="card-header text-white">
<T keyName="admin-links-header" /></h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">
                            
<T keyName="create-category-link" />
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">
                            
<T keyName="create-place-link" />
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/orders">
                            
<T keyName="view-place-orders-link" />
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products">
                            
<T keyName="manage-places-link" />
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/categories">
                            
<T keyName="manage-categories-link" />
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card my-5 bg-success">
                <h3 className="card-header text-white">
<T keyName="user-information-header" /></h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? 
t('admin-role') : 
t('registered-user-role')}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title={
t('dashboard-title')}
            description={`${
t('dashboard-greeting')} ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{adminLinks()}</div>
                <div className="col-9">{adminInfo()}</div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;