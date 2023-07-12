import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h1>Contact</h1>

      <form className='contact' action='mailto:juanjosebl2@gmail.com'>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Last Name' />
        <input type='text' placeholder='Email' />
        <textarea placeholder='Reason for contact' />
        <input type='submit' value='Send' />
      </form>

    </div>
  )
}
