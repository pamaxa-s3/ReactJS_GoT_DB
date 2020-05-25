import React from 'react';
import img from '../assets/images/error.png'
import './ErrorMessage.css'

const ErrorMessage = () => {
    return (
        <>
        <img src={img} alt='error' />
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;