function HeroSection(){
    return (
        <section className="flex flex-col items-center gap-4 text-center w-11/12 mx-auto my-4">
            <svg className="text-accent" 
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>
            <p className="font-mono tracking-widest text-xs text-ink-3">ASKBINGR</p>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-fraunces font-light">Tell me the <span className="italic text-accent">mood.</span></h3>
            <p className="text-ink-2 text-base">Anything in plain words. A vibe, a feeling, a reference, a runtime cap. <span>Bingr does the rest</span></p>
        </section>
    )
}

export default HeroSection