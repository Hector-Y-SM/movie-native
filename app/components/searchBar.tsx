import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TextInput } from 'react-native'
import React from 'react'
import '../global.css';

interface Props {
    onPress: () => void;
    placeHolder: string;
}

const SearchBar = ({onPress, placeHolder}: Props) => {
    return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-5'>
      <Ionicons name="search" size={24} color="#CEB490" onPress={onPress}/>
      <TextInput 
        value=''
        placeholder={placeHolder}
        placeholderTextColor="#CEB490"
        className='flex-1 ml-2 text-white'
        style={{fontSize: 16}}
      />
    </View>
  )
}

export default SearchBar