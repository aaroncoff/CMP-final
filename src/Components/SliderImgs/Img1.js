import React, { Component } from 'react';
import '../../App.css';
import IMG_3810 from '../../Media/Images/Gallery/IMG_3810.jpg';

export default class Img1 extends Component {
    render() {
        return(
            <div><img className="Img1" src={IMG_3810}  /></div>
        )
    }
}