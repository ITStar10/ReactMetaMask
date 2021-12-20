import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from './components/ConnectButton';

function App() {
  return (
    // lets us use Chakra UI syntax across our app:
    <ChakraProvider>
      <Layout>
        {/* <p style={{color: "white"}}>Hello, world</p> */}
        <ConnectButton />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
