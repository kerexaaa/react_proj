import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { AiFillDollarCircle } from "react-icons/ai";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { Fragment } from "react";

const Transactions = () => {
  const transactions = [
    {
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      date: "2022-06-09 7:06 PM",
      icon: AiFillDollarCircle,
    },
    {
      type: "BTC Sell",
      amount: "- 12.48513391 BTC",
      amountD: "+ $81,123.10",
      date: "2022-05-27 12:32 PM",
      icon: PiCurrencyBtcFill,
    },
    {
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      date: "2022-06-09 7:06 PM",
      icon: AiFillDollarCircle,
    },
  ];

  return (
    <CustomCard h="full">
      <Flex justify="space-between" h="full" flexDir="column">
        <Stack mb={{
          base: 3,
          xl: 0,
        }}>
        <Text mb="6" fontSize="sm" fontWeight="normal" color="black.80">
          Recent transactions
        </Text>
        <Stack spacing="3">
          {transactions.map((transaction, index) => (
            <Fragment key={index}>
              {index !== 0 && <Divider />}
              <Flex gap="3">
                <Grid
                  placeItems="center"
                  boxSize="10"
                  borderRadius="full"
                  bg="black.5"
                >
                  <Icon fontSize="large" as={transaction.icon}></Icon>
                </Grid>
                <Flex
                  flexDir="column"
                  justify="space-around"
                  flexGrow="1"
                  borderColor="black.10"
                >
                  <HStack justify="space-between" flexGrow="1">
                    <Text textStyle="h6">{transaction.type}</Text>
                    <Text textStyle="h6">{transaction.amount}</Text>
                  </HStack>
                  <HStack justify="space-between" flexGrow="1">
                    <Text fontSize="sm" color="black.80">
                      {transaction.date}
                    </Text>
                    <Text fontSize="sm" color="black.80">
                      {transaction.amountD}
                    </Text>
                  </HStack>
                </Flex>
              </Flex>
            </Fragment>
          ))}
        </Stack>
        </Stack>
        <Button colorScheme="gray" w="full">
          View all
        </Button>
      </Flex>
    </CustomCard>
  );
};

export default Transactions;
