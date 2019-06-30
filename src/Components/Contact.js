import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
// import nodemailer from 'nodemailer';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            text: ''
        }
        console.log(this.props.google)
        this.handleSubmitButton = this.handleSubmitButton.bind(this)

        // this.clearInputs = this.clearInputs.bind(this)
    }

   //set email subject to either "gig request" or "lesson request" based on radial button selector

//    clearInputs(e){
//        e.preventdefault(e)
//        this.setState({
//         name: '',
//         email: '',
//         text: ''
//        })
       
//    }

    handleSubmitButton(e){
        e.preventDefault()
        const {name,email,text} = this.state
        let body = {
            name: name,
            email: email,
            text: text
        }
        axios.post(`/api/sendEmail`, body).then(response => {
            console.log('-----response', response.data)
            this.setState({
                name: '',
                email: '',
                text: ''
               })
            alert("Your message has been sent")
        }).catch(err => {
            console.log('----------email send error', err)
        })
    }

    render(){
        return(
        
            <div className='contactParent'>

                <span className="contactText">CONTACT US TODAY FOR A FREE QUOTE</span>

               
                    
                    {/* <div className='digits'>
                        <a className='tel: 678-426-8802'>PHONE: 678-426-8802</a>
                    </div> */}
                    <div className='contactChild'>
                        {/* <div>ADDRESS: 459 Cadillac Pkwy</div>
                        <div className='zip'>Dallas, GA 30157</div>  */}
                        {/* <aside>Address:</aside> */}
                        
                        {/* <a className="addressText" href="https://www.google.com/maps/place/459+Cadillac+Pkwy,+Dallas,+GA+30157/@33.8967924,-84.8010043,17z/data=!4m5!3m4!1s0x88f530437aa62983:0x74077ce3c50ca825!8m2!3d33.896788!4d-84.7988156" target='_blank'>
                        <b>Address:</b><br/>
                        459 Cadillac Pkwy<br/>
                       <b>Dallas, GA 30157</b>
                    
                        </a> */}

                        {/* comment below back in */}
                        {/* <div className="phone">
                            <a className='tel: 678-426-8802'>Phone:<br/> 678-426-8802</a>
                        </div> */}



                        {/* <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=459%20Cadillac%20Pkwy%2C%20Dallas%2C%20GA%2030157&key=AIzaSyCfKDX-xJQh-82dgpcsbAiv9nlrYfW6keA" allowfullscreen></iframe> */}
                        {/* <a className="zip" href="https://www.google.com/maps/place/459+Cadillac+Pkwy,+Dallas,+GA+30157/@33.8967924,-84.8010043,17z/data=!4m5!3m4!1s0x88f530437aa62983:0x74077ce3c50ca825!8m2!3d33.896788!4d-84.7988156">
                        Dallas, GA 30157
                        </a> */}

                    </div>

           

        <div className='contactRow'>

                <div className="mapParent">
                    <div className="mapChild">
                        <a className="addressText" href="https://www.google.com/maps/place/459+Cadillac+Pkwy,+Dallas,+GA+30157/@33.8967924,-84.8010043,17z/data=!4m5!3m4!1s0x88f530437aa62983:0x74077ce3c50ca825!8m2!3d33.896788!4d-84.7988156" target='_blank'>459 Cadillac Pkwy Dallas, GA 30157</a>
                        <Map className='map' google={this.props.google}
                        zoom={11}
                            
                        initialCenter={{
                            lat: 33.896694633525534,
                            lng: -84.79924455423316
                        }}
                            // UiSettings.setZoomControlsEnabled(true)
                            // style={style}
                            >
                        <Marker/>
                        </Map>
                    </div>
                </div>

                <div className='form-parent'>
                    <div className="form-child">

                        {/* <div className="mapParent">
                            <div className="mapChild">
                                <Map className='map' google={this.props.google}
                                    zoom={11}
                            
                                        initialCenter={{
                                            lat: 33.896694633525534,
                                            lng: -84.79924455423316
                                        }}
                                            // UiSettings.setZoomControlsEnabled(true)
                                            // style={style}
                                >
                                    <Marker/>
                                </Map>
                        </div>
                    </div> */}
                    
                    <h1 className="emailInst">Send us an email!</h1>
                        <form className="input">
                            <input id="name" placeholder="Your Name" onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name}/>
                            <input id="email" placeholder="Your email address" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email}/>
                            <textarea className="message" id="text" placeholder="Message" onChange={(e)=>this.setState({text: e.target.value})} value={this.state.text}></textarea>
                            <button className='formSubmit' onClick={this.handleSubmitButton}>Submit</button>
                        </form>


                    </div>
                </div>

            </div>
        </div>

                // <div>
                //     <div className="form-parent">
                //         <form className="input">
                //             <input id="name" placeholder="Your Name" onChange={(e)=>this.setState({name: e.target.value})}/>
                //             <input id="email" placeholder="Your email address" onChange={(e)=>this.setState({email: e.target.value})}/>
                //             <textarea className="message" id="text" placeholder="Message" onChange={(e)=>this.setState({text: e.target.value})}></textarea>
                //             <button onClick={this.handleSubmitButton}>Submit</button>
                //         </form>
                //     </div>
                // </div>
        )
    }
}
//former password:
//NODEMAILER_PASSWORD=custm3t@l404

export default GoogleApiWrapper ({
    apiKey: ('AIzaSyBwRY7CYE5KLAMzI-hpo1Df7qcBsfcftPc'),
    version: 3.31
})(Contact);