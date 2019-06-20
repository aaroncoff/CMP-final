import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
// import nodemailer from 'nodemailer';



export default class Contact extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            email: '',
            text: ''
        }
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

                    <div className='manualContact'>
                    
                    <div className='digits'>
                        <a className='tel: 678-426-8802'>PHONE: 678-426-8802</a>
                    </div>
                    <div className='address'>
                        {/* <div>ADDRESS: 459 Cadillac Pkwy</div>
                        <div className='zip'>Dallas, GA 30157</div> */}
                        {/* <aside>Address:</aside> */}
                        <a href="https://www.google.com/maps/place/459+Cadillac+Pkwy,+Dallas,+GA+30157/@33.8967924,-84.8010043,17z/data=!4m5!3m4!1s0x88f530437aa62983:0x74077ce3c50ca825!8m2!3d33.896788!4d-84.7988156">
                        459 Cadillac Pkwy<br/>
                        Dallas, GA 30157
                    
                        </a>
                        {/* <a className="zip" href="https://www.google.com/maps/place/459+Cadillac+Pkwy,+Dallas,+GA+30157/@33.8967924,-84.8010043,17z/data=!4m5!3m4!1s0x88f530437aa62983:0x74077ce3c50ca825!8m2!3d33.896788!4d-84.7988156">
                        Dallas, GA 30157
                        </a> */}
                    </div>
                </div>

                <div className='form-parent'>
                    <div className="form-child">
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