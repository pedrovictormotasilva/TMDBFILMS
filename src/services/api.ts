import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "c5c400482ce81d68f93c77c1603ce942",
        language: "pt-BR",
        inclunde_adult: true,
    },
})