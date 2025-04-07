import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)
  ["name=", "Alice", "age=", "25", "bio=", "Loves hiking and photography"]

  return (
    <>
      <WelcomeMessage />  
      <Footer />
      <Header />
      <MainContent />
      <UserProfile /> 

    </>
  )
}

export default App
