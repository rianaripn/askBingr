import { useState } from "react"
import FormSection from "./FormSection"
import MovieCard from "./MovieCard"

function MovieGrid({inputValue, result, setView, setSeeDetail, setInputValue, handleSubmit, isLoading, loadingStage}){
    const [localInput, setLocalInput] = useState('')
    return(
        <section >
            <div className=" w-fit font-fraunces text-xl italic my-12 mx-4 bg-bg-3 border border-line px-5 py-5 rounded-tr-4xl 
            rounded-br-4xl rounded-tl-4xl ">
                <p>"{inputValue}"</p>
            </div>

            {isLoading && (
                <div className="mx-5 font-fraunces text-2xl italic tracking-wide transition-all duration-500">
                    {loadingStage === 'searching' && <p className="animate-pulse">Searching based on your taste...</p>}
                    {loadingStage === 'found' && <p className="animate-pulse">Found it. Wait...</p>}
                </div>
            )}

            
            <div className="mx-4 my-0">
                <h2 className="font-mono text-base font-bold text-ink-2 tracking-widest uppercase">
                    Bingr<span className="text-accent text-5xl p-0">.</span>
                </h2>
            </div>
            <div className="w-11/12 mx-auto">
                {result.map(data=>(
                    <MovieCard 
                        key={data.id}
                        movie={data}
                        setView={setView}
                        setSeeDetail={setSeeDetail} 
                        />)
                )}
            </div>
            <FormSection
                
                InputValue={inputValue}
                setInputValue={(i)=>{
                    setInputValue(i)
                    setLocalInput(i)
                }}
                handleSubmit={(e)=>{
                    setInputValue(localInput)
                    handleSubmit(e)
                }}
            />

        </section>
    )
}

export default MovieGrid