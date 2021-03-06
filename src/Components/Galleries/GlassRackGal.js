import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import '../../App.css';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';

{/* <p class="aboutUs">
Quality is our benchmark and the foundation that our company is built on <br />
We achieve this with core values of:<br />
-Having pride and loyalty in our company<br />
-Superior customer service<br />
-Outright dependability and continuous improvement<br />

</p> */}

const IMAGES = [{
        src: require("../../Media/Images/Gallery/IMG_3810.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3807.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3806.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3808.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3811.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3839.jpg"),
        caption: "24’ Aluminum Body (for AIG)"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3840.jpg"),
        caption: "24’ Aluminum Body (for AIG)"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3841.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3844.jpg"),
        caption: "Slide In A-Frame"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3843.jpg"),
        caption: "Slide In A-Frame"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3842.jpg"),
        caption: "24’ Aluminum Body (for AIG)"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3845.jpg"),
        caption: "Glass L-Buck & Glass Tote"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3847.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3846.jpg"),
        caption: ""
    }, {
        src: require("../../Media/Images/Gallery/IMG_3848.jpg"),
        caption: "Rolling Glass Dolly"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3849.jpg"),
        caption: "Rolling Glass Dolly"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3850.jpg"),
        caption: "Rolling Glass Dolly"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3851.jpg"),
        caption: "Glass L-Buck & Glass Tote"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3852.jpg"),
        caption: "Glass L-Buck & Glass Tote"
    }, {
        src: require("../../Media/Images/Gallery/IMG_3856.jpg"),
        caption: "84”x108” Double Sided Van Rack"
   
    }].map(img => {
        img.thumbnail = img.src;
        img.thumbnailWidth = 370;
        img.thumbnailHeight = 274;
        img.orientation = 1;

        return img;
    });

export default class GlassRackGal extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="gallery-container clearfix">
                <h1 className='grintro'>We fabricate glass handling equipment to fit your precise needs.
                Whether you're moving glass around your shop or across the country, we will build it.</h1>
                <h2 className='grex'>Double Sided Van Racks, Slide In A-Frames, 
                    Aluminum Bodies,<br/> Glass L-Buck & Glass Totes, Rolling Glass Dollies & Much More!
                </h2>
                <Gallery images={IMAGES} />
            </div>
        );
    }
}