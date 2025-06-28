import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth';
import './../CSS/signup.css';
import towerimage from "./../image/signup/bg2.jpeg";
import { T, useTranslate } from '@tolgee/react';

const Signup = () => {
    const { t } = useTranslate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
            }
        });
    };

    const signUpForm = () => (
        <div className="container mt-2">
        <div className="row display-flex">
        <div className="col-xs-12 col-sm-6 col-md-5 offset-md-1 rounded-left  my-3" id="signup-form-intro">
        <div id="signup-form-intro2" className="p-3 my-2 rounded">
        <h2 className="my-2 p-2 text-dark font-weight-bold text-center h2 border-bottom">
<T keyName="signup-heading" /></h2>
            <form>
            <div className="form-group">
                <label className="text-dark font-weight-bold">
<T keyName="name-label" /></label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="text-dark font-weight-bold">
<T keyName="email-label" /></label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-dark font-weight-bold">
<T keyName="password-label" /></label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>
            <div className="form-group">
                <label className="text-dark font-weight-bold">
<T keyName="password-again-label" /></label>
                <input type="password" className="form-control" />
            </div>
            <button onClick={clickSubmit} className="btn btn-success text-white btn-block font-weight-bold mt-4">
                
<T keyName="submit-button" />
            </button>
            <div className="text-center py-3 my-2">
                    <span className="text-white">
<T keyName="already-have-account" />&nbsp;</span>
                    <Link to="/signin" className="text-danger font-weight-bold">
<T keyName="signin-link" /></Link>
            </div>
            </form>
            </div>
        </div>
            <div className="col-xs-12 col-sm-6 col-md-5 rounded-right my-3 shadow-lg" id="signup-intro">
                <h2 className="text-white text-center my-3 p-2 h2">
<T keyName="welcome-message" /></h2>
                <p className="text-center text-warning py-2">
<T keyName="service-message" /></p>
                <img className="img-fluid rounded" src={towerimage} alt={
t('signup-image-alt')} />
                <div>
                    <p className="text-center text-light py-1">
<T keyName="terms-agreement" /></p>
                </div>
                <p className="h5 text-center text-white py-1 my-1 font-weight-bold">
<T keyName="explore-world" /></p>

            </div>
        </div>
    </div>
    );

    const showError = () => (
        <div className="alert alert-danger mt-3" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info mt-3" style={{ display: success ? '' : 'none' }}>
            
<T keyName="account-created" /> <Link to="/signin">
<T keyName="signin-link" /></Link>
        </div>
    );

    return (
        <Layout
        >
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    );
};

export default Signup;