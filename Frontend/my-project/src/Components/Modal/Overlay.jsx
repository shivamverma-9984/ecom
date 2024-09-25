import React from 'react'
import { createPortal } from 'react-dom';
import Modal from './Modal';

const mountElement=document.getElementById("overlay")
const Overlay = ({openModal}) => {
  return createPortal(<>{openModal && <h1 className='text-4xl text-red-700'>hhhhhhhhh</h1>} </>,mountElement)
}

export default Overlay