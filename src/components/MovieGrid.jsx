import { useState } from "react"
import FormSection from "./FormSection"
import MovieCard from "./MovieCard"

function MovieGrid({inputValue, result, setView, setSeeDetail, setInputValue, handleSubmit}){
    const [localInput, setLocalInput] = useState('')

    return(
        <section >
            <div className=" w-fit font-fraunces text-xl italic my-12 mx-4 bg-bg-3 border border-line px-5 py-5 rounded-tr-4xl 
            rounded-br-4xl rounded-tl-4xl ">
                <p>"{inputValue}"</p>
            </div>
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
                inputValue={localInput}
                setInputValue={(i)=>{
                    setInputValue(i)
                    setLocalInput(i)
                }}
                handleSubmit={handleSubmit}
            />

        </section>
    )
}

export default MovieGrid