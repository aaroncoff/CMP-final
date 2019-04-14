import React, { Component } from 'react';
import '../App.css';
import logo from '../Media/Images/logo.png';


export default class Logo extends Component {
    render() {
        return(
            <div><img className="Logo" src={logo} onClick={()=> window.location.href = '/'} /></div>
        )
    }
}