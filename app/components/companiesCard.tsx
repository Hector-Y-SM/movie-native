import { View, Text, Image } from 'react-native';
import React from 'react';
import { ProductionCompany } from '@/interfaces/companies.interface';
const NotFoundImage = require('@/assets/images/not-found.png');

const CompaniesCard = ({
  logo_path,
  name,
  origin_country,
}: ProductionCompany) => {

  return (
    <View className="items-center w-[120px] bg-slate-400 mt-5 p-5 rounded-xl">
      <Image
        source={
          logo_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${logo_path}` }
            : NotFoundImage
        }
        style={{ 
          width: 100, 
          height: 60, 
          resizeMode: 'contain', 
          marginBottom: 5 }}
      />
      <Text className="text-center text-sm">{name}</Text>
      <Text className="text-xs text-center">{origin_country}</Text>
    </View>
  );
};

export default CompaniesCard;
