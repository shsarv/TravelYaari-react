import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import img1 from './../image/resort4.jpg';
import img2 from './../image/resort5.jpg';
import img3 from './../image/resort6.jpg';
import "./../CSS/Corosal.css";
import { Link, } from "react-router-dom";

export default function Corosal() {
    return (
  <Carousel className="container-fluid mt-1 p-0">
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={img1} alt="First slide"/>
    <Carousel.Caption className="corosal-caption-center justify-content-end">
      <div className="text-right">
      <h1 className="display-4 text-white pb-3 font-weight-bold">We Work With All Budgets</h1>
      <p className="d-block w-100 h5">Book a ticket and just leave.</p>
      <button className="btn btn-success btn-lg text-white mt-2"><Link to='/contact' className="text-white">contact us</Link></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={img2} alt="First slide"/>
    <Carousel.Caption className="corosal-caption-center justify-content-start">
      <div className="text-left">
      <h1 className="display-4 text-white pb-3 font-weight-bold">Group & Individual Gataways Experience. </h1>
      <p className="d-block w-100 h5">Tourism. These are as education in themselves</p>
      <button className="btn btn-success btn-lg text-white mt-2"><Link to='/contact' className="text-white">contact us</Link></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="vertical-center">
    <img className="d-block w-100 img-fluid" src={img3} alt="First slide"/>
    <Carousel.Caption className="corosal-caption-center justify-content-center">
      <div className="text-center">
      <h1 className="display-4 text-white pb-3 font-weight-bold">Take Your Dream Vacation</h1>
      <p className="d-block w-100 h5">Adventure awaits, go find it.</p>
      <button className="btn btn-success btn-lg text-white mt-2"><Link to='/contact' className="text-white">contact us</Link></button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
