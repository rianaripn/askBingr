import { useState } from 'react'
import FormSection from './components/FormSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Suggestions from './components/Suggestions'

function App() {
  const [inputValue, setInputValue] = useState('')


  async function handleSubmit(e){
    e.preventDefault()
    console.log('submitted: ', inputValue )
  }

  return (
   <>
    <Header />
    <HeroSection />
    <FormSection 
    inputValue={inputValue}
    setInputValue={setInputValue}
    handleSubmit={handleSubmit}
    />
    <Suggestions
    setInputValue={setInputValue}
    
    />
  </>
  )
}

export default App
