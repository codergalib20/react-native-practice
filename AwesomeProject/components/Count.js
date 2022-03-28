import React, { useState } from 'react';
import { Text, View } from 'react-native';
const Count = () => {
  const [count, setCount] = useState(0);
  
  return (
    <View>
        <Text>{count}</Text>
    </View>
  );
};

export default Count;