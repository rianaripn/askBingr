# AskBingr 🎬

> Stop choosing. Start watching.

## What is this?

You know that feeling when you spend 30 minutes scrolling Netflix, can't decide what to watch, and end up rewatching The Office again?

AskBingr fixes that.

Just tell it what you're in the mood for — in plain words. No filters, no categories, no endless scrolling. Something like:

- _"A film that feels like a memory"_
- _"Short horror under 90 minutes"_
- _"Something like Interstellar but funnier"_

And it finds the movies for you.

## How it works

AskBingr takes your input, sends it to an AI, gets movie recommendations, fetches the details from TMDB, and presents them — all in a few seconds.

## Features

- Natural language movie search
- Random suggestion chips for inspiration
- Full movie details (synopsis, runtime, genres, revenue, and more)
- Fast — parallel API calls under the hood

## Tech Stack

- React + Vite
- Tailwind CSS
- Groq API (LLaMA 3.3)
- TMDB API
- Vercel

## Running Locally

```bash
git clone https://github.com/rianaripn/askBingr
cd askBingr
npm install
```

Create a `.env` file:

- VITE_GROQ_API_KEY=your_groq_key
- VITE_TMDB_API_KEY=your_tmdb_key

```bash
npm run dev
```

## Live Demo

[ask-bingr.vercel.app](https://ask-bingr.vercel.app)

---

Built by [@rianaripn](https://github.com/rianaripn) — a D3 Chemical Engineering grad learning to build things on the internet.
