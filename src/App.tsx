import React from 'react';
import './App.css';
import { Box, Stack, Flex, Grid, Image, SimpleGrid } from '@chakra-ui/react';
import Card from './components/Card/Card.lazy';
import data from './helpers/data';
import ActivityIcon from "./Assets/images/activity.png";
function App() {
  return (
    <div className="App" >
      <Flex marginLeft="50px" alignItems="center" gap="16px">
        <Image width="16px" height="16px" src={ActivityIcon} />
        <p className="title-section">Trending Assets</p>
      </Flex>
      <SimpleGrid padding="50px" minChildWidth="290px" gap={6}>
        {data.map((tx) => <Card data={tx} />)}

      </SimpleGrid>
    </div >
  );
}

export default App;
