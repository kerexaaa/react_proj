import { Button, Divider, Flex, Icon } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import { LuDownload } from "react-icons/lu";
import { CustomCard } from "../../chakra/CustomCard";
import TransactionsHeader from "./components/TransactionsHeader";
import TransactionsTable from "./components/TransactionsTable";
import { useState } from "react";

const TransactionHistory = () => {

  const allTransactions = [
    {
      id: "HD82NA2H",
      date: "2024-06-09",
      time: "07:06 PM",
      type: "INR Deposit",
      method: "E-Transfer",
      amount: "+ ₹81,123.10",
      status: "Pending"
    },
    {
      id: "HD82NA3H",
      date: "2022-06-07",
      time: "02:48 PM",
      type: "INR Withdraw",
      method: "Wire Transfer",
      amount: "- ₹81,123.10",
      status: "Processing"
    },
    {
      id: "HD82NA4H",
      date: "2022-06-04",
      time: "09:21 AM",
      type: "Buy",
      amount: "+ 12.48513391 BTC",
      amountD: "- $81,123.10",
      status: "Cancelled"
    },
    {
      id: "HD82NA5H",
      date: "2022-06-03",
      time: "01:32 PM",
      type: "Sell",
      amount: "- 0.36401628 BTC",
      amountD: "+ $19,378.84",
      status: "Completed"
    },
    {
      id: "HD82NA6H",
      date: "2022-06-03",
      time: "09:02 AM",
      type: "BTC Deposit",
      amount: "+ 4.13946104 BTC",
      amountD: "+ $37,929.31",
      status: "Completed"
    },
    {
      id: "HD82NA7H",
      date: "2022-06-01",
      time: "01:56 PM",
      type: "BTC Withdraw",
      amount: "- 10.00000000 BTC",
      amountD: "- $62,017.58",
      status: "Completed"
    },
  ]

  const [transactions, setTransactions] = useState(allTransactions);


  return (
    <DashboardLayout title="Transactions">
      <Flex mb="4" justify="end">
        <Button leftIcon={<Icon textStyle="h5" as={LuDownload}> </Icon>} fontWeight="medium" fontSize="sm" bg="purple.500">Export CSV</Button>
      </Flex>
      <CustomCard borderRadius="16px" position="relative">
        <TransactionsHeader transactions={transactions} allTransactions={allTransactions} setTransactions={setTransactions}></TransactionsHeader>
        <Divider left="0" pos="absolute" w="full" />
        <TransactionsTable transactions={transactions} allTransactions={allTransactions}>
        </TransactionsTable>
      </CustomCard>
    </DashboardLayout>
  )
}

export default TransactionHistory