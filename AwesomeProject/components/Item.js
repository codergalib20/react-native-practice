import React from 'react';
import { Text, View } from 'react-native';
const Item = ({name}) => {
  return (
    <View>
       <Text>{name}</Text>
    </View>
  );
};

export default Item;