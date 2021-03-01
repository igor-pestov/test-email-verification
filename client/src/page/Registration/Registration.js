import React, { useState } from 'react'
import axios from 'axios'
import dogVideo from '../../assets/dog.mp4'
import { useHistory } from "react-router-dom";
const Registration = () => {
    let history = useHistory();

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phone: '',
        question: '',
        info: '',
        mailing: false,
    })

    const change = (e, key) => {
        console.log(e);
        setData({ ...data, [key]: e })
    }

    const handleSubmit = (e) => {
        axios.post('http://localhost:4000/registration', data)
            .then(res => {
                res.data.message === 'success' ?
                    history.push('/verification')
                    : console.log('error');
            })
        e.preventDefault()
    }

    return (
        <div className="content">
            <header>
                <h1>Title</h1>
                <h3>Subtitle</h3>
            </header>
            <form onSubmit={handleSubmit} >
                <div>
                    <div className='name' >
                        <div className='form_input'>
                            <input type='text' required onChange={e => change(e.target.value, 'firstName')} value={data.firstname} placeholder='firstname' />
                        </div>
                        <div className='form_input'>
                            <input type='text' required onChange={e => change(e.target.value, 'lastName')} value={data.lastname} placeholder='lastname' />
                        </div>
                    </div>

                    <div onChange={e => change(e.target.value, 'gender')} className='form_radio'>
                        <input type="radio" id="contactChoice1"
                            name="contact" value="Herr" />
                        <label htmlFor="contactChoice1">Herr</label>
                        <input type="radio" id="contactChoice2"
                            name="contact" value="Frau" />
                        <label htmlFor="contactChoice2">Frau</label>
                    </div>

                    <div className='form_input'>
                        <input type='email' required onChange={e => change(e.target.value, 'email')} value={data.email} placeholder='email adress' />
                    </div>

                    <div className='form_input'>
                        <input type='text' required onChange={e => change(e.target.value, 'phone')} value={data.phone} placeholder='phone' />
                    </div>

                    <div className='form_textarea'>
                        <textarea type='text' required onChange={e => change(e.target.value, 'question')} value={data.question} placeholder='Startup Question' />
                    </div>

                    <div className='form_input'>
                        <input type='text' required onChange={e => change(e.target.value, 'info')} value={data.info} placeholder='Placeholder htmlFor where did you hear about us' />
                    </div>

                    <div className='form_checkbox'>
                        <input type="checkbox" id='checkbox' checked={data.mailing} onChange={(e) => change(e.target.checked, 'mailing')} />
                        <label htmlFor="checkbox">Newsletter abonieren</label>
                    </div>
                </div>
                <div className="video">
                    <video width="300" height="300" autoPlay loop muted>
                        <source
                            type='video/mp4'
                            autoplay
                            src={dogVideo} />
                    </video>
                </div>
                <button >Registration</button>
            </form>
        </div>
    )
}

export default Registration