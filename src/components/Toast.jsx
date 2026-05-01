function Toast({error}){
    if(!error) return null
    return (
        <div className='fade-in fixed bottom-8 left-1/2 -translate-x-1/2 w-fit bg-bg-3 border border-accent-2 px-2 py-1 rounded-full'>
            <p className='text-center text-accent-2 font-mono text-sm'>{error}</p>
        </div>
    ) 
}

export default Toast