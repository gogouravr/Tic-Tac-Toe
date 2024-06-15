/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { createPortal } from 'react-dom';

export default function Modal({ open }) {
    const dialog = useRef();

    if (open)
        dialog.current.showModal();

    return createPortal(
        (<dialog ref={dialog}>
            <p>Greetings, one and all!</p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>),
        document.getElementById('modal')
    )
}
