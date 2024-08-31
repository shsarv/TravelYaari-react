import React from 'react';
import Layout from './Layout';
import aboutimg from './../image/about.png';
import { Link, } from "react-router-dom";

export default function about() {
    return (
    <Layout>
        <div className="container-fluid">
            <div className="row mt-4 mb-2">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="border rounded shadow">
                        <div className="card m-2 ">
                            <h5 className="m-0 text-white font-weight-bold card-header bg-success"><i class="fa fa-tree" aria-hidden="true"></i>  WHO ARE WE</h5>
                            <img src={aboutimg} class="img-thumbnail" alt="" />
                            <div class="card-body m-0 p-0">
                                <p className="text-justify p-3">Welcome to TravelYaari, your passport to unforgettable journeys and the ultimate travel revolution! Imagine a world where travel is effortless, exciting, and uniquely tailored to your dreams, where every moment is a discovery, and every experience is a treasure. Our story began as a spark of innovation among visionary university students, and today we're igniting a transformative movement in Indian tourism, redefining the way you explore, interact, and connect with the world. With TravelYaari, discover a realm of limitless possibilities: explore hidden gems, immerse in diverse cultures, and create lifelong memories that will leave you enchanted and inspired. We're empowering your wanderlust with cutting-edge technology, expertly curated travel recommendations, seamless booking experiences with zero hidden fees or international charges, a multilingual website and mobile app, global branches and 24/7 support, exclusive partnerships with top hotels, motels, and lodges, and sustainable tourism practices that support local communities and preserve the environment. At TravelYaari, we believe that travel has the power to transform lives, broaden perspectives, and unite people across the globe. Join us on this extraordinary journey, and let's create a world of limitless exploration, connection, and wonder, where every traveler becomes a storyteller, and every journey becomes a masterpiece!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="border rounded shadow">
                        <div className="card m-2 ">
                            <h5 className="m-0 text-white font-weight-bold card-header bg-success text-uppercase"><i class="fa fa-history" aria-hidden="true"></i>  Our History</h5>
                            <div class="card-body m-0 p-0 mt-2">
                            <a href="/#" className='p-3 font-weight-bold text-warning'><i class="fa fa-clock-o" aria-hidden="true"></i> ---2020---</a>
                                <p className="text-justify p-3">Meet the visionary founders of TravelYaari - Sarvesh Kumar Sharma, Satyam Jha, and Sachi Tripathi - the masterminds behind a revolutionary travel website that's changing the game! These innovators, credited with developing the predecessor to online travel platforms, have now created a groundbreaking website that's breaking down barriers and shattering boundaries. What drove them? The frustration of seeing most travel websites nickel-and-dime customers with international charges for global bookings. TravelYaari is on a mission to shatter this status quo, providing seamless bookings across the globe, completely free of international charges - yes, you read that right, not a single penny extra! But that's not all - they're also committed to expanding their reach, establishing branches in numerous countries, and tailoring their services to meet the unique needs and interests of each user. And, they're dedicated to partnering with only the best hotels, motels, and lodges, ensuring that every customer receives top-notch quality and service. With TravelYaari, the future of travel has arrived, and it's more exciting, inclusive, and customer-centric than ever!
                                <br />
                                <a href="/#" className='font-weight-bold text-info'><i class="fa fa-clock-o" aria-hidden="true"></i> --- December 2020---</a><br />
                                In the december 2020, TravelYaari website get Deployed to various platform including github pages and heroku <br />
                              
                                <a href="/#" className='font-weight-bold text-success'><i class="fa fa-clock-o" aria-hidden="true"></i> --- April 2021---</a><br />
                                In the April 2021, TravelYaari website get itself developed by MERN Stack & Deployed to various platform. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="border rounded shadow">
                        <div className="card m-2 ">
                            <h5 className="m-0 text-white font-weight-bold card-header bg-success text-uppercase"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Developers</h5>
                            <div class="card-body m-0 p-0">
                                <ul className="list-group">
                                    <li className="list-group-item text-info h6 font-weight-bold">Sarvesh Kumar Sharma</li>
                                    <li className="list-group-item text-info h6 font-weight-bold">Sachi Tripathi</li>
                                    <li className="list-group-item text-info h6 font-weight-bold">Satyam Kumar Jha</li>
                                    <li className="list-group-item text-danger h6 font-weight-bold text-center"><Link to="./team" className="text-danger">
                                    <i class="fa fa-link" aria-hidden="true"></i> 
                                     &nbsp;&nbsp; meet our team</Link></li>    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}
