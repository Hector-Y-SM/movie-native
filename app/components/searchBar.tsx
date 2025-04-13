import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TextInput } from 'react-native'
import React from 'react'
import '../global.css';

interface Props {
    onPress?: () => void;
    value: string,
    onChangeText: ( txt:string ) => void,
    placeHolder: string;
}

const SearchBar = ({onPress, value, onChangeText, placeHolder}: Props) => {
    return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-5'>
      <Ionicons name="search" size={24} color="#CEB490" onPress={onPress}/>
      <TextInput 
        value={value}
        placeholder={placeHolder}
        placeholderTextColor="#CEB490"
        onChangeText={onChangeText}
        className='flex-1 ml-2 text-white'
        style={{fontSize: 16}}
      />
    </View>
  )
}

export default SearchBar