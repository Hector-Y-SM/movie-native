import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import type { Result } from '@/interfaces/tmdb.interface'
import { useRouter } from "expo-router";
import { Rating } from '@kolking/react-native-rating';
const NotFoundImage = require('@/assets/images/not-found.png');

const MovieCard = ({
    id, 
    title,
    poster_path,
    release_date,
    vote_average
    }: Result) => {
        const formattedDate = new Date(release_date).toLocaleDateString();
        const router = useRouter();
        return (
            <View className='flex flex-1'>
                <TouchableOpacity
                    onPress={() => {
                        router.navigate(`../movie/${id}`)
                    }}
                >
                <Image 
                    source={
                        poster_path
                          ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
                          : NotFoundImage
                    }

                    className='w-full h-80 rounded-lg'
                />
                <Text className='text-[#CEB490] text-wrap text-xl text-center'>{title}</Text>
                <View className='items-center'>
                    <Rating
                        rating={vote_average/2}
                        size={10}
                        scale={1.8}
                        variant='stars'
                        disabled={true}
                        maxRating={5}
                        spacing={2}
                    />
                </View>
                <View className="items-end pr-1 mt-1">
                    <Text className="text-[#CEB490] text-sm">
                        {`${(vote_average/2).toFixed(2)}/5`}
                    </Text>
                    <Text className="text-[#CEB490] text-sm">
                        {formattedDate}
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
        )
}

export default MovieCard