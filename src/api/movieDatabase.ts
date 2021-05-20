import { TopRated } from "@/interfaces/apiTypes/topRated"


const apiKey = process.env.VUE_APP_API_KEY
const fetchTopMovies = async (page: number): Promise<TopRated> => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}&language=en-US`)
    const data = await response.json()

    return data
}
const fetchRandomMovies = async () => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`)
    const data = await response.json()
    console.log(data)
}

const fetchUpcoming = async () => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`)
    const data = await response.json()
    console.log(data)
}

export { fetchTopMovies, fetchRandomMovies, fetchUpcoming }