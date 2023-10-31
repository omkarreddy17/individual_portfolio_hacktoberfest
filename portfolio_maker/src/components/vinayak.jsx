import React from 'react';
import './arbazcss.css';
import YourSVGIcon from './arbazsvg.svg';

const Vinayak = () => {
  return (
    <div>
      {/* Navigation*/}
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="#page-top">
        {" "}
        <svg
          id="logo-88"
          width={40}
          height={41}
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image xlinkHref={YourSVGIcon} x="0" y="0" width="40" height="41" />
        </svg>
        
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fas fa-bars ms-1" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container">
      <div className="masthead-subheading">Vinayak Hingrajiya</div>
      <div className="masthead-heading text-uppercase">App && ML Developer</div>
      <a className="btn btn-primary btn-xl text-uppercase" href="#services">
        Simple Basic Portfolio
      </a>
    </div>
  </header>
  {/* Services*/}
  <section className="page-section" id="services">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">
          {/* Lorem ipsum dolor sit amet consectetur. */}
        </h3>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">E-Commerce</h4>
          <p className="text-muted">
          At our company, we specialize in creating robust and user-friendly e-commerce solutions for your business. Our team of experts ensures that your online store is designed to maximize sales and customer satisfaction. We provide a seamless shopping experience for your customers, with features like secure payment processing, intuitive navigation, and a wide range of customization options.
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-laptop fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">Responsive Design</h4>
          <p className="text-muted">
          In today's digital landscape, having a website that adapts to different screen sizes and devices is crucial. Our responsive design services guarantee that your website looks and functions flawlessly on desktops, tablets, and mobile phones. We focus on creating a visually appealing and easy-to-navigate interface that enhances user engagement and encourages conversion.
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-lock fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">Web Security</h4>
          <p className="text-muted">
          Protecting your website and customer data is a top priority. Our web security services ensure your online presence is safe from cyber threats and vulnerabilities. We implement industry-leading security measures, including encryption, regular security audits, and proactive monitoring to keep your website and data secure. With our expertise, you can have peace of mind knowing that your online assets are well-protected.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Portfolio Grid*/}
  {/* Clients*/}
  {/* <div className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!">
            <img
              className="img-fluid img-brand d-block mx-auto"
              src="assets/img/logos/microsoft.svg"
              alt="..."
              aria-label="Microsoft Logo"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!">
            <img
              className="img-fluid img-brand d-block mx-auto"
              src="assets/img/logos/google.svg"
              alt="..."
              aria-label="Google Logo"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!">
            <img
              className="img-fluid img-brand d-block mx-auto"
              src="assets/img/logos/facebook.svg"
              alt="..."
              aria-label="Facebook Logo"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!">
            <img
              className="img-fluid img-brand d-block mx-auto"
              src="assets/img/logos/ibm.svg"
              alt="..."
              aria-label="IBM Logo"
            />
          </a>
        </div>
      </div>
    </div>
  </div> */}
  {/* Contact*/}
  <section className="page-section" id="contact">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="section-subheading text-muted">
        </h3>
      </div>
      {/* * * * * * * * * * * * * * * **/}
      {/* * * SB Forms Contact Form * **/}
      {/* * * * * * * * * * * * * * * **/}
      {/* This form is pre-integrated with SB Forms.*/}
      {/* To make this form functional, sign up at*/}
      {/* https://startbootstrap.com/solution/contact-forms*/}
      {/* to get an API token!*/}
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div className="row align-items-stretch mb-5">
          <div className="col-md-6">
            <div className="form-group">
              {/* Name input*/}
              <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Your Name *"
                data-sb-validations="required"
              />
              <div
                className="invalid-feedback"
                data-sb-feedback="name:required"
              >
                A name is required.
              </div>
            </div>
            <div className="form-group">
              {/* Email address input*/}
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="Your Email *"
                data-sb-validations="required,email"
              />
              <div
                className="invalid-feedback"
                data-sb-feedback="email:required"
              >
                An email is required.
              </div>
              <div className="invalid-feedback" data-sb-feedback="email:email">
                Email is not valid.
              </div>
            </div>
            <div className="form-group mb-md-0">
              {/* Phone number input*/}
              <input
                className="form-control"
                id="phone"
                type="tel"
                placeholder="Your Phone *"
                data-sb-validations="required"
              />
              <div
                className="invalid-feedback"
                data-sb-feedback="phone:required"
              >
                A phone number is required.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group form-group-textarea mb-md-0">
              {/* Message input*/}
              <textarea
                className="form-control"
                id="message"
                placeholder="Your Message *"
                data-sb-validations="required"
                defaultValue={""}
              />
              <div
                className="invalid-feedback"
                data-sb-feedback="message:required"
              >
                A message is required.
              </div>
            </div>
          </div>
        </div>
        {/* Submit success message*/}
        {/**/}
        {/* This is what your users will see when the form*/}
        {/* has successfully submitted*/}
        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center text-white mb-3">
            <div className="fw-bolder">Form submission successful!</div>
            To activate this form, sign up at
            <br />
            <a href="https://startbootstrap.com/solution/contact-forms">
              https://startbootstrap.com/solution/contact-forms
            </a>
          </div>
        </div>
        {/* Submit error message*/}
        {/**/}
        {/* This is what your users will see when there is*/}
        {/* an error submitting the form*/}
        <div className="d-none" id="submitErrorMessage">
          <div className="text-center text-danger mb-3">
            Error sending message!
          </div>
        </div>
        {/* Submit Button*/}
        <div className="text-center">
          <button
            className="btn btn-primary btn-xl text-uppercase disabled"
            id="submitButton"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
  {/* Footer*/}
  <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-start">
          Copyright © Your Website 2023
        </div>
        <div className="col-lg-4 my-3 my-lg-0">
          <a
            className="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <div className="col-lg-4 text-lg-end">
          <a className="link-dark text-decoration-none me-3" href="#!">
            Privacy Policy
          </a>
          <a className="link-dark text-decoration-none" href="#!">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  </footer>
  
    </div>
  );
};

export default Vinayak;