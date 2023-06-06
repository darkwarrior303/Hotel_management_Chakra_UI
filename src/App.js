import { Container, Flex, Spacer } from "@chakra-ui/react";
import React from 'react';

// Layout
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <Container maxW='container.xl' py={35}>
      <Header />
      <Flex columnGap={15} mt={10}>
        <Sidebar />
        <Spacer />
        <MainLayout />
      </Flex>
    </Container>
  );
}

export default App;