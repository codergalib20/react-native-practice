import { Box, Center, HStack } from 'native-base';
import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
const AppBar = () => {
  return (
    <Center>
      <Box safeAreaTop bg="#e83a3b" />
      <HStack bg="#e83a3b" px="1" py="1" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <Button color="#e83a3b" title="B"/>
          <Text style={styles.whitText} color="#fff" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
        
        </HStack>
      </HStack>
    </Center>
  );
};

const styles = StyleSheet.create({
  whitText: {
    color: "#fff",
    fontWeight: "500"
  },
})

export default AppBar;