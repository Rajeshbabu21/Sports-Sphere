import React from 'react'
import './message.css' // Ensure the path matches the file's location

const Message = () => {
  return (
    <div className='messages-page'>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <h2>Messages</h2>
          <button className='btn-new-message'>New Message</button>
        </div>
        <div className='sidebar-search'>
          <input type='text' className='search-input' placeholder='Search...' />
        </div>
      </div>
      <div className='chat-area'>
        <div className='chat-placeholder'>
          <i className='chat-icon'></i>
          <p>Select a conversation to start messaging</p>
        </div>
      </div>
    </div>
  )
}

export default Message
