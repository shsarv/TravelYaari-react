import React from 'react'
import Layout from './Layout';
import deskimg from './../image/desk.jpg'
export default function Contact() {
    return (
        <Layout>
            <div className="container" id="banner1">
        <div className="row">
            <div className="col-xs-12 col-sm-6">
                <div className="card my-4">
                    <div className="card-header text-center bg-success">
                        <h3 className="text-center font-weight-bold text-white">Contact Us</h3>
                        <i className="fa fa-envelope fa-4x text-center text-white" aria-hidden="true"></i>
                        <p className="text-justify m-3 text-white">Founded in 2020, TravelYaari is India’s leading online travel marketplace bringing both the traveler and expert Travel-Agents on a common platform.</p>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <h4 className="text-info"><i class="fa fa-thumb-tack fa-1x" aria-hidden="true"></i> Location</h4>
                            </li>
                            <li className="list-group-item">TravelYaari Agency</li>
                            <li className="list-group-item ">Gorakhpur, Uttar Pradesh</li>
                            <li className="list-group-item">India, 274203</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6">
            <div className="card my-4 px-3">
                <h3 className="p-2 text-center my-2 text-success">Please Fill Out this Form</h3>
                <form method="POST" action="">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Name" required="true" pattern=".{1,}" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email" required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                    </div>
                    <div className="form-group">
                        <label for="contact">Contact No.</label>
                        <input type="text" className="form-control" name="contact" placeholder="Contact" required="true" pattern=".{10}" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <input type="text" className="form-control" name="message" placeholder="message" />
                    </div>
                    <div>
                        <button className="btn btn-primary" type="submit" value="Submit" name="button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
    <div className="container card p-3">
        <div className="row">
            <div className="col-md-6">
                <h2 className="text-success"><b><u>LIVE SUPPORT</u></b></h2>
                <h4 className="text-info">24 hours || 7 days a week || 365 days in a year Live Technical Support</h4>
                <p className="text-justify p-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. There are many variants
                    of passaages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                    need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
                <br />
                <button type="button" className="btn btn-primary btn-lg">Learn More</button>
            </div>
            <div className="col-md-6">
                <img src={deskimg} alt="" className="img-fluid" />
            </div>
        </div>
        </div>
        </Layout>
    )
}
