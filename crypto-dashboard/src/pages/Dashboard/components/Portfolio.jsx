import { Box, Button, HStack, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, Tag, Text } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";

const Portfolio = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="lg"
      p="6"
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      <HStack
        spacing={{
          base: "4",
          xl: "16",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Popover>
              <PopoverTrigger>
                <Box>
                  <Icon fontSize="sm" as={FaInfoCircle} />
                </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>Your total portfolio balance from all wallets</PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
          <Text fontWeight="bold" textStyle="h2">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
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
                22.39401000
              </Text>{" "}
              <Tag fontWeight="medium" colorScheme="gray">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="bold">
                ₹ 1,300.00
              </Text>{" "}
              <Tag fontWeight="medium" colorScheme="gray">
                INR
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={LuArrowDownToLine}></Icon>}>Deposit</Button>
        <Button leftIcon={<Icon as={LuArrowUpToLine}></Icon>}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
