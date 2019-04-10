import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';
import routes2 from './routes2';
import './App.css';

export default class App extends Component {
  render() {
    return (

  
//   constructor(props) {
//     super(props);

//     this.state = { isDropdownEnabled: false };
//     this.dropdownClicked = this.dropdownClicked.bind(this);
//     this.onWindowClicked = this.onWindowClicked.bind(this);
//   }

//   componentDidMount() {
//     window.onclick = this.onWindowClicked;
//   }

//   dropdownClicked() {
//     let { isDropdownEnabled } = this.state;
//     this.setState({ isDropdownEnabled: !isDropdownEnabled });
//   }

//   onWindowClicked(event) {
//       if (!event.target.matches('.dropbtn')) {
//           this.setState({ isDropdownEnabled: false });
//       }
//   }


  <div>
          {/* <head> 
      <title>Landed by HTML5 UP</title>
       <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="assets/css/main.css" />
      <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
    </head> */}
    <body class="is-preload landing">

          <div id="page-wrapper"> 
  
  {/* <!-- Header -->  */}
    <header id="header">
      <h1 id="logo"><a href="index.html">Landed</a></h1>
      <nav id="nav">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li>
            <a href="#">Navigation</a>
            <ul>
              <li><a href="left-sidebar.html">Our Team</a></li>
              <li>
                <a href="#">Product Galleries</a>
                <ul>
                  <li><a href="./glass_gallery.js">Glass Racks</a></li>
                  <li><a href="#">Metal Fabrication</a></li>
                  {/* <li><a href="#">Option 3</a></li>
                  <li><a href="#">Option 4</a></li>  */}
                </ul>
              </li>
              <li><a href="right-sidebar.html">Leave A Review</a></li>
              <li><a href="no-sidebar.html">Contact Us</a></li>

            </ul>
           {/* <div id="glass_gal_container"></div> */}
          </li>
          <li><a href="elements.html">Elements</a></li>
          <li><a href="#" class="button primary">Sign Up</a></li>
        </ul>
      </nav>
    </header>

  {/* <!-- Banner --> */}
    <section id="banner">
      <div class="content">
        <header>
          <h2>YOUR METAL FABRICATION EXPERTS</h2>
          <p>#1 Glass Rack Fabricator
          in the SOUTHEAST!</p>
        </header>
        <span class="image"><img src="images/logo.png" alt="" /></span>
      </div>
      <a href="#one" class="goto-next scrolly">Next</a>
    </section>

{/* one */}
  <section id="one" class="spotlight style1 bottom">
    <span class="image fit main"><img src="images/pic02.jpg" alt="" /></span>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              <header>
                <h2>Custom Glass Racks to Fit Your Needs</h2>
                {/* <!-- <p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p> --> */}
              </header>
            </div>
            <div class="col-4 col-12-medium">
              <h2>
              We Will Build and Install Them in Our Warehouse
              -Or-
              Deliver Them To You for Installation

              </h2>
        </div>
            <div class="col-4 col-12-medium">
              <h2>2 WEEK GUARANTEE</h2>
              <p>fabricated and delivered</p>
              <h2>12 MONTH WARANTY</h2>
              <p>protection against manufacturig defects</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#two" class="goto-next scrolly">Next</a>
  </section>

    {/* Two */}
    <section id="two" class="spotlight style2 right">
      <span class="image fit main"><img src="images/pic03.jpg" alt="" /></span>
      <div class="content">
        <header>
          <h2>WE ARE YOUR METAL FABRICATION SPECIALISTS</h2>
          <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
        </header>
        <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
        <ul class="actions">
          <li><a href="#" class="button">Learn More</a></li>
        </ul>
      </div>
      <a href="#three" class="goto-next scrolly">Next</a>
    </section>

    {/* Five */}
    <section id="five" class="wrapper style2 special fade">
      <div class="container">
        <header>
          <h2>FREE ESTIMATES</h2>
          <p>contact us to get a complimentary consultation</p>
        </header>
        <form method="post" action="#" class="cta">
          <div class="row gtr-uniform gtr-50">
            <div class="col-8 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Your Email Address" /></div>
            <div class="col-4 col-12-xsmall"><input type="submit" value="Get Started" class="fit primary" /></div>
          </div>
        </form>
      </div>
    </section>

    {/* Footer */}
    <footer id="footer">
      <ul class="icons">
        <li><a href="#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
        <li><a href="#" class="icon alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
        <li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="#" class="icon alt fa-github"><span class="label">GitHub</span></a></li>
        <li><a href="#" class="icon alt fa-envelope"><span class="label">Email</span></a></li>
      </ul>
      <ul class="copyright">
        <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </footer>

</div>

    {/* Scripts */}
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/jquery.scrolly.min.js"></script>
  <script src="assets/js/jquery.dropotron.min.js"></script>
  <script src="assets/js/jquery.scrollex.min.js"></script>
  <script src="assets/js/browser.min.js"></script>
  <script src="assets/js/breakpoints.min.js"></script>
  <script src="assets/js/util.js"></script>
  <script src="assets/js/main.js"></script>
    {/* // <!-- Load React. -->
    // <!-- Note: when deploying, replace "development.js" with "production.min.js". --> */}
    {/* <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script> */}

    {/* Load our React component. */}
    {/* <script src="glass_gallery.js"></script> */}
    </body>
  </div>
      // <div className="App">
      
        /* <div className="topparent">
          <img src={require('./Media/Images/banner3.jpg')} alt={'hero'} className='hero'></img>
          <div className="topchild">
          <a href='https://www.facebook.com/Custom-Metal-Products-426651564470418/' className='facebook'><img src={require('./Media/Images/fb-white.png')}/></a>
          </div>
          
        </div>

       
        <div className="navparent">
          <div className="navchild">
            <input id="toggle-menu" type="checkbox" />
            <label htmlFor="toggle-menu" className="menu-on">MENU</label>
            <label htmlFor="toggle-menu" className="menu-off"></label>
            <nav className='primary-nav'>
              <Link to='/'>HOME</Link>
              <Link to='/about'>ABOUT US</Link>
              <div className="dropdown dd-list">
                <button onClick={this.dropdownClicked} className="dropbtn">Products</button>
                <div id="myDropdown" className={`dropdown-content ${this.state.isDropdownEnabled ? 'show' : ''}`}>
                  <Link to='/glassracks'>Glass Racks</Link>
                  <Link to='/metalfab'>Metal Fabrication</Link>
                </div>
              </div>
              <a className='revText' href='https://goo.gl/cB5xd9'>LEAVE A REVIEW</a>
              <Link to='/contact'>CONTACT US</Link>
            </nav>
          </div>
        </div>
        <div className="routes">
          {routes}
        </div>
        <div className="bodyparent">
          <div className="bodychild">
            {routes2}
          </div>
        </div>
        <div className="footerparent">
          <div className="footerchild">
          </div>
          <div className="contactInfo">

            <a href="tel:+16784268802" className="phone">678-426-8802</a>
          </div>
        </div> */
      /* </div> */
    );
  }
}

