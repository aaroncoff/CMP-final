import React, {Component} from 'react';
// import './Home.css';
import Guarantee from './Media/Text/Guarantee';
import Warranty from './Media/Text/Warranty';
import Title from './Media/Text/Title';
import Logo from './Components/Logo';


export default class Home extends Component {
  render() {
    return (

<div>
   {/* <!-- Banner --> */}
   <section id="banner">
      <div class="content">
        <header className="headerText">
          {/* <Logo/> */}
          <h2>YOUR METAL FABRICATION EXPERTS</h2>
          <p>#1 Glass Rack Fabricator
          in the SOUTHEAST!</p>
        </header>
        <span class="image"><Logo/></span>
      </div>
      <a href="#one" class="goto-next scrolly">Next</a>
    </section>

{/* one */}
  <section id="one" class="spotlight style1 bottom">
    <span class="image fit main"><img src="./Media/Images/37296.jpeg" alt="" /></span>
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
              <p>protection against manufacturing defects</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#two" class="goto-next scrolly">Next</a>
  </section>

    {/* Two */}
    <section id="two" class="spotlight style2 right">
      <span class="image fit main"><img src="./Media/Images/AA-Main-Background-2.jpg" alt="" /></span>
      <div class="content">
        <header>
          <h2>WE ARE YOUR METAL FABRICATION SPECIALISTS</h2>
          <p>We offer hundreds of fine-tuned designs that we can tailor to fit your needs</p>
        </header>
        {/* <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p> */}
        <ul class="actions">
          <li><a href="#" class="button">Learn More</a></li>
        </ul>
      </div>
      <a href="#three" class="goto-next scrolly">Next</a>
    </section>

    {/* Five */}
    {/* <section id="five" class="wrapper style2 special fade">
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
    </section> */}

    {/* Footer */}
    <footer id="footer">
       <div className="body-img-parent">
           {/* <img src={require('./Media/Images/HomeBackground.jpeg')} alt={'body-img'} className='body-img'></img> */}
           <div className="body-img-child">
           </div>
         </div>
         <img src={require('./Media/Images/stars.png')} alt={'stars'} className='stars'></img>
         <div className="reviewParent">

           <div className="reviewChild">
          
             {/* <img src={require('./Media/Images/stars.png')} alt={'stars'} className='stars'></img> */}
             <h2>"Custom Metal Products does outstanding work. The quality, attention to detail, and production turn
               around is why we continue to send all our fabrication needs to Jonas and his staff."</h2>
             <h4>-Frankie Willingham, President, All Things Outdoors, LLC.</h4>
          </div>
        </div>
        <img src={require('./Media/Images/stars.png')} alt={'stars'} className='stars'></img>
        <div className="reviewParent2">
       
          <div className="reviewChild2">
            
             <h2>"Great craftsmanship, very professional."</h2>
             <h4>-Art Crew, Jeriel Builder Services.</h4>
          </div> 
        </div>
       

    </footer>
</div>
      // <div className='outer'>
      //   <div className="body-img-parent">
      //     <img src={require('./Media/Images/HomeBackground.jpeg')} alt={'body-img'} className='body-img'></img>
      //     <div className="body-img-child">
      //     </div>
      //   </div>
      //   <div className="reviewParent">
      //     <div className="reviewChild">
      //       <img src={require('./Media/Images/stars.png')} alt={'stars'} className='stars'></img>
      //       <h2>"Custom Metal Products does outstanding work. The quality, attention to detail, and production turn
      //         around is why we continue to send all our fabrication needs to Jonas and his staff."</h2>
      //       <h4>-Frankie Willingham, President, All Things Outdoors, LLC.</h4>
      //       <br/>
      //       <h2>"Great craftsmanship, very professional."</h2>
      //       <h4>-Art Crew, Jeriel Builder Services.</h4>
      //     </div>
      //   </div>
      // </div>
  );
  }
  }
