import React, { Component } from 'react';
import '../App.css';

export default class About extends Component{
    render(){
        return(
        <div className="aboutParent">
           <section id="banner2">
           <h2 className="teamTitle">MEET OUR TEAM!</h2>
            {/* <div class="content">
             <header>
          
                <h2>YOUR METAL FABRICATION EXPERTS</h2>
                <p>#1 Glass Rack Fabricator
                in the SOUTHEAST!</p>
            </header>
            <span class="image"><Logo/></span>
            </div> */}
        <a href="#one" class="goto-next scrolly">Next</a>
    </section>
         {/* <div className='Team'><img src={require('../Media/Images/Staff/CMP Team.jpg')} alt={'Team'} className={'staffpic'}></img></div>
         <a href="#one" class="goto-next scrolly">Next</a>
         <script src="./js/jquery.scrollex.min.js"></script> */}
         <section id="one" >
            <h2 className="aboutUs">
            Quality is our benchmark and the foundation that our company is built on <br />
            We achieve this with core values of:<br />

            </h2>
            <h1 className="aboutUs2">
            -Having pride and loyalty in our company<br />
            -Superior customer service<br />
            -Outright dependability and continuous improvement<br />
            </h1>
            <div className="aboutContainer">
                <div className='person1'><img src={require('../Media/Images/Staff/1.jpg')} alt={'Jonas'} className={'Jonas'}></img><p>Jonas Waddell - President & CEO</p></div>
                <div className='person2'><img src={require('../Media/Images/Staff/Jeanine Waddell VICE PRESIDENT.JPG')} alt={'Jeanine'} className={'Jeanine'}></img><p>Jeanine Waddell - Vice President</p></div>
                <div className='person5'><img src={require('../Media/Images/Staff/3.jpg')} alt={'Rhonda'} className={'Rhonda'}></img><p>Rhonda Crow - HR Manager</p></div>
                <div className='person3'><img src={require('../Media/Images/Staff/4.jpg')} alt={'Blake'} className={'Blake'}></img><p>Blake Brumbelow - Sales & Project Manager</p></div>
                <img src={require('../Media/Images/Staff/Jonas-and-Blake-at-Desk.jpg')} alt={'Desk'} className={'Desk'}></img>
                <img src={require('../Media/Images/Staff/Rhonda-at-Desk.jpg')} alt={'Rhonda-Desk'} className={'Desk2'}></img>
            </div>
        </section>
        </div>
        )
    }
}