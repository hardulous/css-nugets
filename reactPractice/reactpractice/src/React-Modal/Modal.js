import React from 'react'
import './Styles/Modal.css'

const Modal = ({toggleModal}) => {

  return (
     
    // this modal-background class is actually the fade color on background
    <div className='modal-background'>
      
      <div className="modal">

        <div className="modal-close-btn" onClick={toggleModal}>X</div>
        <div className="modal-header">
          <h2>My Modal</h2>
        </div>
        <div className="modal-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam asperiores, impedit esse in accusantium dolor ipsa eligendi voluptatibus animi suscipit doloremque mollitia omnis nam incidunt tempore eveniet eos autem architecto.
        </div>
        <div className="modal-footer">
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      </div>

    </div>

  )

}

export default Modal

// basically when we show modal we want whole screen background to be either faded and black so that center of attraction will come down to modal only , but note color of background must be solid color not in shaded format 