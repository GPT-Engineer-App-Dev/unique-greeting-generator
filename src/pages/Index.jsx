import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Header = () => (
  <Box as="header" bg="brand.700" color="white" py={4} px={8} width="100%">
    <Heading as="h1" size="lg">My Website</Heading>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="brand.700" color="white" py={4} px={8} mt="auto" width="100%">
    <Text>&copy; 2023 My Website. All rights reserved.</Text>
  </Box>
);

const Index = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Container centerContent maxW="container.md" flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is a base template using Chakra UI.</Text>
        </VStack>
      </Container>
      <Footer />
    </Flex>
  );
};

export default Index;