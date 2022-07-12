import React from 'react'
import "../footer/Footer.css"
import footerlogo from "../../assert/footerlogo.png"
import googleplay from "../../assert/googleplay.png"
import appstore from "../../assert/appstore.png"

export default function Footer() {
    return (
    <div>
<div className="footer-img md-4">
    <img src={footerlogo} alt=""/>
    <a className="back-to-bottom nav-bar-nav ms-auto mb-2 mb-lg-0"href="">back to top</a>
</div>
        <div className="footer md-4">
       <div className="footer-info">
        <p>Information</p> 
        <a href="#">about us</a>
        <a href="#">bauk mataio us</a>
        <a href="#">privacy policy</a>
        <p>carrer</p>
      </div>
      <div className="footer-food navbar-nav ms-auto mb-2 mb-lg-0 ">
        <h5>Food</h5> 
        <a href="#">our secert recipe</a>
        </div>
      <div className="footer-location navbar-nav ms-auto mb-2 mb-lg-0">
        <p>Location</p> 
        <a href="#">find a store</a>
        
      </div>
      <div className="footer-get-touch navbar-nav ms-auto mb-2 mb-lg-0">
        <p>get in touch</p> 
        <a href="#">contact</a>
        <a href="#">join now</a>
        <a href="#">term and condition</a>
        <p>carrer</p>
      </div>
      <div className="images-footer navbar-nav ms-auto mb-2 mb-lg-0">
          <img src={googleplay} alt=""/>
          <img src={appstore} alt=""/>
      </div>


        </div>
        <div className="reserved">
            <p>
            © 2021 KFC Pakistan. All rights reserved.
            </p>
        </div>
    </div>    
    )
}
