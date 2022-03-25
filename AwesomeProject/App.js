import { Center, Flex, NativeBaseProvider, Pressable, ScrollView } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import AppBar from './components/AppBar';
import Data from './components/Data';
import Form from './components/Form';

const data = [
  {
    id: 1,
    name: "A",
    bg: "#4f9"
  },
  {
    id: 2,
    name: "B",
    bg: "#e83"
  },
  {
    id: 3,
    name: "C",
    bg: "#4f9"
  },
  {
    id: 4,
    name: "D",
    bg: "#e83"
  },
  {
    id: 5,
    name: "E",
    bg: "#4f9"
  },
  {
    id: 6,
    name: "F",
    bg: "#e83"
  },
  {
    id: 7,
    name: "G",
    bg: "#4f9"
  },
  {
    id: 8,
    name: "H",
    bg: "#e83"
  },
  {
    id: 9,
    name: "I",
    bg: "#4f9"
  },
  {
    id: 10,
    name: "J",
    bg: "#e83"
  },
  {
    id: 11,
    name: "K",
    bg: "#4f9"
  },
  {
    id: 12,
    name: "L",
    bg: "#e83"
  },
]
const App = () => {
  const [color, setColor] = useState("");
  console.log(color);
  return (
    <NativeBaseProvider>
      <AppBar/>
      <Data/>
      <ScrollView>
        <Center bg={color ? color : '#fff'}>
          <Flex direction="row" wrap="wrap" justifyContent="space-around">
            {
              data.map((d, i) => (
                <Pressable key={i} onPress={() => setColor('#e83a3b')}>
                  <Center marginX={1} marginY={2} h="40" w="20" bg={d.bg} rounded="md" shadow={3}>
                    <Text style={styles.text}>{d?.id}</Text>
                    <Text style={styles.text}>{d?.name}</Text>
                    <Text style={styles.text}>{d?.bg}</Text>
                  </Center>
                </Pressable>
              ))
            }
          </Flex>
        </Center>
        <Form/>
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "#222"
  }
})
export default App;