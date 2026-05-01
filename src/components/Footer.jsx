function Footer(){
    return(
        <section className="flex flex-col gap-2 mt-8 mb-4 pt-4 border-t border-t-line bg-bg-2">
            <div className="font-fraunces text-lg italic mx-5">
                <h2>Bingr <span className="text-accent text-2xl">.</span></h2>
            </div>
            <div className="mx-5">
                <ul className="flex flex-row gap-2 font-mono text-xs text-ink-3">
                    <li>TMDB database</li>
                    <li>.</li>
                    <li>Copyright @2026</li>
                </ul>
            </div>
            <div className="mx-5 font-fraunces italic text-xs text-ink-3">
                <p>Stop choosing. Start watching.</p>
            </div>
        </section>
    )
}

export default Footer