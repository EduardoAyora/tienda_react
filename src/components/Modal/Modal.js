import React from 'react'
import ReactDom from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Modal.css'

export default function Modal({ open, children, onClose, onAccept }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className='overlay-styles' onClick={onClose} />
            <div className='modal-styles'>
                <div className='header-styles'>
                    <span>Confirmar</span>
                    <button className='header-button-style' onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} className="fa-lg" />
                    </button>
                </div>
                <form onSubmit={onAccept}>
                    <div className='body-styles'>
                        {children}
                    </div>
                    <div className='footer-styles'>
                        <input type='submit' className='footer-button-style' value='Aceptar' />
                    </div>
                </form>
            </div>
        </>,
        document.getElementById('portal')
    )
}