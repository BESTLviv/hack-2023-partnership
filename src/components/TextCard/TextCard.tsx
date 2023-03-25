import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  text: string;
}

const TextCard = ({ text }: Props) => {
  return (
    <Box
      border="4px"
      borderRadius="20px"
      borderColor="#ffffff"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p="30px 60px"
      w="408px"
      // w="100%"
      boxShadow="0px 0px 10px #13E974"
      mx="auto"
      h="160px"  
      >
      <Text className='textPlay'fontWeight="700" fontSize="24px">
        {text}
      </Text>
    </Box>
  );
};

export default TextCard;
