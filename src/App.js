import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';
import routes2 from './routes2';
import './App.css';

export default class App extends Component {



  constructor(props) {
    super(props);

    this.state = { isDropdownEnabled: false };
    this.dropdownClicked = this.dropdownClicked.bind(this);
    this.onWindowClicked = this.onWindowClicked.bind(this);
  }

  

  componentDidMount() {
    window.onclick = this.onWindowClicked;
  }

  disableSelection_dropotron(event) {
    if (!event.target.matches('.dropbtn')) {
        this.setState({ isDropdownEnabled: false });
    }
}

  dropdownClicked() {
    let { isDropdownEnabled } = this.state;
    this.setState({ isDropdownEnabled: !isDropdownEnabled });
  }

  onWindowClicked(event) {
      if (!event.target.matches('.dropbtn')) {
          this.setState({ isDropdownEnabled: false });
      }
  }

  render() {
    return (

  


  <div>
          <head> 
      <title>Landed by HTML5 UP</title>
       <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="assets/css/main.css" />
      <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
    </head>
    <body class="is-preload landing">

          <div id="page-wrapper"> 
  
  {/* <!-- Header -->  */}

    <header id="header">
      <h1 id="logo"><a href="/">Landed</a></h1>
 

            <input id="toggle-menu" type="checkbox" />
            <label htmlFor="toggle-menu" className="menu-on">MENU</label>
            <label htmlFor="toggle-menu" className="menu-off"></label>
            <nav className='primary-nav'>
              <Link to='/'>HOME</Link>
              <Link to='/about'>ABOUT US</Link>
              <div className="dropdown dd-list">
                <a onClick={this.dropdownClicked} className="dropbtn">Products</a>
                <div id="myDropdown" className={`dropdown-content ${this.state.isDropdownEnabled ? 'show' : ''}`}>
                  <Link to='/glassracks'>Glass Racks</Link>
                  <Link to='/metalfab'>Metal Fabrication</Link>
                </div>
              </div>
              <a className='revText' href='https://goo.gl/cB5xd9'>LEAVE A REVIEW</a>
              <Link to='/contact'>CONTACT US</Link>
            </nav>
     

      
      {/* <nav id="nav"> */}
        {/* <ul> */}
          {/* <li><a href="/">Home</a></li> */}
          {/* <li>
          <div className="dropdown dd-list">
                <button onClick={this.dropdownClicked} className="dropbtn">Products</button>
                <div id="myDropdown" className={`dropdown-content ${this.state.isDropdownEnabled ? 'show' : ''}`}>
                  <Link to='/glassracks'>Glass Racks</Link>
                  <Link to='/metalfab'>Metal Fabrication</Link>
                </div>
              </div> */}
            {/* <ul> */}
    {/* <header id="header">
      <h1 id="logo"><a href="/">Landed</a></h1>
      <nav id="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li>
          <div className="dropdown dd-list">
                <button onClick={this.dropdownClicked} className="dropbtn">Products</button>
                <div id="myDropdown" className={`dropdown-content ${this.state.isDropdownEnabled ? 'show' : ''}`}>
                  <Link to='/glassracks'>Glass Racks</Link>
                  <Link to='/metalfab'>Metal Fabrication</Link>
                </div>
              </div>
            <ul> */}





              {/* <li>
                <a href="#">Product Galleries</a>
                <ul>
                  <li><Link to="./glassracks">Glass Racks</Link></li>
                  <li><a href="#">Metal Fabrication</a></li>
                  <li><a href="#">Option 3</a></li>
                  <li><a href="#">Option 4</a></li> 
                </ul>
              </li> */}
              {/* <li><a href="right-sidebar.html">Leave A Review</a></li>
              <li><a href="no-sidebar.html">Contact Us</a></li> */}

            {/* </ul> */}
           {/* <div id="glass_gal_container"></div> */}
          {/* </li> */}
          {/* <li><a href="elements.html">Elements</a></li>
          <li><a href="#" class="button primary">Sign Up</a></li> */}
        {/* </ul> */}
      {/* </nav> */}
    </header>








</div>
<div className="routes">
          {routes}
        </div>
        <div className="bodyparent">
          <div className="bodychild">
            {routes2}
          </div>
        </div>


    {/* Scripts */}
  <script src="./js/jquery.min.js"></script>
  <script src="./js/jquery.scrolly.min.js"></script>
  <script src="./js/jquery.dropotron.min.js"></script>
  <script src="./js/jquery.scrollex.min.js"></script>
  <script src="./js/browser.min.js"></script>
  <script src="./js/breakpoints.min.js"></script>
  <script src="./js/util.js"></script>
  <script src="./js/main.js"></script>
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

