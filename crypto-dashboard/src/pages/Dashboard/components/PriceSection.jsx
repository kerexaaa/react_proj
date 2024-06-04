import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, Tabs, Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const PriceSection = () => {

  const timestamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"]

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Price</Text>
          </HStack>
          <HStack
            spacing={8}
            flexDir={{
              base: "column",
              lg: "row",
            }}
            align={{
              base: "flex-start",
              xl: "center",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="bold">
                ₹26,670.25
              </Text>{" "}
              <HStack fontWeight="medium" color="green.500">
                <Icon as={GoArrowUpRight}></Icon>
                <Text fontSize="sm">0.04%</Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle}></Icon>}>
            Buy
          </Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle}></Icon>}>
            Sell
          </Button>
        </HStack>
      </Flex>
        <Tabs variant='soft-rounded'>
          <Flex justifyContent="end">
            <TabList borderRadius="4" bg="black.5" p="3px">
              {["1H","1D","1W","1M"].map((tab) => (
                <Tab _selected={{
                  bg: "white",
                  color: "black.20",
                }} color="black.60" key={tab} fontSize="sm" p="6px" borderRadius="4">
                  {tab}
                </Tab>
              ))}
            </TabList>
          </Flex>
        </Tabs>
      <Image w="100%" mt="12" draggable="false" src="/graph.svg">
      </Image>
      <HStack justify="space-between">
        {timestamps.map(timestamp => (
          <Text key={timestamp} fontSize="sm" color="black.80">{timestamp}</Text>
        ))}
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
