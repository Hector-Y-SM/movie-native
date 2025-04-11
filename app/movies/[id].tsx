import { View, Text, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { fetchMovieData } from '../services/api';
import useFetch from '../services/useFetch';

const MovieData = () => {
    const params = useLocalSearchParams();
    const { id } = params;
    const { 
      data: movie, 
      loading: movieLoading, 
      error: movieError 
    } = useFetch(() => fetchMovieData({ query: id as string }));

    console.log(movie)
  return (
    <View>
      {/*<Image 
          source={{uri:`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}} 
          className='w-full h-60 rounded-lg'
      />
      <Text>nombre {movies.original_title}</Text>
      <Text>nombre {movies.overview}</Text>*/}
      <Image
          source={{uri:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}} 
          className='w-full h-60 rounded-lg'
      />
      <Text>{movie.original_title}</Text>
      <Text>nombre {movie.overview}</Text>
    </View>
  )
}

export default MovieData