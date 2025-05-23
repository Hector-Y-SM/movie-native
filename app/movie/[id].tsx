import { View, Text, Image, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { fetchMovieData } from '../services/api';
import useFetch from '../services/useFetch';
import CompaniesCard from '../components/companiesCard';
import { Rating } from '@kolking/react-native-rating';
const NotFoundImage = require('@/assets/images/not-found.png');

const MovieData = () => {
  const navigation = useNavigation();
  useEffect(() => { navigation.setOptions({ headerShown: false })}, []);

  const params = useLocalSearchParams();
  const { id } = params;
  const {
    data: movie,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => fetchMovieData({ query: id as string }));

  if (!movie) {
    return null;
  }

  //console.log(movie)
  return (
    <View className="flex-1 bg-primary">
      {movieLoading ? (
        <ActivityIndicator size={'large'} color={'#FF6F61'} className="mt-10 self-center" />
      ) : movieError ? (
        <Text className="text-white text-center mt-10">Error: {movieError?.message}</Text>
      ) : (
        <>
          <Image 
            source={
              movie.backdrop_path
                ? { uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` }
                : NotFoundImage
            }
            className="w-full h-[200px]  object-cover"
          />
  
          <View className="flex-row p-5 ">
            <View className="flex-1 pr-2 justify-start">
              <Text className="text-[#CEB490] text-2xl font-bold">{movie.original_title}</Text>
              <Text className="text-[#CEB490] mt-2">{movie.overview}</Text>
            </View>

            <Image
              source={
                movie.poster_path
                  ? { uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }
                  : NotFoundImage
              }
              className="w-32 h-48 rounded-lg shadow-lg"
            />
          </View>

          <View className="items-center mt-4">
            <View className="flex-row items-center space-x-2">
                <Rating
                  rating={movie.vote_average / 2}
                  size={20}
                  scale={1.8}
                  variant="stars"
                  disabled={true}
                  maxRating={5}
                  spacing={3}
                />
                <Text className="text-[#CEB490] text-base pl-2">({(movie.vote_average / 2).toFixed(2)})</Text>
              </View>
              <Text className="text-[#CEB490] text-sm mt-2">{movie.vote_count} votos</Text>
            </View>

          <Text className="text-[#CEB490] font-semibold mt-6">Producida por:</Text>
          <FlatList
            horizontal
            data={movie.production_companies}
            renderItem={({ item }) => (
              <CompaniesCard {...item} />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
              gap: 20,
            }}
          />
        </>
      )}
    </View>
  );
};

export default MovieData;
