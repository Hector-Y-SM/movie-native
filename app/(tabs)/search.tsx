import { StyleSheet, View, Image, FlatList, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import '../global.css';
import useFetch from '../services/useFetch';
import { fetchPopularMovies } from '../services/api';
import MovieCard from '../components/movieCard';
import SearchBar from '../components/searchBar';
const headerImage = require("@/assets/images/encabezado.jpg");
const logoImage = require("@/assets/images/logo.png");

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { 
    data: movies, 
    loading,
    error,
    reFetch: loadMovies,
    reset
  } = useFetch(() => fetchPopularMovies({query: searchQuery}), false);
  
  useEffect(()=>{
    const timeOutID = setTimeout(async () => {
      if (searchQuery.trim()){
        await loadMovies();
      } else {
        reset();
      }
    }, 1000);
    
    return () => clearTimeout(timeOutID)
  }, [searchQuery])
  
  return (
    <View className="flex-1 bg-primary ">
        <Image
          source={headerImage}
          className="absolute w-full z-0"
          resizeMode='cover'
        />  
        <FlatList
          data={movies}
          renderItem={({item}) => (
            <MovieCard {...item}/>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle= {{
            justifyContent: 'flex-start',
            gap: 15,
            marginBottom: 10,
            marginVertical: 15
          }}
          className="mt-5"
          contentContainerStyle={{
            paddingBottom: 80
          }}
          ListHeaderComponent={
            <>
              <View className='w-full flex-row justify-center  items-center'>
              <Image
                source={logoImage}
                className="w-24 h-28 mx-auto z-0"
              />
              </View>
              <View>
                <SearchBar 
                  placeHolder='search for a movie'
                  value={ searchQuery }
                  onChangeText={ (txt) => setSearchQuery(txt) }
                  
                  />
              </View>

              {loading && (
                  <ActivityIndicator size={'large'} color={'#0000ff'} className='my-3'/>
              )}

              {error && (
                <Text>{error.message}</Text>
              )}
                
              {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
                <Text className='text-xl text-white'>Search result for
                  <Text>{searchQuery}</Text>
                </Text>
              )}
            </>
          }
          ListEmptyComponent={
            !loading && !error ? (
              <View className='mt-10 px-5'>
                <Text className='text-center text-gray-500'>no movie found {searchQuery.trim() ? 'no movie found': 'search for a movie'}</Text>
              </View>
            ) : null
          }
        />
    </View>
  );
};

export default Search

const styles = StyleSheet.create({
    
})