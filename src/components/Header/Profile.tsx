import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jorge Almeida</Text>
        <Text color="gray.300" fontSize="small">
          jorgebrunoalmeidadossantos@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Jorge Almeida"
        src="https://github.com/jorgebinho.png"
      />
    </Flex>
  );
}
