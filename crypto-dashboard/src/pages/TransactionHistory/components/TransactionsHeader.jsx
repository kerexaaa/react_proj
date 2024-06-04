import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

const TransactionsHeader = ({ allTransactions, transactions, setTransactions }) => {

  const tabs = [
    {
      name: "All",
      count: 6,
    },
    {
      name: "Deposit",
      count: 2,
    },
    {
      name: "Withdraw",
      count: 2,
    },
    {
      name: "Buy",
      count: 1,
    },
  ];

  const filterTransactions = (name) => {
    if (name.toLowerCase() === "all") {
      setTransactions(allTransactions)
      return;
    }
    const newTransactions = allTransactions.filter((transaction) => transaction.type.toLowerCase().trim().includes(name.toLowerCase()));
    setTransactions(t => newTransactions)
  }

  const searchTransactions = (e) => {
    const newTransactions = allTransactions.filter((transaction) => transaction.id.toLowerCase().trim().includes(e.target.value.toLowerCase()) 
    || transaction.type.toLowerCase().trim().includes(e.target.value.toLowerCase()));
    setTransactions(t => newTransactions)
  }

  return (
    <HStack justify="space-between">
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <HStack>
            {tabs.map((tab, index) => (
              <Tab onClick={() => filterTransactions(tab.name)} gap="2" key={index}>
                {tab.name}
                <Tab
                  borderRadius="full"
                  fontWeight="medium"
                  bg="black.5"
                  py="1"
                  px="3"
                  fontSize="sm"
                  color="black.60"
                >
                  {tab.count}
                </Tab>
              </Tab>
            ))}
          </HStack>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="purple.500"
          borderRadius="1px"
        />
      </Tabs>

      <Stack>
        <InputGroup>
          <InputLeftElement>
            <Icon textStyle="h5" color="black.60" as={IoSearchOutline}/>
          </InputLeftElement>
          <Input onChange={(e) => searchTransactions(e)} variant="flushed" fontSize="sm" border="none" color="black.60" placeholder="Search By ID or destination" />
        </InputGroup>
      </Stack>
    </HStack>
  );
};

export default TransactionsHeader;
