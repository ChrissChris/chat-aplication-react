import React from 'react'

const MyMessage = ({ message }) => {
  if (message?.attachmemts?.length > 0) {
    return (
      <img
        src={message.attachmemts[0].file}
        alt='message-attachment'
        className='message-image'
        style={{ float: 'right' }}
      />
    )
  }
  return (
    <div
      className='message'
      style={{
        float: 'right',
        marginRight: '18px',
        color: 'white',
        backgroundColor: '#89cff0',
      }}>
      {message.text}
    </div>
  )
}

export default MyMessage
