import React, { Component } from "react";
import Slider from "react-slick";
import '../App.css';
import Img1 from './SliderImgs/Img1';
import Img2 from './SliderImgs/Img2';
import Img3 from './SliderImgs/Img3';
import Img4 from './SliderImgs/Img4';
import Img5 from './SliderImgs/Img5';
import Img6 from './SliderImgs/Img6';

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slider'
      
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <Img1/>
          </div>
          <div>
            <h3>2</h3>
            <Img2/>
          </div>
          <div>
            <h3>3</h3>
            <Img3/>
          </div>
          <div>
            <h3>4</h3>
            <Img4/>
          </div>
          <div>
            <h3>5</h3>
            <Img5/>
          </div>
          <div>
            <h3>6</h3>
            <Img6/>
          </div>
        </Slider>
      </div>
    );
  }
}