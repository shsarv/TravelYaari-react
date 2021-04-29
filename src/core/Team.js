import React from 'react'
import Layout from './Layout';
import Sarvesh from './../image/team/img1.jpeg';
import Satyam from './../image/team/img2.jpeg';
import Sachi from './../image/team/img3.jpeg';
import Sarveshbg from './../image/team/img-top1.jpeg';
import Satyambg from './../image/team/img-top2.jpeg';
import Sachibg from './../image/team/img-top3.jpeg';
import './../CSS/team.css';
export default function Team() {
    return (
        <Layout>
    <section>
    <div className="container">
    	<div className="row">
    		<div className="col-md-4 col-sm-6 col-xs-12">
            <div className="border shadow rounded my-3 p-2">
    		    <div className="card profile-card-2">
                    <div className="card-img-block">
                        <img className="img-fluid" src={Sarveshbg} alt="" />
                    </div>
                    <div className="card-body pt-5">
                        <img src={Sarvesh} alt="profile" className="profile" />
                        <h5 className="card-title font-weight-bold">Sarvesh Kumar Sharma</h5>
                        <p className="card-text">Data Science Enthusiastic & Web Developer</p>
                        <div className="p-2">
                        <h6 className="text-success border-bottom border-info font-weight-bold">Skills</h6>
                        <ul type="none">
                        <li className="text-warning text-center"> Data Science</li>
                        <li className="text-warning text-center"> Web Development</li>
                        <p className="text-justify px-3 py-2" style={{fontSize:"13px",color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique vitae accusantium sequi explicabo rerum possimus, harum id repudiandae labore.</p>
                        </ul>

                        </div>
                        <div className="text-center border-top border-success pt-3 pb-1" id="logoofcard">
                        <a href="https://github.com/shsarv">
                        <i className="fab fa-github fa-2x" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;
                        <a href="https://twitter.com/sarveshroli"> 
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                        </a> &nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/shsarv/"> <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="https://shsarv.medium.com/"> <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
    		</div>
            <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="border shadow rounded my-3 p-2">
    		    <div className="card profile-card-2">
                    <div className="card-img-block">
                        <img className="img-fluid" src={Sachibg} alt="" />
                    </div>
                    <div className="card-body pt-5">
                        <img src={Sachi} alt="profile" className="profile" />
                        <h5 className="card-title font-weight-bold">Sachi Tripathi</h5>
                        <p className="card-text">Web Developer & java developer</p>
                        <div className="p-2">
                        <h6 className="text-success border-bottom border-info font-weight-bold">Skills</h6>
                        <ul type="none">
                        <li className="text-warning text-center"> MS office</li>
                        <li className="text-warning text-center"> Web Development</li>
                        <p className="text-justify px-3 py-2" style={{fontSize:"13px",color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique vitae accusantium sequi explicabo rerum possimus, harum id repudiandae labore.</p>
                        </ul>
                        </div>
                        <div className="text-center border-top border-success pt-3 pb-1" id="logoofcard">
                        <a href="https://github.com/shsarv">
                        <i className="fab fa-github fa-2x" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;
                        <a href="https://twitter.com/sarveshroli"> 
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                        </a> &nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/shsarv/"> <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="https://shsarv.medium.com/"> <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                        </a>
                        </div>
                    </div>
                </div>
                </div>
    		</div>
            <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="border shadow rounded my-3 p-2">
    		    <div className="card profile-card-2">
                    <div className="card-img-block">
                        <img className="img-fluid" src={Satyambg} alt="" />
                    </div>
                    <div className="card-body pt-5">
                        <img src={Satyam} alt="profile" className="profile" />
                        <h5 className="card-title font-weight-bold">Satyam Kumar Jha</h5>
                        <p className="card-text">Web Develope & Java Developer</p>
                        <div className="p-2">
                        <h6 className="text-success border-bottom border-info font-weight-bold">Skills</h6>
                        <ul type="none">
                        <li className="text-warning text-center">JAVA</li>
                        <li className="text-warning text-center"> Web Development</li>
                        <p className="text-justify px-3 py-2" style={{fontSize:"13px",color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique vitae accusantium sequi explicabo rerum possimus, harum id repudiandae labore.</p>
                        </ul>

                        </div>
                        <div className="text-center border-top border-success pt-3 pb-1" id="logoofcard">
                        <a href="https://github.com/shsarv">
                        <i className="fab fa-github fa-2x" aria-hidden="true"></i></a> &nbsp;&nbsp;&nbsp;
                        <a href="https://twitter.com/sarveshroli"> 
                        <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
                        </a> &nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/shsarv/"> <i class="fab fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="https://shsarv.medium.com/"> <i class="fab fa-medium fa-2x" aria-hidden="true"></i>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
    		</div>
    	</div>
    </div>
</section>
        </Layout>
        
    )
}
