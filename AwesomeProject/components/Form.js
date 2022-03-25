import { Box, FormControl, Input, Stack } from 'native-base';
import React from 'react';

const Form = () => {
  return (
    <Box alignItems="center" py={5}>
      <Box w="90%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input type="text" defaultValue="12345" placeholder="Email" />
            <Input marginTop={1} type="password" defaultValue="12345" placeholder="password" />
            <Input marginTop={2} type="number" placeholder='Type your mobile Number' />
            <FormControl.Label>Hello</FormControl.Label>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Form;