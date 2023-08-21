import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';

function MainComponent() {
  return (
    <div className='w-full overflow-y-auto'>
        <Routes>
        <Route path="/" element={<ContactForm/>}/>
      </Routes>
    </div>
  )
}

export default MainComponent