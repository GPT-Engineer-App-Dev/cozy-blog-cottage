import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Button } from "@chakra-ui/react";
import { FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white" _hover={{ color: "gray.400" }}><FaHome /> Home</Link>
          <Link as={RouterLink} to="#" color="white" _hover={{ color: "gray.400" }}><FaUserAlt /> About</Link>
          <Link as={RouterLink} to="#" color="white" _hover={{ color: "gray.400" }}><FaEnvelope /> Contact</Link>
        </HStack>
      </Flex>
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={8}>
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="lg">About Me</Heading>
            <Text mt={4}>This is a brief description about the blog author. It can include background information, interests, and other relevant details.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" mt={8}>
            <Heading fontSize="lg">Links</Heading>
            <VStack mt={4} spacing={2} align="start">
              <Link href="#" color="blue.500" _hover={{ textDecoration: "underline" }}>Link 1</Link>
              <Link href="#" color="blue.500" _hover={{ textDecoration: "underline" }}>Link 2</Link>
              <Link href="#" color="blue.500" _hover={{ textDecoration: "underline" }}>Link 3</Link>
            </VStack>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" mt={8}>
            <Button as={RouterLink} to="/add-post" colorScheme="blue" size="lg">Add New Post</Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;