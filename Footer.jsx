import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer text-light">

<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-6">
        <h4 className='text-light'>Join Our Newsletter</h4>
        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
        <form action="forms/newsletter.php" method="post" className="php-email-form">
          <div className="newsletter-form"><input type="email" name="email"/><input type="submit" value="Subscribe"/></div>
          <div className="loading text-light">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message text-light">Your subscription request has been sent. Thank you!</div>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="container footer-top">
  <div className="row gy-4">
    <div className="col-lg-4 col-md-6 footer-about">
      <a href="index.html" className="d-flex align-items-center">
        <span className="sitename text-light">{process.env.REACT_APP_SITE_NAME}</span>
      </a>
      <div className="footer-contact pt-3">
        <p>{process.env.REACT_APP_ADDRESS}</p>
        <p><strong><Link to=""></Link></strong> <span>{process.env.REACT_APP_EMAIL}</span></p>
      </div>
    </div>

    <div className="col-lg-2 col-md-3 footer-links">
      <h4 className='text-light'>Useful Links</h4>
      <ul>
        <li><i className="bi bi-chevron-right text-light"></i> <a  className='text-light' href="#">Home</a></li>
        <li><i className="bi bi-chevron-right text-light"></i> <a  className='text-light' href="#">About us</a></li>
        <li ><i className="bi bi-chevron-right text-light"></i> <a  className='text-light' href="#">Services</a></li>
        <li><i className="bi bi-chevron-right text-light"></i> <a className='text-light' href="#">Terms of service</a></li>
      </ul>
    </div>

    <div className="col-lg-2 col-md-3 footer-links">
      <h4 className='text-light'>Our Services</h4>
      <ul>
        <li><i className="bi bi-chevron-right text-light"></i> <a className='text-light' href="#">Web Design</a></li>
        <li><i className="bi bi-chevron-right text-light"></i> <a className='text-light' href="#">Web Development</a></li>
        <li><i className="bi bi-chevron-right text-light"></i> <a className='text-light' href="#">Product Management</a></li>
        <li><i className="bi bi-chevron-right text-light"></i> <a className='text-light' href="#">Marketing</a></li>
      </ul>
    </div>

    <div className="col-lg-4 col-md-12">
      <h4 className='text-light'>Follow Us</h4>
      <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
      <div className="social-links d-flex">
        <a href=""><i className="bi bi-twitter-x text-light"></i></a>
        <a href=""><i className="bi bi-facebook text-light"></i></a>
        <a href=""><i className="bi bi-instagram text-light"></i></a>
        <a href=""><i className="bi bi-linkedin text-light"></i></a>
         <a href=""><i className="bi bi-youtube text-light"></i></a>
      </div>
    </div>

  </div>
</div>

<div className="container copyright text-center mt-4">
  <p>© <span>Copyright</span> <strong className="px-1 sitename">{process.env.REACT_APP_SITE_NAME}</strong> <span>All Rights Reserved</span></p>
  <div className="credits">
    
    
  </div>
</div>

</footer>
    </>
  )
}
