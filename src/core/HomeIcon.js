import React from 'react'
import "./../CSS/HomeIcon.css";

export default function HomeIcon() {
    return (
        <section className="mb-3 pb-5 pt-5" style={{background:"#ebeae8"}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <h2 className="h2  m-2">Pick Where</h2>
                        <p>Feed your wanderlust.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i className="fa fa-building" aria-hidden="true"></i>
                        <h4 className="h2  m-2">Travel Shop</h4>
                        <p>Answer it Royally.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-2">
                    <div className="card-body text-center homeicon-shadow rounded bg-white">
                    <i class="fa fa-plane" aria-hidden="true"></i>
                        <h4 className="h2  m-2">Fly Cheap</h4>
                        <p>Dream. Explore. Discover.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
