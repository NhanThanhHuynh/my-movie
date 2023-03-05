const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;

async function fetchData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
}

export function getNowPlayingMovies(page = 1) {
    const url = `${API_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`;

    return fetchData(url);
}

export function getTopRatedMovies(page = 1) {
    const url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`;

    return fetchData(url);
}

export function getMovieDetails(movieId) {
    const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}`;

    return fetchData(url);
}

export function searchMovies(query, page = 1) {
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;

    return fetchData(url);
}

const fetchMovies = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

export const fetchNowPlayingMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    return await fetchMovies(url);
};

export const fetchTopRatedMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    return await fetchMovies(url);
};