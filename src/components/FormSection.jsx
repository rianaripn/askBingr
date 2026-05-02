function FormSection({handleSubmit,inputValue,setInputValue}){
    return(
        <form className="w-full lg:max-w-2xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-row justify-center items-center gap-1 has-focus:border-accent has-focus:border bg-bg-3 border-line 
            border w-11/12 rounded-full mx-auto my-10 py-4 px-4">
                <svg className="shrink-0 text-ink-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>
                <input value={inputValue} 
                onChange={(e)=>setInputValue(e.target.value)} 
                className="bg-transparent outline-none flex-1 placeholder:text-ink-3 " 
                type="text" 
                placeholder="Give me plot twist movie" />
                <button className="flex flex-row bg-ink text-bg-1 gap-1.5 text-sm px-4 py-2 rounded-full hover:bg-accent cursor-pointer"
                type="submit">
                    <span>Ask</span>
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>

            </div>
        </form>
        
    )
}

export default FormSection

