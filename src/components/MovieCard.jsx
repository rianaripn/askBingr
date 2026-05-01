function MovieCard({movie, setSeeDetail, setView}){
    return(
        <section onClick={()=>{
            setSeeDetail(movie)
            setView('detail')
        }} 
        className="fade-in w-full my-4 bg-bg-3 border border-line rounded-xl rounded-tl-none p-4 cursor-pointer hover:bg-ink-4 hover:border-accent-2">
            <img className="w-full h-full object-cover rounded-xl rounded-tl-none mb-4 mx-auto" 
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://placehold.co/500x750?text=No+Poster'}
            alt={movie.title}
            />
            <div className="px-4 ">
                <h2 className="font-fraunces font-medium italic text-xl ">{movie.title}</h2>
                <div className="flex flex-row text-sm gap-4 text-ink-3 font-medium">
                    <span className="">{movie.release_date.split('-')[0]}</span>
                    <span className="flex flex-row items-center">
                        <svg className="text-accent-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 14.5 8.5 21.5 9 16 13.5 17.5 21 12 17 6.5 21 8 13.5 2.5 9 9.5 8.5z"/></svg>
                        {movie.vote_average.toFixed(1)}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default MovieCard