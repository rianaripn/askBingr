import { useState } from 'react'
import FormSection from './components/FormSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Suggestions from './components/Suggestions'
import MovieGrid from './components/MovieGrid'
import Detail from './components/Detail'
import Footer from './components/Footer'
import {getRecommendations} from './utils/api'
import Toast from './components/Toast'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState([])
  const [view, setView] = useState('home')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [seeDetail, setSeeDetail] = useState(null)
  const [loadingStage, setLoadingStage] = useState('')
  const delay = (ms)=>new Promise(resolve=>setTimeout(resolve,ms))
  
  function handleBack(){
    setView('results')
  }

  function handleHome(){
    setInputValue('')
    setView('home')
    setIsLoading(false)
    setLoadingStage('')
    setResult([])
  }

  
  
  async function handleSubmit(e){
    e.preventDefault()
    
    setView('results')
    setIsLoading(true)
    try{
      // Handle Input Error //
      if(inputValue.trim()===''){
        setView('home')
        throw new Error('Type something!')
      }

      // tampil "Searching based on your taste..."
      setLoadingStage('searching')
      await delay(1000)

      const movies = await getRecommendations(inputValue)
      setLoadingStage('found') // tampil "Found it. Wait..."
      await delay(1000)
      

      setResult(movies)
      setLoadingStage('')
    }catch(err){
      setError(err.message)
      await delay(3000)
      setError('')
    }finally{
      setIsLoading(false)
    }
  }

  return (
  <>
    <Header 
    handleHome={handleHome}/>
    <Toast
    error={error}/>
    <main className='min-h-screen'>   
      {view === 'home' && 
        <>
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
      }
      {view === 'results' && 
      <>
        <MovieGrid
        loadingStage={loadingStage}
        isLoading={isLoading}
        inputValue={inputValue}
        result={result}
        setView={setView}
        setSeeDetail={setSeeDetail}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
        />
      </>
      }
      {view === 'detail' && 
      <>
        <Detail 
        handleBack={handleBack}
        movie={seeDetail}
        setView={setView}
        />
      </>
      }
    </main>
    <Footer/>
    

  </>
  )
}

export default App
