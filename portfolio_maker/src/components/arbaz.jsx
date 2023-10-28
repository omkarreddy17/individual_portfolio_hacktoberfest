import React from 'react';

const Arbaz = () => {
  return (
    <div>
      {/* Menu */}
      <nav id="art-menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          {/* Navbar Header */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collasped">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="https://codepen.io/jvjijith/pen/woMywq">Arbazkhan Pathan</a>
          </div>

          {/* Navigation Toggling */}
          <div className="collapse navbar-collapse" id="navbar-collasped">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#home" className="scroll-nav">Home</a></li>
              <li><a href="#about" className="scroll-nav">About</a></li>
              <li><a href="#portfolio" className="scroll-nav">Portfolio</a></li>
              <li><a href="#contact" className="scroll-nav">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <div id="home" className="text-center">
        <div className="layer">
          <div className="content">
            <h1>Hi I'm <strong><span>Arbazkhan Pathan</span></strong></h1>
            <p className="lead">This is my portfolio that I coded.</p>
            <a href="#about" className="fa fa-angle-down scroll-nav"></a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <div className="container">
          <div className="section-title center text-center">
            <h2><strong>ABOUT Me</strong></h2>
            <div className="line"></div>
          </div>
          <div className="gap"></div>
          <div className="row">
            <div className="col-md-6">
              <p>Hi there, I’m <strong>Arbazkhan</strong>.</p>
              <p>My passion for computer science was from my childhood and it getting increasing day by day. I am passionately learning about Machine Learning and Genrative AI.</p>
            </div>
            <div className="col-md-6">
              {/* Image */}
              <img src="https://avatars.githubusercontent.com/u/74857530?v=4" alt="Arbazkhan Pathan" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text-center">
              <blockquote>
                "We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein."
              </blockquote>
              <div className="joinjour text-center">
                <a href="#contact" className="btn btn-block scroll-nav">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Works Section */}
      {/* <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>My WORKS</h2>
            <div className="line"></div>
          </div>
          <div className="gap"></div>
          <section id="works" className="container">
            <ul className="portfolio-items col-4"> */}
              {/* Portfolio items go here */}
              {/* Example item:
              <li className="portfolio-item apps">
                <div className="item-inner">
                  <img src="image_url" alt="Item" />
                  <div className="layer">
                    <a className="preview view" href="image_url"><i className="fa fa-eye"></i></a>
                    <h5>Item Title</h5>
                  </div>
                </div>
              </li>
              */}
            {/* </ul>
          </section>
        </div>
      </div> */}

      {/* Contact Section */}
      <div id="contact" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Get in Touch</h2>
            <div className="line"></div>
          </div>
          <div className="gap"></div>
          <div className="address">Want to get in touch with me? Just feel free to drop me a line anytime.</div>
          <div id="contact-form">
            <div id="message"></div>
            <form method="post" action="php/contact.php" name="contactform" id="contactform">
              <input name="name" type="text" id="name" className="inputForm2" placeholder="Arbazkhan Pathan" />
              <input name="email" type="text" id="email" placeholder="arbazkhanpathan0348@gmail.com" />
              <textarea name="comments" id="comments" placeholder="Message"></textarea>
              <input type="submit" className="send_message transition" id="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container text-center">
            <div className="footer-logo">
              {/* Logo or other content */}
            </div>
            <div className="social-icons">
              <ul>
                <li>
                  <a className="Linkedin" href="https://www.linkedin.com/in/arbazkhan-pathan-a717691b8/">
                    <i className="fa-linked icon-sm"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p>&copy; 2023 Arbazkhan Pathan</p>
              </div>
              <div className="col-sm-6">
                <p className="pull-right">Developed by Arbazkhan Pathan</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Arbaz;
