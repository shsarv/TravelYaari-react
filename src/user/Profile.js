import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
/* eslint-disable no-unused-vars */
import { Link, Redirect } from 'react-router-dom';
import { read, update, updateUser } from './apiUser';
import { T, useTranslate } from '@tolgee/react';

const Profile = ({ match }) => {
    const { t } = useTranslate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: false,
        success: false
    });

    const { token } = isAuthenticated();
    const { name, email, password, error, success } = values;

    const init = userId => {
        // console.log(userId);
        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name, email: data.email });
            }
        });
    };

    useEffect(() => {
        init(match.params.userId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(match.params.userId, token, { name, email, password }).then(data => {
            if (data.error) {
                // console.log(data.error);
                alert(data.error);
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        name: data.name,
                        email: data.email,
                        success: true
                    });
                });
            }
        });
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/cart" />;
        }
    };

    const profileUpdate = (name, email, password) => (
        <form>
            <div className="form-group">
                <label className="text-muted">
<T keyName="name-label" /></label>
                <input type="text" onChange={handleChange('name')} className="form-control" value={name} />
            </div>
            <div className="form-group">
                <label className="text-muted">
<T keyName="email-label" /></label>
                <input type="email" onChange={handleChange('email')} className="form-control" value={email} />
            </div>
            <div className="form-group">
                <label className="text-muted">
<T keyName="password-label" /></label>
                <input type="password" onChange={handleChange('password')} className="form-control" value={password} />
            </div>

            <button onClick={clickSubmit} className="btn btn-primary">
                
<T keyName="submit-button" />
            </button>
        </form>
    );

    return (
        <Layout title={
t('profile-title')} description={
t('profile-description')} className="container mt-5 border rounded p-3 shadow-lg bg-light">
            <h2 className="mb-4 p-2 bg-success text-white text-center font-weight-bold rounded shadow">
<T keyName="profile-update-heading" /></h2>
            {profileUpdate(name, email, password)}
            {redirectUser(success)}
        </Layout>
    );
};

export default Profile;