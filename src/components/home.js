import React from 'react'
import { Link } from 'react-router-dom'




export default function Home() {
    return (
        <React.Fragment>


<div className="main-banner jarallax" data-jarallax='{"speed": 0.3}'>
<div className="d-table">
<div className="d-table-cell">
<div className="container">
<div className="main-banner-content">
<h1>Easy, fee-free banking for entrepreneurs</h1>
<p>Get the financial tools and insights to start, build, and grow your business.</p>
<Link to="/notfound" className="btn btn-primary">Get Started</Link>
</div>
</div>
</div>
</div>
</div>

<section className="featured-boxes-area">
<div className="container">
<div className="featured-boxes-inner">
 <div className="row m-0">
<div className="col-lg-3 col-sm-6 col-md-6 p-0">
<div className="single-featured-box">
<div className="icon color-fb7756">
<img className="recharge"  src="assets/png/001-recharge.png" alt="image1"></img>
</div>
<h3 style={{ textTransform: "capitalize"}}>Recharge APIs</h3>
<p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
<Link to="features-1.html" className="read-more-btn"><p style={{color:"white"}}>Read More</p></Link>
</div>
</div>

<div className="col-lg-3 col-sm-6 col-md-6 p-0">
<div className="single-featured-box">
<div className="icon color-facd60">
<img className="billpay" src="assets/png/002-bill.png" alt="image1"></img>
</div>
<h3>Billpayment APIs</h3>
<p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
<Link to="features-1.html" className="read-more-btn"><p style={{color:"white"}}>Read More</p></Link>
</div>
</div>


<div className="col-lg-3 col-sm-6 col-md-6 p-0">
<div className="single-featured-box">
<div className="icon color-1ac0c6">
<img className="pancard" src="assets/png/004-credit-card-1.png" alt="image1"></img>
</div>
<h3>Uti Pancard APIs</h3>
<p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
<Link to="features-1.html" className="read-more-btn"><p style={{color:"white"}}>Read More</p></Link>
</div>
</div>


<div className="col-lg-3 col-sm-6 col-md-6 p-0">
<div className="single-featured-box">
<div className="icon">
<img className="aeps" src="assets/png/005-atm-card.png" alt="image1"></img>
</div>
<h3>Aeps APIs</h3>
<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
<Link to="features-1.html" className="read-more-btn"><h6 style={{color:"white"}}>Read More</h6></Link>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="services-area ptb-70">
<div className="container-fluid p-0">
<div className="overview-box">
<div className="overview-content">
<div className="content left-content">
<h2>We Always Think For Our Users</h2>
<div className="bar"></div>
<p>Fiinovity Payments Pvt Limited Always Think About thier Users And Always Commited To Thier Welfare</p>
<ul className="services-list">
<li><span><i className="flaticon-check-mark"></i>24 X 7 Support </span></li>
<li><span><i className="flaticon-check-mark"></i> Full data privacy compliance</span></li>
<li><span><i className="flaticon-check-mark"></i> 100% transparent costs</span></li>
<li><span><i className="flaticon-check-mark"></i> Commitment-free</span></li>
<li><span><i className="flaticon-check-mark"></i> Real-time spending overview</span></li>
<li><span><i className="flaticon-check-mark"></i> Debit Mastercard included</span></li>
</ul>
</div>
</div>
<div className="overview-image">
<div className="image">
<img src="assets/img/1.png" alt="image1"/>

<div className="circle-img">
<img src="assets/img/circle.png" alt="image2"/>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="services-area ptb-70 bg-f7fafd">
<div className="container-fluid p-0">
<div className="overview-box">
<div className="overview-image">
<div className="image">
<img src="assets/img/2.png" alt="image3" />

<div className="circle-img">
<img src="assets/img/circle.png" alt="image4" />
</div>
</div>
</div>
<div className="overview-content">
<div className="content">
{/* <h2>Small- to medium-sized businesses</h2> */}
<h2>B2B Software Services Provider</h2>
<div className="bar"></div>
<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<ul className="services-list">
<li><span><i className="flaticon-check-mark"></i> DMT Services</span></li>
<li><span><i className="flaticon-check-mark"></i>AEPS Services</span></li>
<li><span><i className="flaticon-check-mark"></i>Recharge Services</span></li>
<li><span><i className="flaticon-check-mark"></i> Billpayment Services</span></li>
<li><span><i className="flaticon-check-mark"></i> UTI Pancard Services</span></li>
<li><span><i className="flaticon-check-mark"></i>Payout Services</span></li>

{/* <li><span><i className="flaticon-check-mark"></i> Easy transfers</span></li>
<li><span><i className="flaticon-check-mark"></i> Deposit checks instantly</span></li>
<li><span><i className="flaticon-check-mark"></i> A powerful open API</span></li>
<li><span><i className="flaticon-check-mark"></i> Coverage around the world</span></li>
<li><span><i className="flaticon-check-mark"></i> Business without borders</span></li>
<li><span><i className="flaticon-check-mark"></i> Affiliates and partnerships</span></li> */}

</ul>
</div>
</div>
</div>
</div>
</section>


<section className="services-area ptb-70">
<div className="container-fluid p-0">
<div className="overview-box">
<div className="overview-content">
<div className="content left-content">
<h2>Large or enterprise level businesses</h2>
<div className="bar"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<ul className="services-list">
<li><span><i className="flaticon-check-mark"></i> Corporate Cards</span></li>
<li><span><i className="flaticon-check-mark"></i> International Payments</span></li>
<li><span><i className="flaticon-check-mark"></i> Automated accounting</span></li>
<li><span><i className="flaticon-check-mark"></i> Request Features</span></li>
<li><span><i className="flaticon-check-mark"></i> Premium Support</span></li>
<li><span><i className="flaticon-check-mark"></i> Direct Debit</span></li>
</ul>
</div>
</div>
<div className="overview-image">
<div className="image">
<img src="assets/img/3.png" alt="image5"/>

 <div className="circle-img">
<img src="assets/img/circle.png" alt="image6"/>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="comparisons-area ptb-70 bg-f7fafd">
<div className="container">
<div className="section-title">
<h2>Compare us with others</h2>
<div className="bar"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div className="comparisons-table table-responsive">
<table className="table">
<thead>
<tr>
<th scope="col">Packages</th>
<th scope="col">Freelancer</th>
<th scope="col">Householder</th>
<th scope="col">Business Man</th>
</tr>
</thead>
<tbody>
<tr>
<td>Control payout timing</td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-check-mark"></i></td>
</tr>
<tr>
<td>Transparent payouts</td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-cancel"></i></td>
<td><i className="flaticon-check-mark"></i></td>
</tr>
<tr>
<td>Automate evidence submission</td>
<td><i className="flaticon-cancel"></i></td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-check-mark"></i></td>
</tr>
<tr>
<td>Collaboration notes</td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-cancel"></i></td>
<td><i className="flaticon-cancel"></i></td>
</tr>
<tr>
<td>Deposit tagging</td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-cancel"></i></td>
</tr>
<tr>
<td>Technical supportover IRC</td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-check-mark"></i></td>
</tr>
<tr>
<td>24×7 support</td>
<td><i className="flaticon-cancel"></i></td>
<td><i className="flaticon-check-mark"></i></td>
<td><i className="flaticon-check-mark"></i></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

 
<section className="features-area ptb-70 bg-f6f4f8">
<div className="container">
<div className="section-title">
<h2>Our Features</h2>
<div className="bar"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div className="row">
<div className="col-lg-4 col-sm-6 col-md-6">
<div className="single-features-box">
<div className="icon">
<i className="flaticon-settings"></i>
</div>
<h3>Incredible infrastructure</h3>
<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
</div>
</div>
<div className="col-lg-4 col-sm-6 col-md-6">
<div className="single-features-box">
<div className="icon bg-f78acb">
<i className="flaticon-envelope-of-white-paper"></i>
</div>
<h3>Email notifications</h3>
<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
</div>
</div>
<div className="col-lg-4 col-sm-6 col-md-6">
<div className="single-features-box">
<div className="icon bg-cdf1d8">
<i className="flaticon-menu"></i>
</div>
<h3>Simple dashboard</h3>
<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
</div>
</div>
<div className="col-lg-4 col-sm-6 col-md-6">
<div className="single-features-box">
<div className="icon bg-c679e3">
<i className="flaticon-info"></i>
</div>
<h3>Information retrieval</h3>
<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
</div>
</div>
<div className="col-lg-4 col-sm-6 col-md-6">
<div className="single-features-box">
<div className="icon bg-eb6b3d">
<i className="flaticon-cursor"></i>
</div>
<h3>Drag and drop functionality</h3>
<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
</div>
</div>
<div className="col-lg-4 col-sm-6 col-md-6">
<div className="single-features-box">
<div className="icon">
<i className="flaticon-alarm"></i>
</div>
<h3>Deadline reminders</h3>
<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
</div>
</div>
</div>
</div>
</section>


<section className="invoicing-area ptb-70">
<div className="container-fluid">
<div className="row align-items-center">
<div className="col-lg-6 col-md-12">
<div className="invoicing-content">
 <h2>Easy Payment to borrow free get a better filling at home</h2>
<div className="bar"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
<Link to="registration.html" className="btn btn-primary">Get Started</Link>
</div>
</div>
<div className="col-lg-6 col-md-12">
<div className="invoicing-image">
<div className="main-image">
<img src="assets/img/invoicing-image/1.png" className="wow animate__animated animate__zoomIn" alt="image7"/>
<img src="assets/img/invoicing-image/2.png" className="wow animate__animated animate__fadeInLeft" alt="image8"/>
<img src="assets/img/invoicing-image/3.png" className="wow animate__animated animate__fadeInLeft" alt="image9"/>
<img src="assets/img/invoicing-image/4.png" className="wow animate__animated animate__fadeInRight" alt="image10"/>
</div>
<div className="main-mobile-image">
<img src="assets/img/invoicing-image/main-pic.png" className="wow animate__animated animate__zoomIn" alt="image11"/>
</div>
<div className="circle-image">
<img src="assets/img/invoicing-image/circle1.png" alt="image12"/>
<img src="assets/img/invoicing-image/circle2.png" alt="image13"/>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="funfacts-area ptb-70 pt-0">
<div className="container">
<div className="section-title">
<h2>We always try to understand customers expectation</h2>
<div className="bar"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div className="row">
<div className="col-lg-3 col-sm-3 col-md-3 col-6">
<div className="funfact">
<h3><span className="odometer" data-count="180">00</span>K</h3>
<p>Downloaded</p>
</div>
</div>
<div className="col-lg-3 col-sm-3 col-md-3 col-6">
<div className="funfact">
<h3><span className="odometer" data-count="20">00</span>K</h3>
<p>Feedback</p>
</div>
</div>
<div className="col-lg-3 col-sm-3 col-md-3 col-6">
<div className="funfact">
<h3><span className="odometer" data-count="500">00</span>+</h3>
<p>Workers</p>
</div>
</div>
<div className="col-lg-3 col-sm-3 col-md-3 col-6">
<div className="funfact">
<h3><span className="odometer" data-count="70">00</span>+</h3>
<p>Contrubutors</p>
</div>
</div>
</div>
<div className="contact-cta-box">
<h3>Have any question about us?</h3>
<p>Don't hesitate to contact us</p>
<Link to="contact.html" className="btn btn-primary">Contact Us</Link>
</div>
<div className="map-bg">
<img src="assets/img/map.png" alt="map"/>
</div>
</div>
</section>



<section className="feedback-area ptb-70 bg-f7fafd">
<div className="container">
<div className="section-title">
<h2>What customers say about Us</h2>
<div className="bar"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
<div className="feedback-slides">
<div className="client-feedback">
<div>
<div className="item">
<div className="single-feedback">
<div className="client-img">
<img src="assets/img/client-image/1.jpg" alt="image14"/>
</div>
<h3>John Lucy</h3>
<span>Web Developer</span>
<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
<div className="item">
<div className="single-feedback">
<div className="client-img">
<img src="assets/img/client-image/2.jpg" alt="image15"/>
</div>
<h3>John Smith</h3>
<span>Web Developer</span>
<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
<div className="item">
<div className="single-feedback">
<div className="client-img">
<img src="assets/img/client-image/3.jpg" alt="image16"/>
</div>
<h3>Maxwel Warner</h3>
<span>Web Developer</span>
<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
<div className="item">
<div className="single-feedback">
<div className="client-img">
<img src="assets/img/client-image/4.jpg" alt="image18"/>
</div>
<h3>Ross Taylor</h3>
<span>Web Developer</span>
<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
<div className="item">
<div className="single-feedback">
<div className="client-img">
<img src="assets/img/client-image/5.jpg" alt="image19"/>
</div>
<h3>James Anderson</h3>
<span>Web Developer</span>
<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
<div className="item">
<div className="single-feedback">
<div className="client-img">
<img src="assets/img/client-image/1.jpg" alt="image20"/>
</div>
<h3>Steven Smith</h3>
<span>Web Developer</span>
<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
<div className="item">
<div className="single-feedback">
<div className="client-img">
<img src="assets/img/client-image/2.jpg" alt="image21"/>
</div>
<h3>Steven Lucy</h3>
<span>Web Developer</span>
<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
<div className="item">
<div className="single-feedback">
<div className="client-img">
<img src="assets/img/client-image/3.jpg" alt="image22"/>
</div>
<h3>John Terry</h3>
<span>Web Developer</span>
<p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
</div>
</div>

<div className="client-thumbnails">
<div>
<div className="item">
<div className="img-fill"><img src="assets/img/client-image/1.jpg" alt="client"/></div>
</div>
<div className="item">
<div className="img-fill"><img src="assets/img/client-image/2.jpg" alt="client"/></div>
</div>
<div className="item">
<div className="img-fill"><img src="assets/img/client-image/3.jpg" alt="client"/></div>
</div>
<div className="item">
<div className="img-fill"><img src="assets/img/client-image/4.jpg" alt="client"/></div>
</div>
<div className="item">
<div className="img-fill"><img src="assets/img/client-image/5.jpg" alt="client"/></div>
</div>
<div className="item">
<div className="img-fill"><img src="assets/img/client-image/1.jpg" alt="client"/></div>
</div>
<div className="item">
<div className="img-fill"><img src="assets/img/client-image/2.jpg" alt="client"/></div>
</div>
<div className="item">
<div className="img-fill"><img src="assets/img/client-image/3.jpg" alt="client"/></div>
</div>
</div>
<button className="prev-arrow slick-arrow">
<i className="fas fa-arrow-left"></i>
</button>
<button className="next-arrow slick-arrow">
<i className="fas fa-arrow-right"></i>
</button>
</div>
</div>
</div>
</section>



<section className="ready-to-talk">
<div className="container">
<div className="ready-to-talk-content">
<h3>Ready to talk?</h3>
<p>Our team is here to answer your question about Luvion</p>
<Link to="contact.html" className="btn btn-primary">Contact Us</Link>
<span>
    <Link to="/notfound">Or, get started now with a free trial</Link></span>
</div>
</div>
</section>


<div className="partner-area">
<div className="container">
<h3>More that 1.5 million businesses and organizations use Luvion</h3>
<div className="partner-inner">
<div className="row align-items-center">
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-1.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover1.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-2.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover2.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-3.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover3.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-4.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover4.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-5.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover5.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-6.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover6.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-7.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover7.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-8.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover8.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-9.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover9.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-10.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover10.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-11.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover11.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-12.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover12.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-13.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover13.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-14.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover14.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-15.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover15.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-16.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover16.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-17.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover17.png" alt="partner"/>
</Link>
</div>
<div className="col-lg-2 col-sm-4 col-md-3 col-6">
<Link to="/notfound">
<img src="assets/img/partner-image/partner-18.png" alt="partner"/>
<img src="assets/img/partner-image/partner-hover18.png" alt="partner"/>
</Link>
</div>
</div>
</div>
</div>
</div>


<section className="app-download-area">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-6 col-md-12">
<div className="app-image">
<div className="main-image">
<img src="assets/img/mobile-app1.png" className="wow animate__animated animate__fadeInLeft" alt="image25"/>
<img src="assets/img/mobile-app2.png" className="wow animate__animated animate__fadeInUp" alt="image26"/>
</div>
<div className="main-mobile-image">
<img src="assets/img/main-mobile.png" className="wow animate__animated animate__fadeInUp" alt="image27"/>
</div>
<div className="circle-img">
<img src="assets/img/circle.png" alt="image28"/>
 </div>
</div>
</div>
<div className="col-lg-6 col-md-12">
<div className="app-download-content">
<h2>You can find all the thing you need to payout</h2>
<div className="bar"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
<div className="btn-box">
<Link to="/notfound" className="app-store-btn">
<i className="flaticon-apple"></i>
Download on
<span>App Store</span>
</Link>
<Link to="/notfound" className="play-store-btn">
<i className="flaticon-play-store"></i>
Download on
<span>Google play</span>
</Link>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="account-create-area">
<div className="container">
<div className="account-create-content">
<h2>Apply for an account in minutes</h2>
<p>Get your Luvion account today!</p>
<Link to="login.html" className="btn btn-primary">Get Your Luvion Account</Link>
</div>
</div>
</section>


<footer className="footer-area">
<div className="container">
<div className="row">
<div className="col-lg-3 col-sm-6 col-md-6">
<div className="single-footer-widget">
<div className="logo">
<Link to="/notfound"><img src="assets/img/black-logo.png" alt="logo"/></Link>
<p>Quis ipsum suspendisse ultrices gravida commodo. Risus commodo veliliee vel viverra maecenas accumsan lacus vel facilisis.</p>
</div>
<ul className="social-links">
<li><Link to="/notfound" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
<li><Link to="/notfound" target="_blank"><i className="fab fa-twitter"></i></Link></li>
<li><Link to="/notfound" target="_blank"><i className="fab fa-instagram"></i></Link></li>
<li><Link to="/notfound" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
</ul>
</div>
</div>
<div className="col-lg-3 col-sm-6 col-md-6">
<div className="single-footer-widget">
<h3>Company</h3>
<ul className="list">
<li><Link to="about.html">About Us</Link></li>
<li><Link to="features-2.html">Services</Link></li>
<li><Link to="features-1.html">Features</Link></li>
<li><Link to="pricing.html">Our Pricing</Link></li>
<li><Link to="blog-1.html">Latest News</Link></li>
</ul>
</div>
</div>
<div className="col-lg-3 col-sm-6 col-md-6">
<div className="single-footer-widget">
<h3>Support</h3>
<ul className="list">
<li><Link to="faq.html">FAQ's</Link></li>
<li><Link to="/notfound">Privacy Policy</Link></li>
<li><Link to="/notfound">Terms & Condition</Link></li>
<li><Link to="/notfound">Community</Link></li>
<li><Link to="contact.html">Contact Us</Link></li>
</ul>
</div>
</div>
<div className="col-lg-3 col-sm-6 col-md-6">
<div className="single-footer-widget">
<h3>Address</h3>
<ul className="footer-contact-info">
<li><span>Location:</span> 27 Division St, New York, NY 10002, USA</li>
<li><span>Email:</span> <Link to="https://templates.envytheme.com/cdn-cgi/l/email-protection#7018151c1c1f301c0506191f1e5e131f1d"><span className="__cf_email__" data-cfemail="ea828f868685aa869f9c838584c4898587">[email&#160;protected]</span></Link></li>
<li><span>Phone:</span> <Link to="tel:+321984754">+ (321) 984 754</Link></li>
<li><span>Fax:</span> <Link to="tel:+12129876543">+1-212-9876543</Link></li>
</ul>
</div>
</div>
</div>
<div className="copyright-area">
<p>Copyright @2021 Luvion is proudly created by  EnvyTheme</p>
</div>
</div>
<div className="map-image"><img src="assets/img/map.png" alt="map"/></div>
</footer>

<div className="go-top"><i className="fas fa-arrow-up"></i></div>

        </React.Fragment>
    )
}
