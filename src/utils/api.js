const TMDB_BASE_URL = 'https://api.themoviedb.org/3/search/movie'
const GROQ_BASE_URL = 'https://api.groq.com/openai/v1/chat/completions'


export async function searchTMDB(title) {
    const url = `${TMDB_BASE_URL}?query=${title}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    const result = await response.json()
    return result.results[0]
}

export async function askGroq(userInput) {
    const prompt = `You are a movie expert and recommender. 
Given a user's mood, feeling, or preference, recommend 10 movies that best match their request.
ONLY return a valid JSON array of movie titles, no explanation, no extra text. DONT REPEAT YOUR OUTPUT, GIVE DIFFERENT EACH PROMPT
Example output: ["Oldboy", "Parasite", "Gone Girl", "The Prestige", "Shutter Island"]`
    const response = await fetch(GROQ_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
                { role: 'system', content: prompt },
                { role: 'user', content: userInput }
            ]
        })
    })
    const data = await response.json()
    const contents = data.choices[0].message.content
    return JSON.parse(contents)
}

export async function getRecommendations(userInput) {
    const titles = await askGroq(userInput)

    const movies = await Promise.all(titles.map(
        title => searchTMDB(title)
    ))
    return movies.filter(movie => movie !== undefined)
}

export async function getMovieDetails(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    return data
}