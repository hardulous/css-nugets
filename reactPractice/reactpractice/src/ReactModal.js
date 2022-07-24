import React, { useState } from 'react'
import Modal from './React-Modal/Modal'
import './Styles/ReactModal.css'

const ReactModal = () => {
  
  // state variable for modal 
  const [showModal, setshowModal] = useState(false);

  const toggleModal = ()=>{     // to toggle modal
    setshowModal(!showModal)
  }

  return (
    <div className='container text-center'>

      <h2>Press the button to start the modal</h2>
      <button className='button' onClick={toggleModal}>Open Modal</button>

      {
        showModal ? <Modal toggleModal={toggleModal} /> : ''     // show modal if true else will not show
      }

    </div>
  )
    
}

export default ReactModal