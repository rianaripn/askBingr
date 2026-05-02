function Header({handleHome}){
    return (
        <nav className="px-4 py-4 ">
            <div className="flex flex-row justify-between px-4 py-4 items-center">
                <h2 className="font-fraunces text-3xl italic font-medium">Bingr<span className="text-accent ">.</span></h2>
                <button onClick={handleHome}
                className="flex flex-row gap-1 items-center px-6 py-3 text-sm text-bg-1 bg-ink rounded-4xl border-none cursor-pointer hover:bg-accent hover:text-ink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>
                    <span className="my-auto">askBingr</span>
                </button>
            </div>
            
        </nav>
    )
}

export default Header