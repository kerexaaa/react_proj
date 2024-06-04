import { Stack, Table, TableContainer, Tag, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";

const TransactionsTable = ({ transactions }) => {

  const transactionsSpecies = ["ID", "Date & Time", "Type", "Amount", "Status"];


  return (
    <Stack>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {transactionsSpecies.map((species,index) => (
                <Th fontSize="xs" color="black.60" py="6" textTransform="none" key={index}>
                  {species}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td verticalAlign="baseline" fontSize="sm" fontWeight="medium">{transaction.id}</Td>
                <Td>
                  <Stack gap="0">
                    <Text fontSize="sm" fontWeight="medium">{transaction.date}</Text>
                    <Text color="black.60" fontSize="xs" fontWeight="medium">{transaction.time}</Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack gap="0">
                    <Text fontSize="sm" fontWeight="medium">{transaction.type}</Text>
                    <Text color="black.60" fontSize="xs" fontWeight="medium">{transaction.method}</Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack gap="0">
                    <Text fontSize="sm" fontWeight="medium">{transaction.amount}</Text>
                    <Text color="black.60" fontSize="xs" fontWeight="medium">{transaction.amountD}</Text>
                  </Stack>
                </Td>
                <Td>
                  <Tag color="white" bg={
                    transaction.status.toLowerCase() == "pending" ? "black.60" : "" 
                    || transaction.status.toLowerCase() == "processing" ? "orange.5" : ""
                    || transaction.status.toLowerCase() == "cancelled" ? "red.5" : ""
                    || transaction.status.toLowerCase() == "completed" ? "green.5" : ""
                    }
                    borderRadius="full"
                    fontWeight="medium"
                    py="1"
                    px="3"
                    fontSize="xs"
                    >{transaction.status}</Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default TransactionsTable;
