export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    APKI_KEY: process.env.EXPO_TMDB_READ_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_TMDB_READ_API_KEY}`,
    }
} 


/**
 * '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
 */


export const fetchPopularMovies = async ({ query }: {query : string}) => {
    const endpoint =  query 
                        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
                        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
                        
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
}

export const fetchMovieData = async ({ query }: {query : string}) => {
    const endpoint =  query 
                        ? `${TMDB_CONFIG.BASE_URL}/movie/${encodeURIComponent(query)}?language=en-US` 
                        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });

    console.log('ress ', response)
    console.log('header ', TMDB_CONFIG.headers)
    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

    
/*const url = 'https://api.themoviedb.org/3/find/external_id?external_source=';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTc1MDgxYzRkZTljZTcxZmI4YjY2ZWViMDg3YWE2YyIsIm5iZiI6MTc0NDA5MjI0NS40OTMsInN1YiI6IjY3ZjRiYzU1YTU0NzFhNTFlZTk5ODNkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeEe45n-s3iGMGeTUrQjSJBvL4gfhr0J1aps9Dr8XSE'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));*/
//! 1er endpoint
// 