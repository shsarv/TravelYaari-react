import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth';
import './../CSS/signup.css';
import towerimage from "./../image/signup/bg2.jpeg";
const Signup = () => {
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
        <h2 className="my-2 p-2 text-dark font-weight-bold text-center h2 border-bottom">Signup</h2>
            <form>
            <div className="form-group">
                <label className="text-dark font-weight-bold">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="text-dark font-weight-bold">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-dark font-weight-bold">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>
            <div className="form-group">
                <label className="text-dark font-weight-bold">Password again</label>
                <input type="password" className="form-control" />
            </div>
            <button onClick={clickSubmit} className="btn btn-success text-white btn-block font-weight-bold mt-4">
                Submit
            </button>
            <div className="text-center py-3 my-2">
                    <span className="text-white">Already have an Account ?  &nbsp;</span>
                    <Link to="/signin" className="text-danger font-weight-bold">Signin</Link>
            </div>
            </form>
            </div>
        </div>
            <div className="col-xs-12 col-sm-6 col-md-5 rounded-right my-3 shadow-lg" id="signup-intro">
                <h2 className="text-white text-center my-3 p-2 h2">Welcome to TravelYaari</h2>
                <p className="text-center text-warning py-2">We Are Happy to see you here. We are working to provide the best services to you.</p>
                <img className="img-fluid rounded" src={towerimage} alt="signup" />
                <div>
                    <p className="text-center text-light py-1">By Signin, you Agree to our terms and Services. </p>
                </div>
                <p className="h5 text-center text-white py-1 my-1 font-weight-bold">Let's Explore the World !!!!</p>

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
            New account is created. Please <Link to="/signin">Signin</Link>
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
