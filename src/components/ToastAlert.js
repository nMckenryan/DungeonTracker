import React from 'react';
import Toast from 'react-bootstrap/Toast';

const ToastAlert = props => {
    
    return (
        <Toast>
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">{props.title}</strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    )
}

export default ToastAlert;

