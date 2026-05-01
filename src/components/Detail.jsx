import { useEffect, useState } from "react"
import { getMovieDetails } from "../utils/api"

function Detail({movie,handleBack}){
    const [detail, setDetail] = useState(null)
    const formatDollar = (number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(number);
    };

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
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
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
            <div className="mx-5 flex flex-col gap-5">
                <h2 className="font-mono text-ink-3 uppercase tracking-widest font-medium">Synopsis</h2>
                <p className="font-fraunces text-sm text-justify">{detail.overview}</p>
                <div className="flex flex-row gap-2">
                    {detail.spoken_languages.map(s=>
                        (<p className="text-xs italic border border-line bg-bg-3 px-3 py-1 rounded-full"
                        key={s.english_name}
                        >{s.english_name} </p>)
                    )}
                </div>
                <div className="mt-4 flex-col bg-bg-3 border border-line py-5 px-4 rounded-lg">
                    <div className="flex flex-col gap-1 ">
                        <h2 className="font-mono text-ink-3 font-medium uppercase tracking-widest text-xs">Status</h2>
                        <p className="font-fraunces text-lg pl-3 italic">{detail.status}</p>
                    </div>
                    <div className="flex flex-col gap-1 mt-4 ">
                        <h2 className="font-mono text-ink-3 font-medium uppercase tracking-widest text-xs">Release Date</h2>
                        <p className="font-fraunces text-lg pl-3 italic">{detail.release_date}</p>
                    </div>
                    <div className="flex flex-col gap-1 mt-4 ">
                        <h2 className="font-mono text-ink-3 font-medium uppercase tracking-widest text-xs">Revenue</h2>
                        <p className="font-fraunces text-lg pl-3 italic">{formatDollar(detail.revenue)}</p>
                    </div>
                    <div className="flex flex-col gap-1 mt-4 ">
                        <h2 className="font-mono text-ink-3 font-medium uppercase tracking-widest text-xs">Production Companies</h2>
                        <div className="flex flex-row ">
                            {detail.production_companies.map(pc=>(
                                <p key={pc.name} 
                                className="font-fraunces text-xs px-3  italic text-left border border-line py-2">{pc.name}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-4 ">
                        <h2 className="font-mono text-ink-3 font-medium uppercase tracking-widest text-xs">Tagline</h2>
                        <p className="font-fraunces text-base pl-3 italic">{detail.tagline}</p>
                    </div>
                    <div className="flex flex-row gap-6 mt-4 ">
                        <div>
                            <h2 className="font-mono text-ink-3 font-medium uppercase tracking-widest text-xs">Duration</h2>
                            <p className="font-fraunces text-base  italic">{detail.runtime} min</p>
                        </div>
                        <div>
                            <h2 className="font-mono text-ink-3 font-medium uppercase tracking-widest text-xs">Ratings</h2>
                            <p className="font-fraunces text-base italic text-accent">{detail.vote_average}  <span className="text-ink text-xs">/ 10.0</span> </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-mono text-ink-3 font-medium uppercase tracking-widest text-xs">Genres</h2>
                        <div className="flex flex-row gap-2 font-fraunces text-xs italic mt-1">
                            {detail.genres.map(g=>(
                                <p className="w-fit border border-line px-3 py-1.5 rounded-full" 
                                key={g.name}>{g.name}</p>
                            ))}
                        </div>
                    </div>    

                </div>
            </div>
        </section>
        
    )
}

export default Detail