import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaHome, FaUserAlt, FaEnvelope, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <Container maxW="container.xl" p={4} bg={bg} color={color}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white" _hover={{ color: "gray.400" }}><FaHome /> Home</Link>
          <Link as={RouterLink} to="#" color="white" _hover={{ color: "gray.400" }}><FaUserAlt /> About</Link>
          <Link as={RouterLink} to="#" color="white" _hover={{ color: "gray.400" }}><FaEnvelope /> Contact</Link>
        <Button onClick={toggleColorMode} colorScheme="teal" size="sm">Toggle {useColorModeValue("Dark", "Light")} Mode</Button>
        </HStack>
      </Flex>
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={8}>
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Flex justifyContent="space-between" alignItems="center">
                  <Heading fontSize="xl">{post.title}</Heading>
                  <Button colorScheme="red" size="sm" onClick={() => handleDelete(index)}>
                    <FaTrash />
                  </Button>
                </Flex>
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