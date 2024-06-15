/* eslint-disable react/prop-types */
import { forwardRef } from 'react'
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal(props, ref) {

    return createPortal(
        <dialog ref={ref}>
            <p>Greetings, one and all!</p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
})


export default Modal;