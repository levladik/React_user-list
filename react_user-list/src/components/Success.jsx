import React from 'react'

export const Success = ({ count }) => {
  return (
    <div className='success-block'> 
      <img src='/assets/success.svg" alt="Success' />
      <h3>Success!</h3>
      <p>All {count} users have been sent an invitation</p>
      <button className='send-invite-btn'>back</button>
    </div>
  )
}
