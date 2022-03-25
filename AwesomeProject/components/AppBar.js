import { MaterialIcons } from "@native-base/icons";
import { Box, Center, HStack, Icon, IconButton } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
const AppBar = () => {
  return (
    <Center>
      <Box safeAreaTop bg="#e83a3b" />
      <HStack bg="#e83a3b" px="1" py="1" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton justifyContent="center" alignItems="center"  icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
    </Center>
  );
};

export default AppBar;