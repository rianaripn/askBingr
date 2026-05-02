import { useState } from "react"

function Suggestions({setInputValue}){
    const suggestions = [
        "Something like Interstellar but funnier",
        "Korean romance that will make me cry",
        "Short horror under 90 minutes",
        "Slow-burn mystery for a rainy night",
        "A film that feels like a memory",
        "Mind-bending sci-fi with a plot twist",
        "Feel-good movie for a bad day",
        "Underrated thriller from the 2000s",
        "Foreign film with stunning cinematography",
        "Dark comedy that makes you uncomfortable",
        "Epic adventure with great world building",
        "Romantic movie that doesn't have a happy ending",
        "Psychological horror that messes with your head",
        "Action movie with minimal dialogue",
        "A movie that will make me question everything"
        ]
    const [fiveRandom] = useState(()=> 
    [...suggestions].sort(()=> Math.random() - 0.5).slice(0,5)
    )
    return(
        <section className="font-fraunces italic text-base">
            <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 w-11/12 mx-auto items-center text-center">
                {fiveRandom.map((suggestion)=>
                    <li onClick={()=>setInputValue(suggestion)}
                    key = {suggestion}
                    className="text-ink-2 px-5 py-3 border border-line rounded-full 
                    hover:border-accent hover:text-ink cursor-pointer">"{suggestion}"</li>
                )}    
            </ul>    
        </section>
    )
}

export default Suggestions