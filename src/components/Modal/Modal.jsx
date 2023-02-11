import React, { useState } from 'react'
import './Modal.scss'

export default function Modal({ onClick }) {
  const [modal, setModal] = useState(false)

  // const toggleModal = () => {
  //   setModal(!modal)
  // }
  const toggleModal = (e) => {
    onClick(e)
  }

  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div id="confirmation" className="modal-container">
          <div className="modal">
            <div className="modal-content">
              <p>Employee Created!</p>

              <button onClick={toggleModal} className="close-modal btn-primary">
                <span className="btn-close">CLOSE</span>
                <span className="btn-close-mobile"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
