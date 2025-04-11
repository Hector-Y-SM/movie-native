import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import type { Result } from '@/interfaces/tmdb.interface'
import { useRouter } from "expo-router";
import { Rating } from '@kolking/react-native-rating';

const MovieCard = ({
    id, 
    title,
    poster_path,
    release_date,
    vote_average
    }: Result) => {
        const formattedDate = new Date(release_date).toISOString().slice(0, 7); // YYYY-MM
        const router = useRouter();

        return (
            <View className='flex flex-1'>
                <TouchableOpacity
                    onPress={() => {
                        router.push(`../movies/${id}`)
                    }}
                >
                <Image 
                    source={{uri:`https://image.tmdb.org/t/p/w500/${poster_path}`}} 
                    className='w-full h-60 rounded-lg'
                />
                <Text className='text-[#CEB490] text-wrap text-xl text-center'>{title}</Text>
                <View className='items-center'>
                    <Rating
                        rating={vote_average}
                        size={10}
                        scale={1.8}
                        variant='stars'
                        disabled={true}
                        maxRating={10}
                        spacing={2}
                    />
                </View>
                <View className="items-end pr-1 mt-1">
                    <Text className="text-[#CEB490] text-sm">
                        {`${vote_average.toFixed(2)}/10`}
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