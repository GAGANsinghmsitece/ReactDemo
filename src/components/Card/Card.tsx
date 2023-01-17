import React, { FC } from 'react';
import styles from './Card.module.scss';
import { Stack, Box, Flex } from '@chakra-ui/react';
import Label from '../Label/Label';
import DataContainer from '../DataContainer/DataContainer.lazy';
interface popularImage {
  image: String
}

interface CardProps {
  data: {
    main_image: String
    title: String,
    price: String,
    change: String,
    type: String,
    tvl: String,
    popular_prices: popularImage[]
  }
};

const Card: FC<CardProps> = ({ data }) => (
  <div className={styles.CardWrapper}>
    <div className={styles.CardWrapper__ImageContainer}>
      <img src={`./images/${data.main_image}`} />
    </div>
    <div className={styles.Card} data-testid="Card">
      <Stack align={"center"}>
        <Label title={data.title} />
        <DataContainer change={data.type} title={data.price} subtitle={data.change} />

        <Label title="Price" />
        <DataContainer change="" title={data.tvl} subtitle="" />

        <Label title="TVL" />
        <Flex direction="row">
        </Flex>
        <Label title="popular pairs" />
        <div className={styles.Card__Pairs}>
          {data.popular_prices.map((tx) =>
            <img src={`./images/${tx.image}`} />
          )}
        </div>
      </Stack>
    </div>
  </div>
);

export default Card;
