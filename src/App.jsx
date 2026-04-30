import { useState } from 'react'
import FormSection from './components/FormSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

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
  </>
  )
}

export default App
