import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';
import routes2 from './routes2';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { isDropdownEnabled: false };
    this.dropdownClicked = this.dropdownClicked.bind(this);
    this.onWindowClicked = this.onWindowClicked.bind(this);
  }

  componentDidMount() {
    window.onclick = this.onWindowClicked;
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
      <div className="App">
        <div className="topparent">
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
        </div>
      </div>
    );
  }
}

export default App;

