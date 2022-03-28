import React from 'react';
import { Text, View } from 'react-native';
const Column = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 5, backgroundColor: "red" }}>
      <Text style={{ backgroundColor: "white", width: "24%", textAlign: 'center', paddingVertical: 10 }}>1</Text>
      <Text style={{ backgroundColor: "white", width: "24%", textAlign: 'center', paddingVertical: 10 }}>2</Text>
      <Text style={{ backgroundColor: "white", width: "24%", textAlign: 'center', paddingVertical: 10 }}>3</Text>
      <Text style={{ backgroundColor: "white", width: "24%", textAlign: 'center', paddingVertical: 10 }}>4</Text>
    </View>
  );
};

export default Column;