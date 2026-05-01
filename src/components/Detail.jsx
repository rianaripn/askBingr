import { useEffect, useState } from "react"
import { getMovieDetails } from "../utils/api"

function Detail({movie,handleBack}){
    const [detail, setDetail] = useState(null)

    useEffect (()=> {
        async function fetchDetail(){
            const data = await getMovieDetails(movie.id)
            setDetail(data)
        }
        fetchDetail()
    },[movie.id])
    if(!detail) return <p>Loading . . .</p>
    return(
        <section >
            <div onClick={handleBack} 
            className="w-fit cursor-pointer py-2 px-4 border-line border rounded-full text-ink-3 mx-6 mt-4 flex flex-row items-center gap-2 text-sm hover:bg-bg-3 hover:border 
            hover:border-ink hover:py-2 hover:px-4 hover:text-ink">
                <svg className="rotate-180" 
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                <button >
                    Back
                </button>
            </div>
            <div className="relative my-5" >
                <img className="w-full object-cover" 
                src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`} />
                <div className="absolute inset-0 bg-bg-3/70"/>
                <div className="absolute inset-0 font-mono font-bold flex flex-col justify-between mx-auto p-4">
                    <div className="flex flex-row gap-2 text-xs text-ink">
                        <span>{detail.release_date.split('-')[0]}</span>
                        <span>.</span>
                        <span>{detail.runtime} min</span>
                        <span>.</span>
                        <span>{detail.genres.map(g=>g.name).join(' / ')}</span>
                        <span>.</span>
                        <svg className="text-accent-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 14.5 8.5 21.5 9 16 13.5 17.5 21 12 17 6.5 21 8 13.5 2.5 9 9.5 8.5z"/></svg>
                        <span>{detail.vote_average}</span>
                    </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <p className="font-fraunces text-4xl text-accent italic">{detail.title}</p>
                    <p className="font-mono text-xs mt-2 text-ink-3 italic ">{detail.tagline}</p>
                </div>
            </div>
            <div className="mx-5 flex flex-col gap-3">
                <h2 className="font-mono text-ink-3 uppercase tracking-widest font-medium">Synopsis</h2>
                <p className="font-fraunces text-sm text-justify">{movie.overview}</p>
                <div className="flex flex-row gap-2">
                    {detail.spoken_languages.map(s=>
                        (<p className="text-xs italic border border-line bg-bg-3 px-3 py-1 rounded-full">{s.english_name} </p>)
                    )}
                </div>
            </div>
        </section>
        
    )
}

export default Detail