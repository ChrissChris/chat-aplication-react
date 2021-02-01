import React from 'react'
import './App.css'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.js'

function App() {
  return (
    <ChatEngine
      height='100vh'
      projectID='1a8c1091-14cf-4315-85f4-520fa466dad0'
      userName='Admin'
      userSecret='123123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
